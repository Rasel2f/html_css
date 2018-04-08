(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $('.projects-titles li').on('click', function() {
            
            $('.projects-titles li').removeClass('active');
            $(this).addClass('active');
            
           var selector = $(this).attr('data-filter');
            $('.projects-list').isotope({
                filter: selector
            });
        });
        
            $(".top").click(function(){
             $("body, html").animate({
                 scrollTop: 0,
             },1000);
        });
    });
    
    $('.top').hide();
    jQuery(window).scroll(function() {
        var jkono = $(this).scrollTop();
        
        if(jkono<100){
            $('.top').fadeOut(1000);
        } else {
            $('.top').fadeIn(1000);
        }
    });


    jQuery(window).load(function($){
        
        jQuery('.projects-list').isotope();
        
    });


}(jQuery));	