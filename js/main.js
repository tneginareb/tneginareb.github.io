// --------------------------------------------------
// Homepage Slider
// -------------------------------------------------- 
// Can also be used with $(document).ready()
jQuery(window).ready(function() {
        jQuery('.flexslider').flexslider({
        animation: "fade",        
        slideshow: true,
        easing: "swing",
        touch: true,
        slideshowSpeed: 7000,
        animationSpeed: 600,    
        directionNav: false,
        controlNav: false
    });
});
// --------------------------------------------------
// Animated Effects
// --------------------------------------------------
jQuery(window).load(function($) {  
      jQuery('.animated').appear(function() {
        var elem = jQuery(this);
        var animation = elem.data('animation');
        if ( !elem.hasClass('visible') ) {
            var animationDelay = elem.data('animation-delay');
            if ( animationDelay ) {
                setTimeout(function(){
                    elem.addClass( animation + " visible" );
                }, animationDelay);
            } else {
                elem.addClass( animation + " visible" );
            }
        }
    });
});