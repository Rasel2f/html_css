(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $('#clock').countdown('2020/10/10', function (event) {
            $(this).html(event.strftime('<span class="countdown-wrap"><span class="singile-countdown-item">%w <br><span>Weeks</span></span><span class="singile-countdown-item">%d <br><span>Days</span></span><span class="singile-countdown-item">%H <br><span>Hours</span></span><span class="singile-countdown-item">%M <br><span>Minutes</span></span><span class="singile-countdown-item">%S <br><span>Seconds</span></span></span>'));
        });

        $('#mymc-form').ajaxChimp({
            url: 'https://netlify.us18.list-manage.com/subscribe/post?u=680494e9c6c8d889e9fddbddd&amp;id=79fdf91e62'
        });


    });


    jQuery(window).load(function () {


    });


}(jQuery));