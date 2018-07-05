$(window).on('load', function () {
	var $preloader = $('#preloader'),
	$pr_anm = $preloader.find('.preload-logo');
	$pr_anm.fadeOut('slow',function(){$(this).remove();});
	$preloader.delay(500).fadeOut('slow');
	$('html').css({'overflow-y': 'scroll'});
});

$(document).ready(function(){
	$('.body').scrollspy({target: ".scrolling-navbar"});

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

	$("#about-department").jParticle({
		background: "#fff",
		color: "#787ab3",
		particlesNumber: 100,
		createLinkDist: 150,
		disableLinks: false,
		speed: 60
	});

	$('#teachers').jParticle({
		background: "#fff",
		color: "#787ab3",
		particlesNumber: 100,
		createLinkDist: 150,
		disableLinks: false,
		speed: 60
	});

	$('#ist-stud-proj').jParticle({
		background: "#fff",
		color: "#787ab3",
		particlesNumber: 50,
		createLinkDist: 100,
		disableLinks: false,
		speed: 60
	});
});