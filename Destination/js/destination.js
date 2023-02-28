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
	if(durotto > 1400){
		$('.scroll-to-top').fadeIn();
	}
	else{
		$('.scroll-to-top').fadeOut();
	}
	//for-menu
/*	if(durotto > 105){
		$('.menu-part').addClass('exam-m');
	}
	else{
		$('.menu-part').removeClass('exam-m');
	}*/


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
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	var $grid = $('.grid').isotope({
	  // set itemSelector so .grid-sizer is not used in layout
	  itemSelector: '.grid-item',
	  percentPosition: true,
	 /* masonry: {
	    // use element for option
	    columnWidth: '.grid-item'
	  }*/
	});

	


	$('.button-group button').on('click',function(){
        $('.button-group button').removeClass('current');
        $(this).addClass('current');
    })

	//water ripples
	$('.header-area').ripples();


	

	

}) (jQuery);