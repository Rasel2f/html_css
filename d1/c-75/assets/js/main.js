(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $('#bar1').barfiller({
            barColor: '#FFFFFF'
        });
        $('#bar2').barfiller({
            barColor: '#FFFFFF'
        });
        $('#bar3').barfiller({
            barColor: '#FFFFFF'
        });
        $('#bar4').barfiller({
            barColor: '#FFFFFF'
        });

    });


    jQuery(window).load(function () {


    });


}(jQuery));