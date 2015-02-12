(function() {
  if (typeof window.PlayList === "undefined") {
	window.PlayList = {};
  }
$(document).ready(function() {
	$("#search-button").on('click', function(event){
			event.preventDefault();
			PlayList.Search.search();
	});
});

}());