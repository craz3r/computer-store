$(document).ready(function(){

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		autoplay: true,
		navClass: ["fa fa-long-arrow-left left","fa fa-long-arrow-right right"],
		navText: ["",""]
	});

	var minP = 0;
	$('.parts__item p').each(function(){
		var curHeight = $(this).height();
		if(curHeight > minP) {
			minP = curHeight;
		}
	});
	$('.parts__item p').each(function(){
		$(this).height(minP);
	});

	$('.aside-menu__item').click(function() {
		$('.aside-menu__item--active').removeClass('aside-menu__item--active');
		$(this).addClass('aside-menu__item--active');
		return false;
	});

	$('.props-table tr').each(function(){
		if($(this).index() % 2) {
			$(this).addClass('even');
		} else {
			$(this).addClass('odd');
		}
	});
});