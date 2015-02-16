$(function() {

	if (typeof window.PlayList === "undefined") {
		window.PlayList = {};
	}

	$("#search-button").on('click', function(event){
			event.preventDefault();
			console.log("clicked search button")
			var playFirstVideo = PlayList.Player.playFirstVideo;
      		var loadVideos = function (response) {
      			PlayList.VideoHome.loadVideos(response, playFirstVideo);
      		};

			PlayList.Search.search(loadVideos);
	});


	var upcoming = document.getElementById("upcoming-video-container");

	upcoming.addEventListener("click", function(event) {
		playSelectedVideo(event);
	});

	var viewed = document.getElementById("viewed-video-container");

	viewed.addEventListener("click", function(event) {
		playSelectedVideo(event);
	});

	function playSelectedVideo(event) {
		var targetElement = event.target;
		var hasClass = targetElement.className.indexOf("selector-container");
		var vcode;

		if (hasClass === -1) {
			vcode = targetElement.parentElement.getAttribute("data-id");
		} else {
			vcode = targetElement.getAttribute("data-id");
		}
		PlayList.Player.playSelectedVideo(vcode);
	}

});