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
            .marker({
                position: center,
                icon: 'assets/img/map-marker.png'
              });

        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	

