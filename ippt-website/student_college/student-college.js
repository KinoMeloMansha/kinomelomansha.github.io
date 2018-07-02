// Preloader
$(window).on('load', function () {
	var $preloader = $('#preloader'),
	$pr_anm = $preloader.find('.preload-logo');
	$pr_anm.fadeOut('slow',function(){$(this).remove();});
	$preloader.delay(500).fadeOut('slow');
	$('html').css({'overflow-y': 'scroll'});
});

$(document).ready(function(){
	$('body').scrollspy({target: ".navbar-scroll"});

	// Add smooth scrolling on all links inside the navbar
	$("a.nav-link-scroll").on('click', function(event) {
		if (this.hash !== "") {
		    event.preventDefault();
		    var hash = this.hash;
		    $('html, body').animate({
		      scrollTop: $(hash).offset().top
		    }, 800, function(){
		      window.location.hash = hash;
		    });
		} 
	});

	$('a.scroll-down').on('click', function() {
			var hash = $('#student-college');
		    $('html, body').animate({
		      scrollTop: $(hash).offset().top
		    }, 800, function(){
		      window.location.hash = hash;
		    });
	});
});
