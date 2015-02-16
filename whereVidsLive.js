(function() {

if (typeof window.PlayList === "undefined") {
	window.PlayList = {};
}

var playlist = new PlayList.Playlist();

var videos = [];
var currentVideo;
var playedVideos = [];

var VideoHome = PlayList.VideoHome = function () {};

VideoHome.videos = function () {
	return playlist.currentVideo;
}

VideoHome.currentVideo = function () {
	return playlist.currentVideo;
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
    publishedAt: resVideo.snippet.publishedAt,
    isVideo: function(vcode) {
    	vcode === this.id;
    }
  };
}

 VideoHome.loadVideos = function(response, playFirstVideo) {
 	titles = []
  response.items.forEach(function(resVideo, idx) {
    var video = makeVidObject(resVideo)
    titles.push(resVideo.snippet.title)
  	if (typeof video !== "undefined") playlist.add(video);
  });

  // VideoHome.nextVideo();
  PlayList.DomInterface.addTitlesToScreen(videos);
  playFirstVideo();

  return videos;
}

VideoHome.nextVideo = function() {
	// var upComingVideo = videos.shift();
	// var justPlayedVideo = currentVideo;
	// if (typeof currentVideo !== "undefined") playedVideos.push(justPlayedVideo);
	// currentVideo = upComingVideo;
	// return currentVideo.id
	return playlist.nextVideo();
}

VideoHome.playSelected = function(vcode) {
	var video = returnVideo(vcode);
	var idx = videos.indexOf(video);
	videos.splice(idx, 1);
	var justPlayedVideo = currentVideo;
	currentVideo = video;
	playedVideos.push(justPlayedVideo);
}

function returnVideo(vcode) {
	for ( var i = 0; i < videos.length; i++) {
		if (videos[i].isVideo(vcode)) return videos[i];
	}
}

}());