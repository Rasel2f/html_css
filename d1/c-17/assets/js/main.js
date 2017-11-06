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
    
    //search
    
    $(".search-trigger").on("click", function() {
        $(".header-search, .off-canvas-overlay-2").addClass("active-2");
        return false;
    });
    
    $(".off-canvas-overlay-2").on("click", function() {
        $(".header-search, .off-canvas-overlay-2").removeClass("active-2");
    });
});