(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        var center = [22.337032, 89.870780];
        $("#map")
            .gmap3({
                center: center,
                zoom: 12,
                scrollwheel: false,
                mapTypeId : google.maps.MapTypeId.ROADMAP
            })
            .circle({
                center: center,
                radius : 750,
                fillColor : "#FFAF9F",
                strokeColor : "#FF512F"
              });
        
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	