jQuery(document).ready(function($) {
    $(".home-slider-area").owlCarousel({
        items: 1,
        loop: true,
        nev: false,
        dots: true,
        autoplay: true,
        
    });
    
    $(".logo-carousel").owlCarousel({
        items: 5,
        loop: true,
        margin: 30,
        nev: false,
        dots: false,
        autoplay: true,
        
    });
});