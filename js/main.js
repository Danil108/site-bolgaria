$(document).ready(function(){
  $('.your-class').slick({
  	autoplay: true,
  	autoplaySpeed: 3000,
  	arrows: false,
  	dots: true
  });

	$('.menu-btn').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('menu-btn_active');
		$('.menu-nav').toggleClass('menu-nav_active');
});

});

