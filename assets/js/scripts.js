$(document).ready(function(){
$('.repair-info-block__wrapper-list').hide();

    var swiperH = new Swiper('.swiper-container-h', {
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

    $(document).on('click', '.repair-info-block__title', function(){

        console.log($(this).closest('.repair-info-block__wrapper').find('.repair-info-block__wrapper-list'));
        if($(this).closest('.repair-info-block__wrapper').find('.repair-info-block__wrapper-list').css('display') == 'none'){
            $('.repair-info-block__wrapper-list').slideUp();
            $(this).closest('.repair-info-block__wrapper').find('.repair-info-block__wrapper-list').slideDown({
                start: function () {
                    $(this).css({
                        display: "grid"
                    });
                }
            });
            $('.repair-info-block__title').removeClass('active');
            $(this).addClass('active');
        }else{
            $(this).closest('.repair-info-block__wrapper').find('.repair-info-block__wrapper-list').slideUp({
                start: function () {
                    $(this).css({
                        display: "grid"
                    });
                }
            });
            $(this).removeClass('active');
        }

    });

    var swiperH = new Swiper('.swiper-container-b', {
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination-b',
            clickable: true,
        },
    });
    var swiperV = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination-v',
            clickable: true,
        },
    });


    $('.stuff-wrapper').click(function(e){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find('.stuff-wrapper__list').slideUp(300);
        }else{
            $('.stuff-wrapper').removeClass('active');
            $('.stuff-wrapper__list').slideUp(300);
            $(this).addClass('active');
            $(this).find('.stuff-wrapper__list').slideDown(300);
        }
    });

    $('.stuff-wrapper__list').click(function(e){
        e.stopPropagation();
    });
    $('.stuff-wrapper__list li').click(function(){
        $('.stuff-wrapper__list li').removeClass('active');
        $(this).addClass('active');
    });

});