/** HOMEPAGE SCRIPT */

$(document).ready(function () {

    /** Swiper JS Config - Hero Section */
    new Swiper('.swiper-hero', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
    });

    /** Swiper JS Config - Category Section */
    new Swiper('.swiper-category', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
    });

    /** Swiper JS Config - Recommendation Section */
    new Swiper('.swiper-recommendation', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
    });

    /** Swiper JS Config - Popular Section */
    new Swiper('.swiper-popular', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
    });

});