/*global jQuery:false */
jQuery(document).ready(function () {
    "use strict";

/*-----------------------------------------------------------------------------------*/
/*  01. INITIALISE VIDEO BACKGROUND
/*-----------------------------------------------------------------------------------*/
var url_video = "assets/front.mp4";
var url_video2 = "assets/front.ogv";
var url_video3 = "assets/front.webm";
mediaCheck({
        media: '(max-width: 768px)',
        entry: function () {
        },
        exit: function () {

            var videobackground = new jQuery.backgroundVideo(jQuery('#header'), {
                "align": "centerXY",
                "width": 1280,
                "height": 720,
                "path": url_video, 
                "path2": url_video2,
                "path3": url_video3,
            });

        }

}); 

}); 