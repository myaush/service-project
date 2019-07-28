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


    $('.services-item__wrapper').click(function(){
        $(this).toggleClass('active');
    });

    $('li[data-model]').click(function(){
        $('.pick-block__services').show();
        $('body,html').animate({scrollTop:$('body').scrollTop()-100}, 200).animate({scrollTop:jQuery('.pick-block__services').offset().top - 50}, 800);
    });
    $('.pick-block__services-close').click(function(){
        toStartPositionStuff();
    });

    var wrap = $(".side-block-fixed");
    var headerMenu = $(".header__menu");
    if ($(document).scrollTop() > 211) {

        headerMenu.addClass("fixed");
    }

    $(document).on("scroll", function(e) {
        if ($(document).scrollTop() > 147) {
            wrap.addClass("active");
        } else {
            wrap.removeClass("active");
        }

        if ($(document).scrollTop() > 217) {
            $('.header-menu-trick').show();
            headerMenu.addClass("fixed");
        } else {
            $('.header-menu-trick').hide();
            headerMenu.removeClass("fixed");
        }

    });

    $(document).on('click','.popup__close', function(){
        close_modal();
    });

    $(document).on('click', '.items-wrapper__item.services a, .side-block-fixed', function(){
        open_modal();
    });

});

function toStartPositionStuff(){
    $('body,html').animate({scrollTop:$('.pick-block__stuff').offset().top - 200}, 400);
    $('.pick-block__services').slideUp();
    $('.stuff-wrapper__list').slideUp();
    $('.stuff-wrapper, .services-item__wrapper, li[data-model]').removeClass('active');
}

function close_modal(){
    $('#modal_form').removeClass('popup_active');
    $('.wrap').removeClass('blur');
}

function open_modal(){
    if($('#modal_form').css('visibility') == 'hidden'){
        $('#modal_form').addClass('popup_active');
        $('.wrap').addClass('blur');
    }
}