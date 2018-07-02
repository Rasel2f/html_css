jQuery(document).ready(function($) {
    $(".listing-carousel").owlCarousel({
        items: 3,
        margin: 30,
        loop:true,
        autoplay:false,
        autoplayTimeout:3000,
        dots: true,
        nav:false,
        navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        
    });
});