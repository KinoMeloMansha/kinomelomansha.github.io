$(window).on('load', function () {
	var $preloader = $('#preloader'),
	$pr_anm = $preloader.find('.preload-logo');
	$pr_anm.fadeOut('slow',function(){$(this).remove();});
	$preloader.delay(500).fadeOut('slow');
	$('html').css({'overflow-y': 'scroll'});
});

$(document).ready(function(){
	$('#directions-tabs').tab('show');
	$('#about-us-tabs').tab('show');
	$('.collapse').collapse();
	// $('#tests-modal').modal('show');
	// $('#testResultModal').modal('show');

	$('.carousel').carousel({
		interval: 4000
	});

	var $carousel = $('#boardCarousel');
	
	var handled=false;
	var itemclicked="";
	$carousel.bind('slide.bs.carousel', function (e) {
	    var current=$(e.target).find('.carousel-item.active');
	    var indx=$(current).index();
	    if((indx+2) > ($('.board .carousel-indicators li').length)){
	        indx=-1
	    }
	       
	     if(!handled)
	     {
	        $('.board .carousel-indicators li').removeClass('active')
	        $('.board .carousel-indicators li:nth-child('+(indx+2)+')').addClass('active');
	     }
	     else
	     {
	        handled=!handled;
	     }
	    
	});

	$(".board .carousel-indicators li").on('click',function(){
	   $(this).addClass('active').siblings().removeClass('active');
	   handled=true;
	});

	$('.post-text').on('click', function(){
		var a = $(this).html();
		$('.get-text').empty().append(a);
	});

});



