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
    
    $(".menu-trigger").on("click", function() {
        $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
        return false;
    });
    
    $(".menu-close, .off-canvas-overlay").on("click", function() {
        $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
    });
});