
$( document ).ready(function() {
    if ($(window).width() <= 768) {
        var topSwiper = new Swiper('.main-slider', {
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 40,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        var categorySwiper = new Swiper('.category__list', {
            slidesPerView: 3.2,
            spaceBetween: 20,
            breakpoints: {
                600: {
                    slidesPerView: 2.5,
                },
                500: {
                    slidesPerView: 2.2,
                },
                300: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                },

            },
        });
        var categorySwiper = new Swiper('.partner .partner__content', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.partner__pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                },
            },
        });

    }

    var dealerslider = new Swiper('.dealer-projects .dealer-projects__container', {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: '.dealer-projects .services__next',
            prevEl: '.dealer-projects .services__prev',
        },
    });

    var singlevert = new Swiper('.single-cart__container-img', {
        slidesPerView: 3,
        direction: 'vertical',
        spaceBetween: 10,
        navigation: {
            nextEl: '.single-cart__container .services__next',
            prevEl: '.single-cart__container .services__prev',
        },
    });

    var dealerslider = new Swiper('.dealer-sertificates .dealer-sertificates__container', {
        slidesPerView: 4,
        spaceBetween: 50,
        navigation: {
            nextEl: '.dealer-sertificates .services__next',
            prevEl: '.dealer-sertificates .services__prev',
        },
    });

    var catsorted = new Swiper('.category-sorted__container', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.category-sorted .services__next',
            prevEl: '.category-sorted .services__prev',
        },
    });

    var ServiceSwiper = new Swiper('.services .swiper-container', {

        // Navigation arrows
        navigation: {
            nextEl: '.services .swiper-button-next',
            prevEl: '.services .swiper-button-prev',
        },
        // watchOverflow: true,
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            600: {
                slidesPerView: 2,
            },
            500: {
                slidesPerView: 1,
            },
            200: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            }
        },
    })

    var brandsSwiper = new Swiper('.main-brands .main-brands__container', {

        watchOverflow: true,
        slidesPerView: 6,
        spaceBetween: 20,
        pagination: {
            el: '.main-brands__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-brands__next',
            prevEl: '.main-brands__prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            240: {
                slidesPerView: 3,
            },
        },
    })

    var coopbrendsSwiper = new Swiper('.cooperation .main-brands__container', {

        watchOverflow: true,
        slidesPerView: 6,
        spaceBetween: 20,
        pagination: {
            el: '.cooperation .main-brands__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.cooperation .main-brands__next',
            prevEl: '.cooperation .main-brands__prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            240: {
                slidesPerView: 3,
            },
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
        breakpoints: {
            240: {
                pagination: {
                    el: '.main-video__pagination',
                    clickable: true,
                },
                slidesPerView: 1,
            },
        },
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

    if ($('.category-rec').length > 0){
        $('.category-rec__tabs-item').click(function() {
            removeactive();
            $(this).addClass('active');
            if ($(this).hasClass('device')){
                console.log('is');
                setTimeout(function () {
                    $('.container-device').fadeIn(300);
                }, 300)
            } else if($(this).hasClass('news')){
                console.log('is');
                setTimeout(function () {
                    $('.container-news').fadeIn(300);
                }, 300)
            } else if($(this).hasClass('video')){
                setTimeout(function () {
                    $('.container-video').fadeIn(300);
                }, 300)
            }
        });

        function removeactive() {
            $('.container-item').fadeOut(300);
            $('.container-item').removeClass('active');

            $('.category-rec .category-rec__tabs-item').removeClass('active');
        }
    }

    if ($('.single-params').length > 0){
        $('.single-params__tabs-item').click(function() {
            single_params_removeactive();
            $(this).addClass('active');
            var data = $(this).data('select');
            setTimeout(function () {
                $('.single-params__content .' + data + '').fadeIn(300);
            }, 300)
            $('.single-params__content .' + data + '').addClass('active');

        });

        function single_params_removeactive() {
            $('.single-params__content-item').fadeOut(300);
            $('.single-params__content-item').removeClass('active');
            $('.single-params__tabs-item').removeClass('active');
        }
    }

    if ($('.service-center-list').length > 0){
        $('.service-list__header').click(function() {
            $(this).toggleClass('active');
            $(this).closest('.service-list__item').find('.service-list__content').fadeToggle(300);
        });
    }

    if ($('.zakaz-service__form').length > 0){
        $('.zakaz-service__form select').selectric();
    }

    if ($('.service-map').length > 0){
        initMap()
    }

    function initMap() {
        var uluru = {lat: 50.4568971, lng: 30.5029689};
        var image = '/assets/images/marker.png';

        var map = new google.maps.Map(document.getElementById('service-map'), {
            zoom: 10,
            center: uluru,
            scrollwheel: false,
            styles : [
                {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#544328"}]},
                {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f6f6f6"}]},

                {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
                {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
                {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
                {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
                {"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
                {"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},
                {
                    featureType: "administrative.country",
                    elementType: "geometry",
                    stylers: [
                        { color: "#989898" }
                    ]
                },
                {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"on"}]},
                {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
                {"featureType":"water","elementType":"all","stylers":[{"color":"#E5E5E5"},{"visibility":"on"}]}
            ]
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            icon: image

        });
    }

    if ($('.cooperation-about__container').length > 0){
        $('.cooperation-about__nav-item a').click(function() {
            $("body").on('click', '[href*="#"]', function(e){
                var fixed_offset = 100;
                $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
                e.preventDefault();
            });
            $('.cooperation-about__nav-item').removeClass('active');
            $(this).closest('.cooperation-about__nav-item').addClass('active');
        });

    }

});
