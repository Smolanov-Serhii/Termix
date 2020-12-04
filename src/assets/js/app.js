$( document ).ready(function() {

    var mySwiper = new Swiper('.services .swiper-container', {

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // watchOverflow: true,
        slidesPerView: 4,
        spaceBetween: 20,
    })

    var aboutSwiper = new Swiper('.about-company .swiper-container', {

        watchOverflow: true,
        slidesPerView: 6,
        spaceBetween: 20,
        breakpoints: {
          992: {

          },
          768: {

          }
        },
    })

    var brandsSwiper = new Swiper('.main-brands .main-brands__container', {

        watchOverflow: true,
        slidesPerView: 6,
        spaceBetween: 50,
        navigation: {
            nextEl: '.main-brands__next',
            prevEl: '.main-brands__prev',
        },
        breakpoints: {
            992: {

            },
            768: {

            }
        },
    })

    var videomain = new Swiper('.main-video__main-slider', {
        fadeEffect: {
            crossFade: true
        },
        effect: 'fade',
        preloadImages: false,
        lazy: true,
        loadPrevNext: true,
        slidesPerView: 1,
        thumbs: {
            swiper: {
                el: '.main-video__nav-slider',
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 20,
                lazy: true,
                loadPrevNext: true,
                navigation: {
                    nextEl: '.main-video__next',
                    prevEl: '.main-video__prev',
                },
            }
        }
    })



    jQuery('img.svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

    if ($('.main-news').length > 0){
        $('.main-news__btn').click(function() {
            $(this).closest('.main-news').find('.main-news__container').addClass('show-all');
            setTimeout(function () {
                data.closest('.content-block').find('.content-block__device').fadeIn(300);
            }, 300)
            $(this).fadeOut(300);
        });

    }
    $('.about-service__tab-itm').click(function() {
        data = $(this).data('id');
        $('.about-service__tab-itm').removeClass('tab-itm-active');
        $(this).addClass('tab-itm-active');
        $('.about-service__content-item').fadeOut(300);
        setTimeout(function () {
            $('div[id=' + data + ']').fadeIn(300);
        }, 300)

    });
    if ($('.partner').length > 0){
        $('.tab-device').click(function() {
            data = $(this)
            $(this).closest('.content-block__tabs').find('.tab-manual').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.content-block').find('.content-block__manuals').fadeOut(300);
            setTimeout(function () {
                data.closest('.content-block').find('.content-block__device').fadeIn(300);
            }, 300)

        });
        $('.tab-manual').click(function() {
            data = $(this);
            $(this).closest('.content-block__tabs').find('.tab-device').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.content-block').find('.content-block__device').fadeOut(300);
            setTimeout(function () {
                data.closest('.content-block').find('.content-block__manuals').fadeIn(300);
            }, 300)
        });
    }
});
