$(window).on('load', function () {
	var $preloader = $('#preloader'),
	$pr_anm = $preloader.find('.preload-logo');
	$pr_anm.fadeOut('slow',function(){$(this).remove();});
	$preloader.delay(500).fadeOut('slow');
});