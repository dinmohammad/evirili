// -----------------------------

//   js index
/* =================== */
/*  
    

    

*/
// -----------------------------


(function($) {
    "use strict";



    /*---------------------
    preloader
    --------------------- */

    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });


    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
    $('nav#dropdown').meanmenu();

    /*-----------------
    meanmenu 
    -----------------*/
    $('nav#mobile_menu_active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu-area .container',
    });

    /*-----------------
    sticky
    -----------------*/
    // $(window).on('scroll', function() {
    //     if ($(window).scrollTop() > 85) {
    //         $('header').addClass('navbar-fixed-top');
    //     } else {
    //         $('header').removeClass('navbar-fixed-top');
    //     }
    // });

    /*-----------------
    scroll-up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });

    /*------------------------------
         counter
    ------------------------------ */
    // $('.counter-up').counterUp();


    /*---------------------
    smooth scroll
    --------------------- */
    // $('.smoothscroll').on('click', function(e) {
    //     e.preventDefault();
    //     var target = this.hash;

    //     $('html, body').stop().animate({
    //         'scrollTop': $(target).offset().top - 80
    //     }, 1200);
    // });


    /*---------------------
    countdown
    --------------------- */
    // $('[data-countdown]').each(function() {
    //     var $this = $(this),
    //         finalDate = $(this).data('countdown');
    //     $this.countdown(finalDate, function(event) {
    //         $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
    //     });
    // });

    /*---------------------
    Product slider js
    --------------------- */
    function product_slider() {
        var owl = $(".product_slider");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    product_slider();

    /*---------------------
    tap js
    --------------------- */
    $( function() {
        $( "#tabs" ).tabs({
          event: "mouseover"
        });
    } );
    /*---------------------
    quantity btn js
    --------------------- */
    $('.add').click(function () {
        if ($(this).prev().val() < 10) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });

   
    // $('.image-link').magnificPopup({type:'image'});
    


  
}(jQuery));
