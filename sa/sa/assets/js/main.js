(function ($) {
    "use strict";


    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 500) {
            $("#header-area").removeClass("fixed-header");
        } else {
            $("#header-area").addClass("fixed-header");
        }
    });



})(jQuery);