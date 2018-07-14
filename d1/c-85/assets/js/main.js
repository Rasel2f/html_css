jQuery(document).ready(function($) {
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        loop:true,
        autoplay:false,
        autoplayTimeout:3000,
        nav:true,
        navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        
    });
});