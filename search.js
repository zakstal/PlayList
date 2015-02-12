 // After the API loads, call a function to enable the search box.
(function () {

if (typeof window.PlayList === "undefined") {
  window.PlayList = {};
}

var Search = PlayList.Search = {};  

Search.handleAPILoaded = function () {
  $('#search-button').attr('disabled', false);
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var playVideo = function (vcode) {
  PlayList.Player.onYouTubeIframeAPIReady(vcode);
  console.log(player, vcode, "this is the player");
  // $(".project-picture-container").html('<iframe id="user-video-play" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
}

// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }


// function stopVideo() {
//   player.stopVideo();
// }


// Search for a specified string.
var videos;
 Search.search = function () {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    maxResults: 10
  });
  console.log("request", request)
  request.execute(function(response) {
    var videos = putVideosInArray(response);
    console.log(videos, "these are the videos");
    playVideo(findDefinedVideo(videos));
  });
}

function findDefinedVideo(videos) {
  var id;
  for (var i in videos) {
    id = videos[i].id;
    if ( typeof id !== "undefined" ) {
      break;
    }
  }
  return id;
}

function makeVidObject(resVideo) {
 return {
    id: resVideo.id.videoId,
    title: resVideo.snippet.title,
    thumbnails: resVideo.snippet.thumbnails,
    publishedAt: resVideo.snippet.publishedAt
  };
}

function putVideosInArray(response) {
  videos = []
  titles = []
  response.items.forEach(function(resVideo) {

    var video = makeVidObject(resVideo)
    titles.push(resVideo.snippet.title)
    videos.push(video);
  });

  addTitlesToScreen(titles);

  return videos;
}

function addTitlesToScreen(titles) {
  var $ul = $('<ul>');
  titles.forEach(function(title){
    $ul.append('<li>' + title + '</li>' )
  });

  $('#view-and-search-window').append($ul)
}
}());