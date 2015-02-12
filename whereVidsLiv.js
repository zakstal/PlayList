(function() {
	if (typeof window.PlayList === "undefined") {
		window.PlayList = {};
	}

	var VideoHome = PlayList.VideoHome = function () {
		var videos = [];
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

 VideoHome.putVideosInArray = function(response) {
  titles = []
  response.items.forEach(function(resVideo) {

    this.video = makeVidObject(resVideo)
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