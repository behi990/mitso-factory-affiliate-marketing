$(document).ready(function() {

    $('.product_slider .owl-carousel').owlCarousel({
        rtl: true,
        items: 5,
        lazyLoad: true,
        loop: true,
        margin: 7.5,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: false,
        responsive: {
            0: {
                nav: true,
                items: 2,
                margin: 10,
            },
            500: {
                nav: false,
                items: 2,
            },
            600: {
                nav: false,
                items: 3,
                margin: 15,
            },
            768: {
                nav: false,
                items: 4,
                margin: 15,
            },
            990: {
                nav: false,
                items: 5,
            },
            1200: {
                items: 5,
            },
            1500: {
                items: 5,
            }
        }
    });


    $('.news_slider .owl-carousel').owlCarousel({
        rtl: true,
        items: 2,
        lazyLoad: true,
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                nav: true,
                items: 1,
                margin: 10,
            },
            500: {
                nav: false,
                items: 1,
            },
            600: {
                nav: false,
                items: 1,
                margin: 15,
            },
            768: {
                nav: false,
                items: 1,
                margin: 15,
            },
            990: {
                nav: false,
                items: 2,
            },
            1200: {
                items: 2,
            },
            1500: {
                items: 2,
            }
        }
    });


    $('.articles_slider .owl-carousel').owlCarousel({
        rtl: true,
        items: 2,
        lazyLoad: true,
        loop: true,
        margin: 7.5,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                nav: true,
                items: 1,
                margin: 10,
            },
            500: {
                nav: false,
                items: 1,
            },
            600: {
                nav: false,
                items: 1,
                margin: 15,
            },
            768: {
                nav: false,
                items: 1,
                margin: 15,
            },
            990: {
                nav: false,
                items: 2,
            },
            1200: {
                items: 2,
            },
            1500: {
                items: 2,
            }
        }
    });


    $('.address_products_slider .owl-carousel').owlCarousel({
        rtl: true,
        items: 6,
        lazyLoad: true,
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                nav: true,
                items: 2,
                margin: 10,
            },
            500: {
                nav: false,
                items: 2,
            },
            600: {
                nav: false,
                items: 4,
                margin: 15,
            },
            768: {
                nav: false,
                items: 4,
                margin: 15,
            },
            990: {
                nav: false,
                items: 6,
            },
            1200: {
                items: 6,
            },
            1500: {
                items: 6,
            }
        }
    });

    $(".owl-prev").html('<i class="fa fa-chevron-right"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-left"></i>');
});