(function () {

  if (typeof window.PlayList === "undefined") {
    window.PlayList = {};
  }
  
  var Player = PlayList.Player = function () {
    var player;
  } 

  var Videos = PlayList.VideoHome;
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  // var player;
  Player.onYouTubeIframeAPIReady = function(vcode) {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: vcode,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  Player.playFirstVideo = function () {
    cueVideoOrMakePlayer(); 
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function playVideo(){
    player.playVideo();
  }

  function cueVideoOrMakePlayer() {
    Videos.nextVideo()
    var vcode = Videos.currentVideo().id;
    if (typeof player.M === "undefined") {
       Player.onYouTubeIframeAPIReady(vcode);
     } else {
      player.cueVideoById(vcode);
    }
  }

  // 5. The API calls this function when the player's state changes.
  function onPlayerStateChange(event) {
    var state = player.getPlayerState();
    if (state === 0) {   
      cueVideoOrMakePlayer();
    } else if (state === 5) {
      playVideo();
    }
  }

  function closeAdListener() {
    var closeButton = document.getElementById
  }

  function stopVideo() {
    player.stopVideo();
  }

})();
