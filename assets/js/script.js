(function ($) {
	// Header area start here ***
	/*-------- Mobile Menu Start--------*/
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300, "swing");
		} else {
			element.addClass("open");
			element.children("ul").slideDown(300, "swing");
			element.siblings("li").children("ul").slideUp(300, "swing");
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp(300, "swing");
		}
	});
	/*-------- Menu Top Fixed Start--------*/
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 500) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	// Header area end here ***

	var sliderActive1 = ".banner-slider";
	var sliderInit1 = new Swiper(sliderActive1, {
		loop: true,
		slidesPerView: 1,
		speed: 4000,
		effect: "fade",
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".banner-pegi",
			type: "fraction",
		},
	});
	// Here this is use for animate ***
	function animated_swiper(selector, init) {
		var animated = function animated() {
			$(selector + " [data-animation]").each(function () {
				var anim = $(this).data("animation");
				var delay = $(this).data("delay");
				var duration = $(this).data("duration");
				$(this)
					.removeClass("anim" + anim)
					.addClass(anim + " animated")
					.css({
						webkitAnimationDelay: delay,
						animationDelay: delay,
						webkitAnimationDuration: duration,
						animationDuration: duration,
					})
					.one("animationend", function () {
						$(this).removeClass(anim + " animated");
					});
			});
		};
		animated();
		init.on("slideChange", function () {
			$(sliderActive1 + " [data-animation]").removeClass("animated");
		});
		init.on("slideChange", animated);
	}
	animated_swiper(sliderActive1, sliderInit1);

	// Scroll down area start here ***
	$("#scrollDown").on("click", function () {
		setTimeout(function () {
			$("html, body").animate({ scrollTop: "+=1000px" }, "slow");
		}, 1000);
	});
	// Project slider area end here ***

	// Donation slider area start here ***
	var swiper = new Swiper(".donation__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 500,
		centeredSlides: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".donation__arry-next",
			prevEl: ".donation__arry-prev",
		},
		breakpoints: {
			991: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 1,
			},
		},
	});
	// Donation slider area end here ***

	// Donation slider area start here ***
	var swiper = new Swiper(".donation-five__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 500,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".donation__arry-next",
			prevEl: ".donation__arry-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			991: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
			},
		},
	});
	// Donation slider area end here ***

	// Service three slider area start here ***
	var swiper = new Swiper(".service-three__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 1000,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
			575: {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".service-three__dot",
			clickable: true,
		},
	});
	// Service three slider area end here ***

	// Animal gallery slider area start here ***
	var swiper = new Swiper(".animal-gallery__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 1000,
		centeredSlides: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			991: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: ".animal__arry-next",
			prevEl: ".animal__arry-prev",
		},
	});
	// Animal gallery slider area end here ***

	// Team slider area start here ***
	var swiper = new Swiper(".team__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 500,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: ".team__arry-next",
			prevEl: ".team__arry-prev",
		},
	});
	// Team slider area end here ***

	// Blog two slider area start here ***
	var swiper = new Swiper(".blog-two__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 500,
		centeredSlides: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".donation__arry-next",
			prevEl: ".donation__arry-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 2,
			},
		},
	});
	// Blog two slider area end here ***

	// Animal slider area start here ***
	var swiper = new Swiper(".animal__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 500,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 6,
			},
			768: {
				slidesPerView: 4,
			},
			320: {
				slidesPerView: 2,
			},
		},
	});
	// Animal slider area end here ***

	// Testimonial slider area start here ***
	var swiper = new Swiper(".testimonial__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 500,
		grabCursor: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".testimonial__dot",
			clickable: true,
		},

		breakpoints: {
			991: {
				slidesPerView: 2,
			},
			575: {
				slidesPerView: 1,
			},
		},
	});
	// Testimonial slider area end here ***

	// Testimonial two slider area start here ***
	var swiper = new Swiper(".testimonial-two__slider", {
		loop: "true",
		spaceBetween: 20,
		speed: 500,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".testimonial-two__dot",
			clickable: true,
		},
	});
	// Testimonial two slider area end here ***

	// Blog slider area start here ***
	var swiper = new Swiper(".blog__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 500,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".blog__dot",
			clickable: true,
		},
	});
	// Blog slider area end here ***

	// History slider area start here ***
	var swiper = new Swiper(".history__slider", {
		slidesPerView: "auto",
		freeMode: true,
		mousewheel: {
			releaseOnEdges: true,
			sensitivity: 2,
		},
		pagination: {
			el: ".history__pegi-number",
			type: "fraction",
		},
	});
	// History slider area end here ***

	// Image src js area start here ***
	$(document).on("click", ".changeImage", function () {
		// Get the image URL from the "data-image" attribute of the clicked button
		var newImage = $(this).data("image");

		// Define the fade duration in milliseconds (e.g., 1000ms for 1 second)
		var fadeDuration = 50; // Change this value to your desired duration

		// Fade out the current image with the specified duration
		$("#myImage").fadeOut(fadeDuration, function () {
			// Change the src attribute of the image
			$("#myImage").attr("src", newImage);

			// Fade in the new image with the specified duration
			$("#myImage").fadeIn(fadeDuration);
		});
	});
	// Image src js area end here ***

	// Hide & show by toggle js area start here ***
	$(document).on("click", ".share-btn", function () {
		var target = $(this).data("target");
		$("#" + target).toggle();
	});
	// Hide & show by toggle js area end here ***

	// Hide & show by click js area start here ***
	$(document).on("click", ".share-btn", function () {
		var target = $(this).data("target");
		$("#" + target).toggle();
	});
	// Hide & show by click js area end here ***

	// Hide & show by click and outer js area start here ***
	function closeDiv() {
		$("#targetElement").addClass("side_bar_hidden");
	}
	$(document).on("click", "#openButton", function () {
		$("#targetElement").removeClass("side_bar_hidden");
	});
	$(document).on("click", "#closeButton", function (e) {
		e.stopPropagation();
		closeDiv();
	});
	$(document).on("click", function (e) {
		if (
			!$("#targetElement").hasClass("side_bar_hidden") &&
			!$(e.target).closest("#targetElement").length
		) {
			closeDiv();
		}
	});
	// Hide & show by click and outer js area end here ***

	// Radio btn area start here ***
	$(document).ready(function () {
		$(document).on("click", ".radio-btn span", function () {
			$(this).toggleClass("radio-btn-active");
		});
	});
	// Radio btn area end here ***

	// Isotope area start here ***
	var $grid = $(".filter__items").isotope({});
	// click here
	$(".filter__list").on("click", "li", function () {
		var filterValue = $(this).attr("data-filter");
		$grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$(".filter__list").each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on("click", "li", function () {
			$buttonGroup.find(".active").removeClass("active");
			$(this).addClass("active");
		});
	});
	// Isotope area end here ***

	// Background image date area start here ***
	$("[data-background").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});
	// Background image date area end here ***

	// Video popup area start here ***
	$(".video-popup").magnificPopup({
		type: "iframe",
		iframe: {
			markup:
				'<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				"</div>",

			patterns: {
				youtube: {
					index: "youtube.com/",

					id: "v=",

					src: "https://www.youtube.com/embed/%id%?autoplay=1",
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1",
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed",
				},
			},

			srcAction: "iframe_src",
		},
	});
	// Video popup area end here ***

	// Map popup area start here ***
	$(".map-popup").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	// Map popup area end here ***

	// Add payment amount area start here ***
	$(document).on("click", ".amount-btn", function () {
		// Remove the "active" class from all buttons
		$(".amount-btn").removeClass("active");

		// Add the "active" class to the clicked button
		$(this).addClass("active");

		// Get the text value of the clicked button
		var buttonValue = $(this).text();

		// Update the value attribute of the input element
		$(".addAmount-value").val(buttonValue);
	});
	// Add payment amount area end here ***

	// Payment button area start here ***
	$(document).on("click", ".payment-btn", function () {
		// Check if the clicked button already has the "active" class
		if ($(this).hasClass("active")) {
			// If it does, remove the "active" class
			$(this).removeClass("active");
		} else {
			// If it doesn't, remove the "active" class from all buttons
			$(".payment-btn").removeClass("active");
			// Add the "active" class to the clicked button
			$(this).addClass("active");
		}
	});
	// Payment button area end here ***

	// Counter up area start here ***
	$(".count").counterUp({
		delay: 20,
		time: 3000,
	});
	// Counter up area end here ***

	// Nice seclect area start here ***
	$(document).ready(function () {
		$("select").niceSelect();
	});
	// Nice seclect area end here ***

	// Footer image popup start here ***
	$(".footer-popup").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});
	// Footer image popup end here ***

	// WOW Animatin area start here ***
	new WOW().init();
	// WOW Animatin area start here ***
})(jQuery);
