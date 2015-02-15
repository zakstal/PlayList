(function () {
	if (typeof window.PlayList === "undefined") {
		window.PlayList = {};
	}
	var DomInterface = PlayList.DomInterface = function () {};

	DomInterface.addTitlesToScreen = function(videos) {
	  var upComingVidContainer = $('#upcoming-video-container');

	  videos.forEach(function(video){
	  	var vidEl = DomInterface.makeSelectionEl(video);
	  	upComingVidContainer.append(vidEl);
	  });
	}

	DomInterface.makeSelectionEl = function (video) {
		var $selection = $('<div class="selector-container group" data-id="' + video.id + '"></div');
		var $vidThumb = $('<img src="' + video.thumbnails.default.url + '">');
		var $title = $('<p>' + video.title + '</p>');

		$selection.append($vidThumb);
		$selection.append($title);

		return $selection;
	}
}());