$(document).ready(function(){
	$('#send').on('click', function(){
		alert('Вибачте, дана функція тимчасово не працює.');
	});

	// ===== TABS VIDEO SOUND
	$('.tabs-container').tab('show');

	$(document).on('show.bs.modal', '.modal', function(){
        var data = $(this).data('src');
        $(this).find('iframe').attr('src', data);
    });
    $(document).on('hidden.bs.modal','.modal', function () {
        var frame = $(this).find('iframe'),
                attr = frame.attr('src');
        frame.attr('src', attr);
    });

    // ===== CAROUSEL
    $('.carousel').carousel();

    // ===== BANER
    $('.banner').on('click', function(){
    	$('#price-tabs .tabs li a').removeClass('active');
    	$('[href="#edit-price"]').addClass('active');
    	$('#edit-price').addClass('active show').siblings().removeClass('active show');
    });
    initSliders();
    $('.slider .ui-slider-handle').prepend('<span></span>');
});

// ===== SCROLLING
// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50});

// Add smooth scrolling on all links inside the navbar
$("a.page-scroll").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {

	    // Prevent default anchor click behavior
	    event.preventDefault();

	    // Store hash
	    var hash = this.hash;

	    // Using jQuery's animate() method to add smooth page scroll
	    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	    $('html, body').animate({
	      scrollTop: $(hash).offset().top
	    }, 800, function(){

	    // Add hash (#) to URL when done scrolling (default click behavior)
	      window.location.hash = hash;
	    });

	  } // End if

});

