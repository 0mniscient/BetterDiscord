/*
TABLE OF CONTENTS
1.0 functions
2.0 window.resize FUNCTION
3.0 window.load FUNCTION
    3.1 activate word rotator plugin
4.0 window.scroll FUNCTION
5.0 document.ready FUNCTION
    5.1 "when we launch" button clicked
    5.2 "hide countdown" button clicked
    5.3 navigation arrow (on large devices) clicked
    5.4 navigation arrow (on extra small devices) clicked
    5.5 keyboard arrow (left and right) pressed
    5.6 activate countdown
    5.7 activate slideshow background
    5.8 activate slideshow with kenburns effect
    5.9 activate single image + firefly effect
    5.10 activate youtube video background
    5.11 set background for star-effect
    5.12 init owl-carousel for services
    5.13 init owl-carousel for works
    5.14 activate magnific popup image
    5.15 check subscribe form filled or not
    5.16 validate and submit subscribe form
    5.17 validate and submit contact us form
	5.18 activate local video background
*/

(function($) {
	"use strict";
	
	/*-- ================================ --
		1.0 FUNCTIONS
	/*-- ================================ --*/
	function ShowHomeContent(){
		//-- set visible to show-countdown button (fix bug on firefox)
		$('.home-section .show-countdown, .home-section .hide-countdown, .home-section .button-regular').css('display','inline-block');
		
		$('.home-section .logo img').removeClass('entrance').addClass('fadeInDown');
		$('.home-section h3.small-title, .home-section .wordrotator-container, .home-section .show-countdown, tab-links, .home-section .hide-countdown, .home-section .button-regular').removeClass('entrance').addClass('fadeInDown');
		
		//-- show guide on large devices
		if($(window).width() >= 1200){
			$('.home-section .guide').removeClass('entrance').addClass('fadeInUpCenterX');
		}
	}
	function ShowCountdown(){
		//-- set visibke to hide-countdown button (fix bug on firefox)
		$('.hide-countdown').css('display','inline-block');
		
		$('.hide-countdown').removeClass('entrance').addClass('fadeInUp');
		$('.countdown-container').find('.dash').each(function(index, element) {
            $(this).addClass('visible');
        });
		$('.countdown-container').find('.dash_title').each(function(index, element) {
            $(this).removeClass('entrance').addClass('fadeInUp');
        });
	}
	function HideCountdown(){
		$('.hide-countdown').removeClass('fadeInUp').addClass('entrance');
		$('.countdown-container').find('.dash').each(function(index, element) {
            $(this).removeClass('visible');
        });
		$('.countdown-container').find('.dash_title').each(function(index, element) {
            $(this).removeClass('fadeInUp').addClass('entrance');
        });
		
		//-- hide countdown button (fix bug in firefox)
		var hideButton = setTimeout(function(){
			$('.hide-countdown').css('display','none');
			
			clearTimeout(this);
		},1000);
	}

	
	/*-- ================================ --
		2.0 window.resize FUNCTION
	/*-- ================================ --*/
	$(window).resize(function(e) {
		
    });
	//-- end window.resize function
	
	/*-- ================================ --
		4.0 window.scroll FUNCTION
	/*-- ================================ --*/
	$(window).scroll(function(e) {
		
    });
	//-- end window.scroll function
	
	
	/*-- ================================ --
		5.0 document.ready FUNCTION
	/*-- ================================ --*/
	$(document).ready(function(e) {	
		//-- 5.1 "when we launch" button clicked
		$('.show-countdown').on('click',function(){
			$('.countdown').addClass('open');
			
			//-- show countdown
			var showCountdown = setTimeout(function(){
				ShowCountdown();
				
				clearTimeout(this);
			},500);
		});
		
		//-- 5.2 "hide countdown" button clicked
		$('.hide-countdown').on('click',function(){
			$('.countdown').removeClass('open');
			
			//-- hide countdown
			var hideCountdown = setTimeout(function(){
				HideCountdown();
				clearTimeout(this);
			},500);
		});
		
		
		
		//-- 5.6 activate countdown
		$('.countdown-container').countDown({
			targetDate: {
				'day': 		1,
				'month': 	1,
				'year': 	2020,
				'hour': 	0,
				'min': 		0,
				'sec': 		0
			},
			omitWeeks: true
		});
    });
	//-- end document.ready function
})(jQuery);