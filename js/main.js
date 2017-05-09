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
		$('.home-section .show-countdown, .home-section .hide-countdown').css('display','inline-block');
		
		$('.home-section .logo img').removeClass('entrance').addClass('fadeInDown');
		$('.home-section h3.small-title, .home-section .wordrotator-container, .home-section .show-countdown, tab-links, .home-section .hide-countdown').removeClass('entrance').addClass('fadeInDown');
		
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
	function SlideToAbout(){
		$('nav a.to-left').addClass('hide');
		$('nav a.to-right').attr("data-direction","home");
		$('nav a.to-right .arrow-label').html("home");
					
		//-- show about section
		$('.page-container').css("left","100%");
					
		//-- activate jquery fullpage on about section (ONLY ON MEDIUM AND LARGE DEVICES)
		if($(window).width() > 767){
			$('.about-section').fullpage({
				anchors: ['service','service-desc','works'],
				sectionsColor: [],
				navigation: false,
				navigationPosition: 'right',
				navigationTooltips: [],
				slideSelector: '.fullpage-slide',
				scrollOverflow: true,
				sectionSelector: '.fullpage-section'
			});	
		}
	}
	function SlideToContact(){
		$('nav a.to-right').addClass('hide');
		$('nav a.to-left').attr("data-direction","home");
		$('nav a.to-left .arrow-label').html("home");
					
		//-- show contact section
		$('.page-container').css("left","-100%");
					
		//-- activate jquery fullpage on contact section (ONLY ON MEDIUM AND LARGE DEVICES)
		if($(window).width() > 767){
			$('.contact-section').fullpage({
				anchors: ['things','send-message','newsletter'],
				sectionsColor: [],
				navigation: false,
				navigationPosition: 'right',
				navigationTooltips: [],
				slideSelector: '.fullpage-slide',
				scrollOverflow: true,
				sectionSelector: '.fullpage-section'
			});	
		}
	}
	function SlideToHome(){
		//-- show home section
		$('.page-container').css("left","0%");
					
		//-- destroy jquery fullpage instance (ONLY ON MEDIUM AND LARGE DEVICES)
		if($(window).width() > 767){
			$.fn.fullpage.destroy('all');
			$('body,html').css({
				overflow:'hidden',
				height:'100%'
			});	
		}
					
		$('nav a.to-right, nav a.to-left').removeClass('hide');
		$('nav a.to-left').attr("data-direction","about");
		$('nav a.to-left .arrow-label').html("services");
		$('nav a.to-right').attr("data-direction","contact");
		$('nav a.to-right .arrow-label').html("things");
	}
	
	
	/*-- ================================ --
		2.0 window.resize FUNCTION
	/*-- ================================ --*/
	$(window).resize(function(e) {
		
    });
	//-- end window.resize function
	
	/*-- ================================ --
		3.0 window.load FUNCTION
	/*-- ================================ --*/
	$(window).load(function(e) {
		//-- hide preloader
		$('.preloader').addClass('animated fadeOut');
		
		//-- show home content
		var showContent = setTimeout(function(){
			ShowHomeContent();
			
			//-- hide preloader
			$('.preloader').hide();
			
			//-- 3.1 activate word rotator plugin
			$("#wordrotator").wordsrotator({
    			autoLoop: true,                  										//-- auto rotate words
    			randomize: false,                										//-- show random entries from the words array
    			stopOnHover: false,              										//-- stop animation on hover
    			changeOnClick: false,            										//-- force animation run on click
    			animationIn: "fadeInDown",          									//-- css class for entrace animation
    			animationOut: "fadeOutUp",        										//-- css class for exit animation
    			speed: 4000,               		 										//-- delay in milliseconds between two words
    			words: ['better than<br><span class="highlight">ever</span>', 'we have<br><span class="highlight">themes & plugins</span>', 'high quality<br><span class="highlight">shit.</span>']  	//-- Array of words, it may contain HTML values
			});
			
			clearTimeout(this);
		},1000);
    });
	//-- end window.load function
	
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
		
		//-- 5.3 navigation arrow (on large devices) clicked
		$('nav.center-nav a').each(function(index, element) {
            $(this).on('click',function(){
				var direction = $(this).attr("data-direction");
				$.is_slide = false;
				
				//-- wait the animation complete (ONLY ON TABLETS)
				if($(window).width() >= 768 && $(window).width() < 1200){
					var waitAnim = setTimeout(function(){				
						//-- slide to about section
						if(direction == "about"){
							SlideToAbout();
						}
						//-- slide to contact section
						else if(direction == "contact"){
							SlideToContact();
						}
						//-- slide to home section
						else if(direction == "home"){
							SlideToHome();
						}
					
						clearTimeout(this);
					},1000);
				}
				//-- doesn't has to wait the animation (ON LARGE DEVICES)
				else if($(window).width() >= 1200){
					//-- slide to about section
					if(direction == "about"){
						SlideToAbout();
					}
					//-- slide to contact section
					else if(direction == "contact"){
						SlideToContact();
					}
					//-- slide to home section
					else if(direction == "home"){
						SlideToHome();
					}
				}
			});
        });
		
		//-- 5.4 navigation arrow (on extra small devices) clicked
		$('nav.top-nav a').each(function(index, element) {
			$(this).on('click',function(){
				var direction = $(this).attr("data-direction");
				$.is_slide = false;
				
				//-- wait 1 seconds then go to next or prev section
				var waitAnim = setTimeout(function(){				
					//-- slide to about section
					if(direction == "about"){
						SlideToAbout();
					}
					//-- slide to contact section
					else if(direction == "contact"){
						SlideToContact();
					}
					//-- slide to home section
					else if(direction == "home"){
						SlideToHome();
					}
				
					clearTimeout(this);
				},1000);
			});
		});
		
		//-- 5.5 keyboard arrow (left and right) pressed
		$('body').on('keydown',function(e){
			//-- execute if form is not focused
			if(!$('.contact-name, .contact-email, .contact-message, .subscribe-email').is(':focus')){
				if(e.which == 37){
					//-- trigger left navigation arrow (if visible)
					if(!$('nav.center-nav a.to-left').hasClass('hide')){					
						$('nav.center-nav a.to-left').trigger('click');
					}
				}
				//-- right arrow
				else if(e.which == 39){
					//-- trigger right navigation arrow (if visible)
					if(!$('nav.center-nav a.to-right').hasClass('hide')){
						$('nav.center-nav a.to-right').trigger('click');
					}
				}
			}
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
		
		//-- 5.7 activate slideshow background
		if($(".bg-container-slideshow").is(':visible')){
			$(".bg-container-slideshow").backstretch([
				"https://i.imgur.com/XEfpJ9K.png",
			],{
				duration:6000,
				fade:'normal'
			});
		}
		
		//-- 5.8 activate slideshow with kenburns effect
		if($(".bg-container-kenburns").is(':visible')){
			$(".bg-container-kenburns").kenburnsy({
        		fullscreen: true
        	});
		}
		
		//-- 5.9 activate single image + firefly effect
		if($(".bg-container-firefly").is(':visible')){
			$(".bg-container-firefly").backstretch([
				"https://i.imgur.com/XEfpJ9K.png"
			],{
				duration:6000,
				fade:'normal'
			});
			
			$.firefly({
				color: '#646464',	//-- firefly color
				minPixel: 1,					
				maxPixel: 3,
				total : 50,
				on: '.bg-container-firefly'
			});
		}
		
		//-- 5.10 activate youtube video background
		if($(".bg-container-youtube").is(':visible')){
			if($(window).width() >= 1200){
				/*
				* Please note that this player doesn’t work as background for devices due to the restriction policy adopted by all on 
				* managing multimedia files via javascript. It fallsback to the default Youtube player if used as player (not applied to the body).
				*/
				
				$('.player').mb_YTPlayer();
			}
			else{
				$(".bg-container-youtube").backstretch([
					"https://i.imgur.com/XEfpJ9K.png",
					"https://i.imgur.com/XEfpJ9K.png"
				],{
					duration:6000,
					fade:'normal'
				});
			}
		}
				
		//-- 5.11 set background for star-effect
		if($(".bg-star-effect").is(':visible')){
			$(".bg-star-effect").backstretch([
				"https://i.imgur.com/XEfpJ9K.png"
			],{
				duration:6000,
				fade:'normal',
				fullscreen: true
			});
		}
		
		//-- 5.12 init owl-carousel for services
		$('.services .owl-carousel').owlCarousel({
			items:3,
			itemsDesktopSmall: [1024,3],
			itemsTablet: [768,3],
			itemsMobile: [479,1],
			navigation:false,
			pagination:true
		});
		
		//-- 5.13 init owl-carousel for works
		$('.works .owl-carousel').owlCarousel({
			items:2,
			itemsDesktopSmall: [1024,2],
			itemsTablet: [768,1],
			itemsMobile: [479,1],
			navigation:false,
			pagination:true
		});
		
		//-- 5.14 activate magnific popup image
		$('.popup-image').each(function(index, element) {
            $(this).magnificPopup({ 
  				type: 'image',
				closeBtnInside: true,
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});
        });
		
		//-- 5.15 check subscribe form filled or not
		$('.subscribe-email').on('focusout',function(){
			if($(this).val() != "" && $(this).val() != " "){
				$(this).addClass('filled');
			}
			else{
				$(this).removeClass('filled');
			}
		});
		
		//-- 5.16 validate and submit subscribe form
		$('.subscribe-form').validate({
			errorLabelContainer: $('.subscribe-notif'),
			rules: {
	        	EMAIL: {
	            	required: true,
	                email: true
	            }
	        },
			messages: {
				EMAIL: {
					required: "Please insert your email address",
					email: "Your email address is not valid"
				}
			},
			submitHandler: function(form) {							
				var url_dest = $(form).attr('action');
				var form_data = $(form).serialize();
				var form_method = $(form).attr('method');
			
				//-- show loading
				$('.subscribe-notif').show().html('<label class="loading-subscribe">Please wait</label>');
				$('.loading-subscribe').fadeIn('fast');
			
				$.ajax({
					type: form_method,
	        		url: url_dest,
	        		data: form_data,
	        		cache : false,
	        		dataType : 'json',
	        		contentType: "application/json; charset=utf-8",
	        		error : function(err) { alert("Could not connect to the registration server. Please try again later."); },
	        		success : function(data) {
	            		if(data.result == "success"){
							//-- reset form
							$(form).trigger('reset');
							
							//-- set element to focusout
							$('.subscribe-email').focusout();
					
							//-- hide loading
							$('.loading-subscribe').fadeOut('fast',function(){
								//-- show notif
								$('.subscribe-notif').html('<label class="subscribe-notif-success">Thank you for subscribing us.</label>');
								$('.subscribe-notif-success').fadeIn('fast').delay(5000).fadeOut('fast',function(){
									$(this).remove();
									$('.loading-subscribe').remove();
								});
							});
						}
						else{
							//-- reset form
							$(form).trigger('reset');
					
							//-- hide loading
							$('.loading-subscribe').fadeOut('fast',function(){
								//-- show notif
								$('.subscribe-notif').html('<label class="subscribe-notif-error">Error.</label>');
								$('.subscribe-notif-error').fadeIn('fast').delay(5000).fadeOut('fast',function(){
									$(this).remove();
									$('.loading-subscribe').remove();
								});
							});
						}
	        		}
				});
							
				return false;
			}
		});
		//-- end validate and submit subscribe form
		
		//-- 5.17 validate and submit contact us form
		$('.contact-form').validate({
			rules: {
	        	email: {
	            	required: true,
	                email: true
	            },
				name: {
	            	required: true
	            },
				message: {
	            	required: true
	            }
	        },
			highlight: function(element, errorClass, validClass) {
				$(element).addClass('form-error');
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass('form-error');
			},
			errorPlacement: function(error, element) {
    			
 			},
			submitHandler: function(form) {
				var url_dest = $(form).attr('action');
				var form_data = $(form).serialize();
				
				//-- show loading
				$('.contact-notif').show().append('<label class="loading-contact">Please wait</label>');
				$('.loading-contact').fadeIn('fast');
			
				$.post(url_dest,form_data,function(data){
					var success = data;
					
					if(success){
						//-- reset form
						$(form).trigger('reset');
					
						//-- hide loading
						$('.loading-contact').fadeOut('fast',function(){
							//-- show notif
							$('.contact-notif').append('<label class="contact-notif-success">Thank you for contacting us. We will reply you shortly.</label>');
							$('.contact-notif-success').fadeIn('fast').delay(5000).fadeOut('fast',function(){
								$(this).remove();
								$('.loading-contact').remove();
							});
						});
					}
					else{
						//-- reset form
						$(form).trigger('reset');
						
						//-- hide loading
						$('.loading-contact').fadeOut('fast',function(){
							//-- show notif
							$('.contact-notif').append('<label class="contact-notif-error">Error.</label>');
							$('.contact-notif-error').fadeIn('fast').delay(5000).fadeOut('fast',function(){
								$(this).remove();
								$('.loading-contact').remove();
							});
						});
					}
				});
				
				return false;
			}
		});
		//-- end validate and submit contact us form
		
		//-- 5.18 activate local video background
		if($(".bg-container-video").is(':visible')){
			var videobackground = new $.backgroundVideo($('.bg-container-video'), {
        		"align": "centerXY",
				"width": 1280,						//-- proportion (doesnt need to change)
        		"height": 720,						//-- proportion (doesnt need to change)
        		"path": "img/video/",				//-- video folder path
        		"filename": "video_placeholder",	//-- video name
        		"types": ["mp4"]					//-- video file type
      		});
		}
    });
	//-- end document.ready function
})(jQuery);