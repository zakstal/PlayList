(function() {

if (typeof window.PlayList === "undefined") {
	window.PlayList = {};
}

var videos = [];
var currentVideo;
var playedVideos = [];

var VideoHome = PlayList.VideoHome = function () {};

VideoHome.videos = function () {
	return videos;
}

VideoHome.currentVideo = function () {
	return currentVideo;
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

 VideoHome.putVideosInArray = function(response, playFirstVideo) {
 	videos = [];
 	titles = []
  response.items.forEach(function(resVideo, idx) {
    var video = makeVidObject(resVideo)
    titles.push(resVideo.snippet.title)
  	videos.push(video);
  });

  // VideoHome.nextVideo();
  PlayList.DomInterface.addTitlesToScreen(videos);
  playFirstVideo();

  return videos;
}

 VideoHome.nextVideo = function() {
	var upComingVideo = videos.shift();
	var justPlayedVideo = currentVideo;
	if (typeof currentVideo !== "undefined") playedVideos.push(justPlayedVideo);
	currentVideo = upComingVideo;
}

function addTitlesToScreen(titles) {
  var $ul = $('<ul>');
  titles.forEach(function(title){
    $ul.append('<li>' + title + '</li>' )
  });

  $('#upcoming-video-container').append($ul)
}

}());