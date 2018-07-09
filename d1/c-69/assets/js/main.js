jQuery(document).ready(function ($) {


    $(".responsiv-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]

    });
    $(".portfolio-carousel, .team-slider").owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {}
        }

    });

    $(".menu-trigger").on("click", function () {
        $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
        return false;
    });

    $(".menu-close, .off-canvas-overlay").on("click", function () {
        $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
    });

    $(".top").click(function () {
        $("body, html").animate({
            scrollTop: 0,
        }, 2000);
    });
    
    //sticy footer
    
    var footerheight = $(".site-footer").height();
    
    $(".site-main-wraper").css('margin-bottom', footerheight + 'px');


});