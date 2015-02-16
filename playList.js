
// methods:
// note - the list is an object that contains the videos in played videos array and all vidoes array

// this.getSetList 		returns the current list or sets a list to the current list
// this.add 						add a video to the current play lists 
// this.remove	     		remove a video by vcode from the current play list
// this.allVideos 			returns or sets all videos in the play list
// this.videoShowList  reutrns 9 next videos after the current playing video
// this.currentVideo 	returns the current video 
// this.playedVideos 	returns all videos that have played 
// this.nextVideo 			returns the next video after the current video or sets the video 
// 										with the received vcode as the current video

(function() {
	if (typeof window.PlayList === "undefined") {
		window.PlayList = {};
	}	

	var List;
	var Playlist = PlayList.Playlist = function (videos) {
		makeList(videos);
	};

	function makeList(videos){
		var vids;
		if (typeof videso === "undefined") {
			vids = [];
		} else {
			vids = videos;
		}
		List = list(vids);
	};

	function list(vids) {
		return { 
			allVideos: vids,
			videoShowList: function () {
				this.allVideos.slice(1,10);
			},
			currentVideo: function () {
				this.allVideos[0]
			},
			playedVideos: []
		}
	}

	Playlist.prototype.getSetList = function(list) {
		if (typeof list === "undefined"){
			makeList();
		}
		return List;
	};

		Playlist.prototype.add = function(video) {
		this.allVideos().push(video);
	};

	Playlist.prototype.remove = function(vcode) {
		var video = returnVideo(vcode);
		var idx = this.allVideos().indexOf(video);
		var video = videos.splice(idx, 1);
		return video; 
	};

	Playlist.prototype.allVideos = function(videos) {
		if (typeof videos !== "undefined") {
			List.allVideos = videos;
		}
		return List.allVideos;
	};

	Playlist.prototype.videoShowList = function() {
		return List.videoShowList();
	};

	Playlist.prototype.currentVideo = function() {
		return List.currentVideo();
	};

	Playlist.prototype.playedVideos = function(video) {
		if (typeof video !== "undefined") {
			List.playedVideos.push(video);
		}
		return List.playedVideos;
	};	

	Playlist.prototype.nextVideo = function(vcode) {
		if (typeof vcode === "undefined") {
			this.VideoFromAllVideosToPlayedVideo()
		} else {
			this.selectedToCurrent(vcode);
		}

		return this.currentVideo.id
	};

	function VideoFromAllVideosToPlayedVideo() {
		var video = this.allVideos().shift();
		this.playedVideos(video);
	};

	function selectedToCurrent(vcode) {
		var video = this.remove(vcode);
		var justPlayedVideo = this.currentVideo;
		this.currentVideo = video;
		playedVideos.push(justPlayedVideo);
	};

	function returnVideo(vcode) {
		for ( var i = 0; i < videos.length; i++) {
			if (this.allVideos()[i].isVideo(vcode)) return this.allVideos()[i];
		}
	}
}());