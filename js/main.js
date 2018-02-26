/*global jQuery:false */
(function($) {
    $(window).load(function() {
        "use strict";

/*-----------------------------------------------------------------------------------*/
/*  1. PRELOADING ANIMATION
/*-----------------------------------------------------------------------------------*/

        $('#loading-status').fadeOut(); 
        $('#loader').fadeOut('fast');
        $('body').css({'overflow':'visible'});
         setTimeout(function(){$('#main-wrap').removeClass('nopreload')},200);

    });
})(jQuery);
/*global jQuery:false */
jQuery(document).ready(function ($) {
    "use strict";

/*-----------------------------------------------------------------------------------*/
/*  1. FITVIDS
/*-----------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*	2. FLEXSLIDER SETTINGS
/*-----------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------*/
/*  3. SCROLL TO TOP BUTTON
/*-----------------------------------------------------------------------------------*/
     
    $('.totop').click(function () { 
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

/*-----------------------------------------------------------------------------------*/
/*  4. MOBILE NAVIGATION
/*-----------------------------------------------------------------------------------*/

    $("#collapse").hide();
    $(".collapse-menu-inner").toggle(function () {
        
      $("#collapse").slideToggle(300);
      return false;

    }, function () {

      $("#collapse").slideToggle(300);
      return false;
    });
 
/*-----------------------------------------------------------------------------------*/
/*  5. SCROLL DOWN BUTTON HEADER
/*-----------------------------------------------------------------------------------*/

mediaCheck({
media: '(max-width: 1024px)', 
      entry: function () {
      },
      exit: function () {

    $('.down-arrow a').click(function() {
        $.scrollTo($(this).attr('href'), {duration: 800, offset:-60});
        return false;
    });
    }
});

    $('#mobile-device-down a').click(function() {
        $.scrollTo($(this).attr('href'), {duration: 800, offset:0});
        return false;
    });

});