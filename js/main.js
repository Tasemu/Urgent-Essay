$(document).ready(function() {

	var tbtn = $('.testimonials-btn');
	var tback = $('.about-quit-btn');
	var lbtn = $('.login-btn');
	$('.lightbox').colorbox();

	tbtn.click(function(){
		$(".testimonials").animate({
			opacity: 1,
			width: "100%"
		}, 500);
		$(".testimonials").css('display', 'block');
		tbtn.hide();
	});

	lbtn.click(function() {
		$('.login').animate({
			opacity: 1,
			width: '100%'
		}, 500);
		$('.login').css('display', 'block');
		lbtn.hide();
	});

	$('.testimonials-btn-small').click(function() {
		tbtn.click();
	});

	$('.login-btn-small').click(function() {
		lbtn.click();
	});

	tback.click(function() {
		$('.testimonials').animate({
			opacity: 0,
			width: "0%"
		}, 500);
		$('.testimonials').css('display', 'none');
		tbtn.show();
	});

});