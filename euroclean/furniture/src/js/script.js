$(document).ready(function(){
  $('.video-carousel').slick({
    infinite: true,
  slidesToShow: 2,
   slidesToScroll: 1
  });

  var nav = $('.menu-header');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 80) {
			nav.addClass("fixed-nav");
		} else {
			nav.removeClass("fixed-nav");
		}
	});

  // Add smooth scrolling on all links inside the navbar
  $("#navbarNavAltMarkup a").on('click', function(event) {
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
    }  // End if
  });
});