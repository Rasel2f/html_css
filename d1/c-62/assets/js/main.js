(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".project-title li").on('click', function(){
            var selector = $(this).attr("data-filter");
            $(".porejct-item").isotope({
                filter: selector
            });
            $(".project-title li").removeClass("active");
            $(this).addClass("active")
        });


       $(".porejct-item").isotope();


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	