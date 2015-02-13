 // After the API loads, call a function to enable the search box.
(function () {

if (typeof window.PlayList === "undefined") {
  window.PlayList = {};
}

var Search = PlayList.Search = function () {};  

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
    var videos = PlayList.VideoHome.putVideosInArray(response);
    console.log(videos, "these are the videos");
    playVideo(findDefinedVideo(videos));
  });
}


}());