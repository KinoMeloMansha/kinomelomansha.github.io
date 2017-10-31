$(document).ready(function(){
	// $('.tabs a').click(function (e) {
 //  		e.preventDefault()
 //  		$(this).tab('show')
	// });

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

    // ==== RANGES
	// $( "#slider1" ).slider({
	// 	min: 1,
	// 	max: 3,
	// 	values: [ 1 ],
	// 	step: 1,
	// 	slide: function(event, ui){
	// 		console.log(ui.values);
	// 	},
	// });

	// $( "#slider2" ).slider({
	// 	min: 1,
	// 	max: 3,
	// 	values: [ 1 ],
	// 	step: 1,
	// 	slide: function(event, ui){
	// 		console.log(ui.values);
	// 	},
	// });

	// $( "#slider3" ).slider({
	// 	min: 1,
	// 	max: 3,
	// 	values: [ 2 ],
	// 	step: 1,
	// 	slide: function(event, ui){
	// 		console.log(ui.values);
	// 	},
	// });

	// $( "#slider4" ).slider({
	// 	min: 1,
	// 	max: 5,
	// 	values: [ 3 ],
	// 	step: 1,
	// 	slide: function(event, ui){
	// 		console.log(ui.values);
	// 	},
	// });

    initSliders();
    $('.slider .ui-slider-handle').prepend('<span></span>');




	// $( "#slider1" ).slider({
 //      range: true,
 //      min: 10,
 //      max: 60,
 //      values: [ 10 ],
 //      slide: function( event, ui ) {
 //        $( "#amount" ).val();
 //   		 console.log(ui.values);
 //      }
 //    });
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

