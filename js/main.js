$(document).ready(function(){
	var altura = $('.varnav').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.varnav').addClass('varnav-fixed');
		} else {
			$('.varnav').removeClass('varnav-fixed');
		}
	});
    
    
    var altura = $('.ccc').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.ccc').addClass('ccc-fixed');
		} else {
			$('.ccc').removeClass('ccc-fixed');
		}
	});
});