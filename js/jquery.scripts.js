$( document ).ready(function() {
    $('.tooltip').tooltipster();

    if( $('.post-title').length ) {
	    var test = $('.post-title').html();
		var result = test.replace(/\:/g,':<hr />');      

		$('.post-title').html(result);
	}

	$('img').parent().addClass('image');
});
