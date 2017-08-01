jQuery(document).ready(function($) {
    $(".homepage-slides").owlCarousel({
        items: 1,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        nav:true,
        navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        
    });
});