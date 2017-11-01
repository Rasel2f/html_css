jQuery(document).ready(function($) {
    $(".staff-list").owlCarousel({
        items: 4,
        margin: 30,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        nav:true,
        navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        
    });
});