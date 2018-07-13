jQuery(document).ready(function($) {
    $(".feature-projects").owlCarousel({
        items: 1,
        loop:true,
        autoplay:false,
        autoplayTimeout:3000,
        nav:false,
        navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots:true,
        
    });
});

