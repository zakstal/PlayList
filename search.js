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

  // Search for a specified string.
  var videos;
   Search.search = function () {
    console.log("am searching. in Search.search")
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet',
      maxResults: 8
    });
    console.log("request", request)
    request.execute(function(response) {
      var playFirstVideo = PlayList.Player.playFirstVideo;
      PlayList.VideoHome.putVideosInArray(response, playFirstVideo);
      
    });
  }

}());