$(function {

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	checkScroll(scrollPos, introH); 



	$(window).on("scroll resize", function({
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH );
		
	}));

	function checkScroll(scrollPos, introH ) {
		if( scrollPos > introH ) {
				header.addClass("fixed");
		} else {
				header.removeClass("fixed");
		}
	}


	console.log(introH);



	$("[data-scroll]").on("click", function(event){
		event.preventDevault(); 

		let elementId = $(this). data('scroll');
		let elementOffset = $(elementId). offset().top;

		nav.removeClass("show");

		$("hetml, body").animate({
			scrollTop: elementOffset - 70
		}, 700);
	});




// Nav Togle
navToggle.on("click" ,function(event) {
	event.preventDevault();

	nav.toggleClass("show");
}); 


// Reviews

let slider = $("#reviewsSlider");

slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true
});

});





















