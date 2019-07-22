$(document).ready(function(){
$('.repair-info-block__wrapper-list').hide();

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
        }else{
            $(this).closest('.repair-info-block__wrapper').find('.repair-info-block__wrapper-list').slideUp({
                start: function () {
                    $(this).css({
                        display: "grid"
                    });
                }
            });
        }

    });

});