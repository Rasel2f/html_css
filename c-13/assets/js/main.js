jQuery(document).ready(function($) {
    
    $(".welcome-area").YTPlayer({
        fitToBackground: true,
        videoId: 'LSmgKRx5pBo'
    });
    
    
    
    var homepageSlides = $(".homepage-slides");
    
    homepageSlides.owlCarousel({
        items: 1,
        loop:true,
        autoplay:true,
        dots:true,
        autoplayTimeout:3000,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]  
    });
    
    homepageSlides.on('translated.owl.carousel', function(event) {
        $(".welcome-area-text h4").css('color', 'red');
        $(".welcome-area-text h1").removeClass("animated jackInTheBox");
        $(".welcome-area-text p").removeClass("animated fadeIn");
    }); 
    
    homepageSlides.on('translated.owl.carousel', function(event) {
        $(".welcome-area-text h1").addClass("animated jackInTheBox");
        $(".welcome-area-text p").addClass("animated fadeIn");
    });
});