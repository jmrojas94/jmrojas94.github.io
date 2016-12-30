$(document).ready(function(){
	// Menu settings
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#menu').toggleClass('menu-open');
	});

	$('a[href*="#"]:not([href="#"])').click(function() {
	  	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	    	var target = $(this.hash);
	    	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	    if (target.length) {
	      	$('html, body').animate({
	        	scrollTop: target.offset().top
	      	}, 1000);
	      		return false;
	    	}
	  	}
	});
})