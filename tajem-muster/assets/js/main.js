jQuery(document).ready(function($) {
    $(".hero-carousel").owlCarousel({
        items: 1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        nav:false,
        navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots:true,
        
    });

    
    //****************************************************//    
    /* Navigation smoot scroll*/
      $('li.smooth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '83';
            $('html, body').stop().animate({
              scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1000, 'easeInOutExpo');
          event.preventDefault();
      });
    
    //Jquery scrool spy
    
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 95
    });
    
    $('.parallax-bg').scrolly({bgParallax: true});
    
    $("ul.nav.navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass("in");
    });
    
      // Scroll Events
    $(window).scroll(function () {

        var wScroll = $(this).scrollTop();

        // Activate menu
        if (wScroll > 50) {
            $('#header-top').addClass('active');
        } else {
            $('#header-top').removeClass('active');
        };
        
        $('.video-btn').magnificPopup({
            type: 'video',
        });


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
        slidesToShow: 5,
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
    
    // scroll Up
     $('.scrollup').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

});