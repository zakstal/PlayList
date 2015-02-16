(function () {
	if (typeof window.PlayList === "undefined") {
		window.PlayList = {};
	}

	var DomInterface = PlayList.DomInterface = function () {};

	DomInterface.addTitlesToScreen = function(videos) {
	  var upComingVidContainer = $('#upcoming-video-container');
	  var $sectinoTitle = $('<p>Upcoming Videos</p>');
	  upComingVidContainer.empty(); 
	  upComingVidContainer.append($sectinoTitle);
	  videos.forEach(function(video){
	  	var vidEl = DomInterface.makeSelectionEl(video);
	  	upComingVidContainer.append(vidEl);
	  });
	  slideFramesAtStart();
	}

	DomInterface.makeSelectionEl = function (video) {
		var $selection = $('<div class="selector-container group offset" data-id="' + video.id + '"></div');
		
		var $vidThumb = $('<img src="' + video.thumbnails.default.url + '">');
		var title = video.title.slice(0,20);
		var $title = $('<p>' + title + "..." + '</p>');
		
		$selection.append($vidThumb);
		$selection.append($title);

		return $selection;
	}

	function timer(container, time) {
		window.setTimeout(function() {
			console.log("container",container)
			var className = " offset";
			container.className = container.className.replace(className,"");
		},time);
	}

	function slideFramesAtStart() {
		var upComingVidContainer = document.getElementById("upcoming-video-container");
		var toSlide = upComingVidContainer.getElementsByClassName("selector-container")
		var time = 3250;
		for (var i = 0; i < toSlide.length; i++ ){
			var container = toSlide[i];
			timer(container, time);
			time -= 25;
		}

	}


}());