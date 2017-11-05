jQuery(document).ready(function($) {
    $(".homepage-sliders").owlCarousel({
        items: 1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        
    });
    
    $(".product-promotion").owlCarousel({
        items: 1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        nav:false,        
    });
    
    $(".product-list").masonry();
});