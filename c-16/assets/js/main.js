jQuery(document).ready(function($) {
   
    $(".protfolio-filter li").on('click', function() {
        var filterData = $(this).attr("data-filter");
        
        $(".protfolio-list").isotope({
            filter: filterData,
        });
        
        $(".protfolio-filter li").removeClass("active");
        $(this).addClass("active");
    
    });
    
    $(".protfolio-list").isotope({
            itemSelector: '.single-protfolio-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.single-protfolio-item',
                horizontalOrder: true

            } 
        
    });
    
    $("body").perfectScrollbar();
    $(".scroll-another").perfectScrollbar({
        theme: 'yellow'
    });
});