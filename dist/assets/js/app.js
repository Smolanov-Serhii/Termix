/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$( document ).ready(function() {\r\n\r\n    var mySwiper = new Swiper('.services .swiper-container', {\r\n\r\n        // Navigation arrows\r\n        navigation: {\r\n            nextEl: '.swiper-button-next',\r\n            prevEl: '.swiper-button-prev',\r\n        },\r\n        // watchOverflow: true,\r\n        slidesPerView: 4,\r\n        spaceBetween: 20,\r\n    })\r\n\r\n    var aboutSwiper = new Swiper('.about-company .swiper-container', {\r\n\r\n        watchOverflow: true,\r\n        slidesPerView: 6,\r\n        spaceBetween: 20,\r\n        breakpoints: {\r\n          992: {\r\n\r\n          },\r\n          768: {\r\n\r\n          }\r\n        },\r\n    })\r\n\r\n    var brandsSwiper = new Swiper('.main-brands .main-brands__container', {\r\n\r\n        watchOverflow: true,\r\n        slidesPerView: 6,\r\n        spaceBetween: 50,\r\n        navigation: {\r\n            nextEl: '.main-brands__next',\r\n            prevEl: '.main-brands__prev',\r\n        },\r\n        breakpoints: {\r\n            992: {\r\n\r\n            },\r\n            768: {\r\n\r\n            }\r\n        },\r\n    })\r\n\r\n    var videomain = new Swiper('.main-video__main-slider', {\r\n        fadeEffect: {\r\n            crossFade: true\r\n        },\r\n        effect: 'fade',\r\n        preloadImages: false,\r\n        lazy: true,\r\n        loadPrevNext: true,\r\n        slidesPerView: 1,\r\n        thumbs: {\r\n            swiper: {\r\n                el: '.main-video__nav-slider',\r\n                slidesPerView: 4,\r\n                slidesPerGroup: 1,\r\n                spaceBetween: 20,\r\n                lazy: true,\r\n                loadPrevNext: true,\r\n                navigation: {\r\n                    nextEl: '.main-video__next',\r\n                    prevEl: '.main-video__prev',\r\n                },\r\n            }\r\n        }\r\n    })\r\n\r\n\r\n\r\n    jQuery('img.svg').each(function() {\r\n        var $img = jQuery(this);\r\n        var imgID = $img.attr('id');\r\n        var imgClass = $img.attr('class');\r\n        var imgURL = $img.attr('src');\r\n\r\n        jQuery.get(imgURL, function(data) {\r\n            // Get the SVG tag, ignore the rest\r\n            var $svg = jQuery(data).find('svg');\r\n\r\n            // Add replaced image's ID to the new SVG\r\n            if (typeof imgID !== 'undefined') {\r\n                $svg = $svg.attr('id', imgID);\r\n            }\r\n            // Add replaced image's classes to the new SVG\r\n            if (typeof imgClass !== 'undefined') {\r\n                $svg = $svg.attr('class', imgClass + ' replaced-svg');\r\n            }\r\n\r\n            // Remove any invalid XML tags as per http://validator.w3.org\r\n            $svg = $svg.removeAttr('xmlns:a');\r\n\r\n            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.\r\n            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {\r\n                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))\r\n            }\r\n\r\n            // Replace image with new SVG\r\n            $img.replaceWith($svg);\r\n\r\n        }, 'xml');\r\n\r\n    });\r\n\r\n    if ($('.main-news').length > 0){\r\n        $('.main-news__btn').click(function() {\r\n            $(this).closest('.main-news').find('.main-news__container').addClass('show-all');\r\n            setTimeout(function () {\r\n                data.closest('.content-block').find('.content-block__device').fadeIn(300);\r\n            }, 300)\r\n            $(this).fadeOut(300);\r\n        });\r\n\r\n    }\r\n    $('.about-service__tab-itm').click(function() {\r\n        data = $(this).data('id');\r\n        $('.about-service__tab-itm').removeClass('tab-itm-active');\r\n        $(this).addClass('tab-itm-active');\r\n        $('.about-service__content-item').fadeOut(300);\r\n        setTimeout(function () {\r\n            $('div[id=' + data + ']').fadeIn(300);\r\n        }, 300)\r\n\r\n    });\r\n    if ($('.partner').length > 0){\r\n        $('.tab-device').click(function() {\r\n            data = $(this)\r\n            $(this).closest('.content-block__tabs').find('.tab-manual').removeClass('active');\r\n            $(this).addClass('active');\r\n            $(this).closest('.content-block').find('.content-block__manuals').fadeOut(300);\r\n            setTimeout(function () {\r\n                data.closest('.content-block').find('.content-block__device').fadeIn(300);\r\n            }, 300)\r\n\r\n        });\r\n        $('.tab-manual').click(function() {\r\n            data = $(this);\r\n            $(this).closest('.content-block__tabs').find('.tab-device').removeClass('active');\r\n            $(this).addClass('active');\r\n            $(this).closest('.content-block').find('.content-block__device').fadeOut(300);\r\n            setTimeout(function () {\r\n                data.closest('.content-block').find('.content-block__manuals').fadeIn(300);\r\n            }, 300)\r\n        });\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });