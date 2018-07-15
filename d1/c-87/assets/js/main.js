jQuery(document).ready(function($) {
    $(".homepage-slides").owlCarousel({
        items: 1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        dotsData: true,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        
    });
});