$( document ).ready(function() {
    $('.tooltip').tooltipster();

    var test = $('.post-title').html();
	var result = test.replace(/\:/g,':<hr />');      

	$('.post-title').html(result);

	$('.recap').prepend("<h2>What did you learn?</h2>");
});