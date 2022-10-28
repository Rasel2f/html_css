(function ($) {
    "use strict";
    
    
    jQuery(document).ready(function($){


        $('.video-btn').magnificPopup({
            type: 'iframe',
        });

    });

//=========================================================================

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 500) {
            $("header-area").removeClass("fixed-header");
        } else {
            $("header-area").addClass("fixed-header");
        }
    });
    

    $('.slide-active').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        dots: false,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    })

    //Logo
    $(".logo-carousel").owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            992: {
                items: 6
            }
        }

    });
    
    //Isotope
    
    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: filterValue
        });
    });
    
    $('.grid').isotope({})
    
    //add or remove class
    $('.filtering').on('click', 'span', function (e) {
        e.preventDefault();
        $('.filtering span').removeClass('active');
        $(this).addClass('active');
    });
    
    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -75            // offste (in px) for fixed top navigation
    });
 

})(jQuery);