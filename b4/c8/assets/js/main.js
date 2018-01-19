jQuery(document).ready(function ($) {

    //Popup Plugin js Active
    $('.video-btn').magnificPopup({
        type: 'video'
    });

    //Counter Up Plugin js Active
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    //Google Maps
    $('#map')
      .gmap3({
        center:[22.3138535,89.8530471],
        zoom:12,
        mapTypeId: "shadeOfGrey", // to select it directly
        mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
        },
        scrollwheel: false
      })
      .styledmaptype(
        "shadeOfGrey",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#f8561b"},{"lightness":40}]},
          {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#218a53"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#218a53"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#fbb717"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#fbb717"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fbb717"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffce42"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#f9fdff"},{"lightness":17}]}
        ],
        {name: "Shades of Grey"}
      );
});