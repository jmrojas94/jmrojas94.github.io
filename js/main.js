$(document).ready(function(){
	var counter = 0;
	var c = 0;
	var i = setInterval(function(){
		$('.wrapper').hide();
	  	$(".loading-page .counter h1").html(c + "%");
	  	$(".loading-page .counter hr").css("width", c + "%");

		$(".loading-page .counter h1.color").css("width", c + "%");

		counter++;
		c++;
	  
		if(counter == 101) {
	    	clearInterval(i);
	    	// $('.loading-page').fadeOut('normal', function(){
		    //     $('.wrapper').fadeIn();
		    // });
		    $('.loading-page').animate({opacity: '0'},{duration: 500, complete: function(){
		        $('.loading-page').hide();
		        $('.wrapper').fadeIn(2000);
		    }});
		}
	}, 50);

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

