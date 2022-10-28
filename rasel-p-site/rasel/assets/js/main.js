(function ($) {
    "use strict";
    
//========================= grab an element=============================
    var myElement = document.querySelector("header");
    // initialise
    var headroom = new Headroom(myElement, {
        offset: 100,
        tolerance: 5,
        classes: {
            initial: "animated",
            pinned: "slideDown",
            unpinned: "slideUp"
        }
    });
    headroom.init();

    // to destroy
    headroom.destroy();

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
    jQuery(document).ready(function(){
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
    })
    
    //***********Isotope***************
    
    $('.filtering').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: filterValue
        });
    });
    
    $('.grid').isotope({})
    
    //***************add or remove class**************
    $('.filtering').on('click', 'a', function (e) {
        e.preventDefault();
        $('.filtering a').removeClass('active');
        $(this).addClass('active');
    });
    
    //***************magnificPopup**************
     $('.popup-img').magnificPopup({
         type:'image',
         gallery: {
            enabled: true
          },
     });
    
    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: 0            // offste (in px) for fixed top navigation
    });
 
    //Gmap
    $(document).ready(function(){
        var center = [22.337032, 89.870780];
        $("#googleMap")
            .gmap3({
                center: center,
                zoom: 10,
                scrollwheel: false,
                mapTypeId : google.maps.MapTypeId.ROADMAP
            })
            .marker({
                position: center,
                icon: 'https://maps.google.com/mapfiles/marker_green.png'
              });
              
    });
 
    //barfiller
    $(document).ready(function(){
        $('#bar1').barfiller({
            barColor: '#C0F9D7'
        });
        $('#bar2').barfiller({
            barColor: '#C0F9D7'
        });
        $('#bar3').barfiller({
            barColor: '#C0F9D7'
        });
        $('#bar4').barfiller({
            barColor: '#C0F9D7'
        });

              
    });
 
    //Back to top
    $('.top').hide();
    $(window).scroll(function () {
        var jkono = $(this).scrollTop();

        if (jkono < 500) {
            $('.top').fadeOut(1000);
        } else {
            $('.top').fadeIn(1000);
        }
    });

    $(document).ready(function(){
        $(".top").click(function () {
            $("body, html").animate({
                scrollTop: 0,
            }, 1000);
        });

              
    });


    //nabbar hide
    $(document).ready(function(){
        $("ul.navbar-nav li a").click(function () {
            $(".navbar-collapse").removeClass("show");
        });
              
    });

})(jQuery);