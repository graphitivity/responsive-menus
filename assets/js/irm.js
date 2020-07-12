$(document).ready(function() {
    "use strict";
    //Variables
    //---------------------------------------------------------------------- 
    //Global Variables of irm

    var menu            = $('.irm'),
        subMenu         = $('.irm li:has(ul)'),
        menuWrap        = $('.menu-wrap'),
        togBtn          = $('.toggle-btn'),
        viewport        = window.innerWidth,
        win             = $(window).outerWidth();

    // End  Variables
    //---------------------------------------------------------------------- 
    // MAKE Menu Scrollable (show custom scrollbar if menu items are longer than viewport).

    function scrollable() {
        if (togBtn.next(menuWrap).hasClass('show')) {
            var sctollTog = this;
            setTimeout(function() {
                menuWrap.css('overflow-y', 'auto');
            }, 500); 
        }
    }

    // End menu scroll
    //----------------------------------------------------------------------
    // Hide/Show menu

    function resetMenu() {
        togBtn.removeClass('active');
        menuWrap.removeClass('show');  
        menu.find(".submenu-in").removeClass("submenu-in");
        menu.find(".submenu-indicator-active").removeClass("submenu-indicator-active");   
        menuWrap.css('overflow-y', '');
        $('html').css({
            'overflow': '',
            'margin-right': ''
        });
    }

    menu.on('click', '.toggle-btn', function(event) {
         event.preventDefault();
        if ($(this).is('.active')) {
            resetMenu();
        } else {
            resetMenu();
            $(this).toggleClass('active');
            $(this).next().toggleClass('show'); 
            scrollable();  
        }
    });

    // End of Hide/Show menu
    //---------------------------------------------------------------------- 
    // Collapse menu in tablet

        function preventFocu() {
        menuWrap.css('display','none');
            setTimeout(function() {
                menuWrap.css('display', '');
            }, 10); 
        }
        function collapseMenu() {
             var toggleMenu = $('.toggle-in-tablet .toggle-btn'), 
                slideMenu = $('.slide-in-tablet .toggle-btn');
            if (toggleMenu.css('display') == 'none') {
                $('.toggle-in-tablet').removeClass('toggle-menu');
                menuWrap.css('overflow-y', '');
            }else if(toggleMenu.css('display') == 'block') {
                $('.toggle-in-tablet').addClass('toggle-menu');
                menuWrap.css('overflow-y', 'auto');               
            }
            if (slideMenu.css('display') == 'none') {
                $('.slide-in-tablet').removeClass('slide');
                menuWrap.css('overflow-y', '');
            }else if(slideMenu.css('display') == 'block') {
                $('.slide-in-tablet').addClass('slide');
                menuWrap.css('overflow-y', 'auto');
                 preventFocu();
            }                      
        };
        collapseMenu();
        $(window).resize(collapseMenu);

    //end of collapse menu in tablet
    //---------------------------------------------------------------------- 
    // Toggle Submenu

    // Hide all submenu if any open
    subMenu.children("ul").addClass("submenu-out");
    // Add submenu indicators
    subMenu.addClass('submenu-indicator');
    menu.find('li a').on('click', function(event) {
        // add active class to clicked link
        menu.find('a').removeClass('irm-active');
        $(this).addClass('irm-active');        
        // Toggle Opened Submenu
        var parent = $(this).parent()
        if ($(this).parent().is('li:has(ul)')) {
            event.preventDefault();
            parent.siblings().find('ul.submenu-in').removeClass('submenu-in');
            parent.find('ul:first').toggleClass('submenu-in');            
            $(this).parent('li:has(ul)').toggleClass('submenu-indicator-active').siblings().removeClass('submenu-indicator-active');
        } else {
            //reset Menu   
            resetMenu();
            scrollable();
            // hideScroll();
        }
    });

    // End of Toggle Submenu
    //---------------------------------------------------------------------- 
    // Split Menu    

    function listSplit() {
        var listTotal = $('.li-split').children('li').length,
            splitWidth = $('.brand').width() + 40,
            splitItem = listTotal / 2;       
        if ($('.li-split.li-responsive').css('flex-direction') == 'column') {            
            $('.li-split > li:nth-child(' + splitItem + ')').css("margin-right", "");
        } else {
            $('.li-split > li:nth-child(' + splitItem + ')').css("margin-right", splitWidth);
        }
    };
    listSplit();
    $(window).resize(listSplit);

    // End of Split Menu
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

      $('a[href^="#"]').on('click',(function() {
        var target = $(this.hash);
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
        return false;
    }));



    // End of One page Scroll
    //---------------------------------------------------------------------- 
   
}); 
    //----------------------------------------------------------------------
    //--------------------// End of irm.js //------------------------------- 
    //----------------------------------------------------------------------  
    










