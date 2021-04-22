jQuery(document).ready(function (e) {
    // menu responsive
    $(document).ready(function () {
        $('.mobile-menu-btn').click(function(){
            $('.header-main .bottom nav').css('right','0');
        });
        $('.close_menu').click(function(){
            $('.header-main .bottom nav').css('right','-105%');
        });
    });


    // menu sticky
    $(document).ready(function(){
        var menu = document.querySelector('.menu');
        var origTopCoordinateMenu = menu.offsetTop;

        function scroll () {
            if ($(window).scrollTop() >= origTopCoordinateMenu) {
                $('.menu').addClass('sticky');
                $('.content').addClass('menu-padding');
            } else {
                $('.menu').removeClass('sticky');
                $('.content').removeClass('menu-padding');
            }
        }
        document.onscroll = scroll;
    });


    // index slider
    $(document).ready(function(){
        $("#vedeo").owlCarousel();
    });


    // search filter
    $(document).ready(function () {
        $('.show_form').click(function(){
            $('.none_address').css('display','none');
            $('.user-info-form').css('display','block');
        });

    });

    // show more in footer
    $(document).ready(function () {
        $('.more_about').click(function(){
            $(this).css('display','none');
            $('footer .about-sec p').css('height','auto');
            $('.less_about').css('display','block');
        });
    });
    $(document).ready(function () {
        $('.less_about').click(function(){
            $(this).css('display','none');
            $('footer .about-sec p').css('height','65px');
            $('.more_about').css('display','block');
        });
    });

    // show filter
    $(document).ready(function () {
        $('.show_filter').click(function(){
            $('aside').css('right','0');
            $('.apply_filter').css('right','0');
        });
        $('.apply_filter').click(function(){
            $(this).css('right','-105%');
            $('aside').css('right','-105%');
        });
    });

});