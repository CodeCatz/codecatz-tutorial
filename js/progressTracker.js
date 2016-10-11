function checkProgress() {
  	if (localStorage["progress"]) {
		var savedProgress = JSON.parse(localStorage["progress"]);
		for (var page in savedProgress) {
			if (savedProgress[page] > 0) {
				$("a[href='" + page + "']").addClass('done');
			}
		}
	}
	else {
		var progress = {};
		$(".page-link").each(function() {
			var pageLink = $(this).attr('href');
			progress[pageLink] = 0;
		});
		localStorage["progress"] = JSON.stringify(progress);
		}
};

$(window).scroll(function() {
	// A page is done when the scroll reaches doc height - footer height
	var doneHeight = $(document).height() - $( "footer" ).height();
	if($(window).scrollTop() + $(window).height() >= doneHeight ) {
		updateProgress();
   }
});

function updateProgress() {
	var savedProgress = JSON.parse(localStorage["progress"]);
	var currentPage = window.location.pathname
	savedProgress[currentPage] = 1;
	localStorage["progress"] = JSON.stringify(savedProgress);
	$("a[href='" + currentPage + "']").addClass('done');
};

$(document).ready(function() {
	checkProgress();
});
