$(document).ready(function(){

    var swiperH = new Swiper('.swiper-container-h', {
        spaceBetween: 50,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination-h',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
        },
        speed: 1300,
        loop: true,
    });

});