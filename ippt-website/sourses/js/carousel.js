var $carousel = $('#boardCarousel');
// $carousel.carousel();
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