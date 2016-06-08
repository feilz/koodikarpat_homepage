/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) { // li:not(.dropdown) a.page-scroll, .dropdown.open a.page-scroll
        event.preventDefault();
        if($('.visible-xs').is(':visible') && !$(this).hasClass('dropDownOpen') && $(this).parent().hasClass('dropdown')) {
        	$(this).addClass('dropDownOpen');
        }
		else {
			$('.navbar-toggle:visible').click();
		    var $anchor = $(this);
		    $('html, body').stop().animate({
		        scrollTop: $($anchor.attr('href')).offset().top
		    }, 1500, 'easeInOutExpo');
		    $(this).removeClass('dropDownOpen');
        }
    });

    
	  	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	})

});

