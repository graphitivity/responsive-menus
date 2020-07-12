$(document).ready(function() {
    "use strict";
    //Variables
    //---------------------------------------------------------------------- 
    //Global Variables of irm

    var demoMenu  = $('.menu--demo'),
    menu            = $('.irm'),
    viewport        = window.innerWidth,
    win             = $(window).outerWidth();

    //----------------------------------------------------------------------
 //---------------------------------------------------------------------- 
    // One page scroll

        var sections = $('section'),
            nav_height = menu.outerHeight();
        $(window).on('scroll', function() {
            var cur_pos = $(this).scrollTop();
            sections.each(function() {
                var top = $(this).offset().top - nav_height,
                    bottom = top + $(this).outerHeight();
                if (cur_pos >= top && cur_pos <= bottom) {
                    menu.find('a').removeClass('irm-active');
                    sections.removeClass('irm-active');
                    $(this).addClass('irm-active');
                    menu.find('a[href="#' + $(this).attr('id') + '"]').addClass('irm-active');
                }
            });
        });

      $('a[href^="#"]').click(function() {
        var target = $(this.hash);
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
        return false;
    });

    // End of One page Scroll
    //---------------------------------------------------------------------- 
    // revel on scroll
      
     $(document).scroll(function() {
      var y = $(this).scrollTop(),
          revealOnScroll = $('.reveal-onscroll');
      if (y > 800) {
        // $('.reveal-onscroll');
        revealOnScroll.fadeIn(1250);
      } else {
        revealOnScroll.fadeOut(1000);
        // $('#irm-header').css('display','block');
      }
    });


    // End reveal on scroll
    //---------------------------------------------------------------------- 
    //  Toggle demo image


    demoMenu.find('li a').on('click', function(event) {
        event.preventDefault();
        $(this).parents().find('a').removeClass('irm-active');
        $(this).addClass('irm-active');

        var menuTxt = $(this).text();
         var menuI = $('.demo-showcase img').each(function() {
            var altTxt  = $(this).attr('alt');        
           // $(this).attr('alt');
            if ( altTxt === menuTxt ){            
            $(this).removeClass('hide');
            event.preventDefault();
            } else {                
                $(this).addClass('hide');
             }            
        });
    });
 
   
    //----------------------------------------------------------------------
});
    //---------------------------------------------------------------------- 
    // End of irm.js










