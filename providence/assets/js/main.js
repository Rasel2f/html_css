jQuery(document).ready(function ($) {
    $(".screen-carousel").owlCarousel({
        items: 3,
        margin: 100,
        loop: true,
        autoplay: true,
        center: true,
        autoplayTimeout: 5000,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });

    // Scroll Events
    $(window).scroll(function () {

        var wScroll = $(this).scrollTop();

        // Activate menu
        if (wScroll > 20) {
            $('#main-nav').addClass('active');
        } else {
            $('#main-nav').removeClass('active');
        };

        //Scroll Effects

    });

    // Navigation
    $('.navigation').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('open');
        $('.offcanvas-menu').toggleClass('open');

        if ($('.offcanvas-menu').hasClass('open')) {
            $('.menu-close').on('click', function (e) {
                e.preventDefault();
                $('.offcanvas-menu').removeClass('open');
            })
        }
    });
    
    //Price
    
    $('.price-table.pro').on('click', function () {
        $(this).addClass('highlighted');
        $('.price-table.free').removeClass('highlighted');
    });
    $('.price-table.free').on('click', function () {
        $(this).addClass('highlighted');
        $('.price-table.pro').removeClass('highlighted');
    });
    
    $('.individual-active').on('click', function () {
        $('.individual').addClass('active');
        $('.company').removeClass('active');
    });
    $('.company-active').on('click', function () {
        $('.company').addClass('active');
        $('.company .price-table.free').addClass('highlighted');
        $('.individual').removeClass('active');
    });

    // Wow Animations
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();


    // Menu For Xs Mobile Screens
    if ($(window).height() < 450) {
        $('.offcanvas-menu').addClass('xs-screen');
    }

    $(window).on('resize', function () {
        if ($(window).height() < 450) {
            $('.offcanvas-menu').addClass('xs-screen');
        } else {
            $('.offcanvas-menu').removeClass('xs-screen');
        }
    });

    // Magnific Popup
    $(".video-play-btn").magnificPopup({
        type: 'video'
    });




    //Gmap3

    var center = [22.337032, 89.870780];
    $("#map")
        .gmap3({
            center: center,
            zoom: 5,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        })
        .circle({
            center: center,
            radius: 750,
            fillColor: "#267DF4",
            strokeColor: "#FF512F"
        });

    // Slick Slider || Testimonial
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
          ]
    });



});