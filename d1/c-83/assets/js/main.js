(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

         $("#web-progressbar").circleProgress({
        	value: 0.9,
        	size: 200,
        	fill: '#20BABF',
        	thickness: 2,
        	emptyFill: '#fff',
        	reverse: true,

        }).on('circle-animation-progress', function(event, progress) {
		    $(this).find('.progressbar-percentage').html(Math.round(90 * progress) + '<i>%</i>');
		});
        
        $("#graphic-progressbar").circleProgress({
        	value: 0.95,
        	size: 200,
        	fill: '#20BABF',
        	thickness: 2,
        	emptyFill: '#fff',
        	reverse: true,

        }).on('circle-animation-progress', function(event, progress) {
		    $(this).find('.progressbar-percentage').html(Math.round(95 * progress) + '<i>%</i>');
		});

        $("#digital-marketing-progressbar").circleProgress({
        	value: 0.84,
        	size: 200,
        	fill: '#20BABF',
        	thickness: 2,
        	emptyFill: '#fff',
        	reverse: true,

        }).on('circle-animation-progress', function(event, progress) {
		    $(this).find('.progressbar-percentage').html(Math.round(84 * progress) + '<i>%</i>');
		});


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	