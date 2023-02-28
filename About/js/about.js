(function($){

	'use strict'

	//menubar sliding

	$('.icon-part-bars .fa-bars').on('click',function(){
		$('.menu-part-menu ul').animate({
			'right' : 0
		}, 1000);
	})
	$('.cross .fa-times').on('click',function(){
		$('.menu-part-menu ul').animate({
			'right' : -250
		}, 1000);
	})

	/*scrolling*/
	$('.scroll-to-top').hide();

	$('.scroll-to-top').on('click',function(){
		$('html').animate({
		'scrollTop' : 0
	},800)
	});

	$(window).scroll(function(){
		var durotto = $(window).scrollTop();

	//for scrollToTop
	if(durotto > 1000){
		$('.scroll-to-top').fadeIn();
	}
	else{
		$('.scroll-to-top').fadeOut();
	}


	//owl carousel

	$('.owl-carousel').owlCarousel({
     loop:true,
     margin:10,
     autoplay:true,
     autoplayTimeout:3000,
     nav:true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:2
         },
         1000:{
             items:3
         }
     } }) 


	});
	/*ratings*/
	$('.rating .a5').on('click',function(){
		$('.rating .a5').addClass('rating-add');
	});
	$('.rating .a4').on('click',function(){
		$('.rating .a4').addClass('rating-add');
		$('.rating .b1').removeClass('rating-add');
	});
	$('.rating .a3').on('click',function(){
		$('.rating .a3').addClass('rating-add');
		$('.rating .b2').removeClass('rating-add');
	});
	$('.rating .a2').on('click',function(){
		$('.rating .a2').addClass('rating-add');
		$('.rating .b3').removeClass('rating-add');
	});
	$('.rating .a1').on('click',function(){
		$('.rating .a1').addClass('rating-add');
		$('.rating .b4').removeClass('rating-add');
	});

	//water ripples
	$('.header-area').ripples();
	

}) (jQuery);