jQuery(document).ready(function($) {
    $(".team-carousel").owlCarousel({
        items: 3,
        margin: 30,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        
    });
});