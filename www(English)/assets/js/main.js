(function($) {
"use strict";
    
    
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".main-menu-area").removeClass("scroll-header");
        } else {
            $(".main-menu-area").addClass("scroll-header");
        }
    });
    
    
}) (jQuery);