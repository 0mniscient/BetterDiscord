(function($) {
	"use strict";
		
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
			//-- hide page preloader
			$('.preloader').hide();
			
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
		
    });
	//-- end document.ready function
})(jQuery);