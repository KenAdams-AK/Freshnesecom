$(document).ready(function () {

	// ! Burger menu open

	const menuBtn = $('.products__menu-btn');
	let menuOpen = false;

	menuBtn.on('click', function () {
		if (!menuOpen) {
			$('.products__nav').addClass('active');
			menuBtn.addClass('open');
			menuOpen = true;
		} else {
			$('.products__nav').removeClass('active');
			menuBtn.removeClass('open');
			menuOpen = false;
			// ! Remove sub-menu active
			$('.sub-menu').removeClass('active');
			subMenuActive = false;
		}
	});

	// ! Sub-menu open

	const subMenuBtn = $('#pharmacy');
	let subMenuActive = false;

	subMenuBtn.on('click', function () {
		if (!subMenuActive) {
			$('.sub-menu').addClass('active');
			subMenuActive = true;
		} else {
			$('.sub-menu').removeClass('active');
			subMenuActive = false;
		}

	});

	// ! Counter

	const plus = $('.plus');
	const minus = $('.minus');
	const int = $('.amount');

	let integer = 0;

	plus.on('click', function () {
		integer += 1;
		int.html(integer);
	});

	minus.on('click', function () {
		if (integer > 0) {
			integer -= 1;
		};
		int.html(integer);
	});

	// ! Tabs

	const tab = $('.tab-item');
	const content = $('.desc__articles');

	content.not(':first').hide();
	tab.on('click', function () {
		tab.removeClass('active').eq($(this).index()).addClass('active');
		content.hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass('active');

	// ! Popup modal windows

	const vitamin = $('#vitamins-list p');
	const overlay = $('.popup__overlay');
	// const popUp = $('.popup__popup');
	const popUpClose = $('.popup-close');

	vitamin.on('click', function () {
		$('main').css('filter', 'blur(5px)');
		overlay.eq($(this).index()).fadeIn();
	});

	popUpClose.on('click', function () {
		overlay.fadeOut();
		$('main').css('filter', 'none');
	});

	$(document).on('mouseup', function (e) {
		if (e.target != overlay && overlay.has(e.target).length === 0) {
			overlay.fadeOut();
			$('main').css('filter', 'none');
		}
	});

	// ! Slider

	$('.owl-carousel').owlCarousel({
		items: 4,
		margin: 16,
		autoplay: true,
		loop: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
	});

});