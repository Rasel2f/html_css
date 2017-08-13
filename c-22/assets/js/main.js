jQuery(document).ready(function($) {
    $(".protfolio-items-owl").owlCarousel({
        items: 5,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        nav:true,
        dots: true,
        navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        
    });
});