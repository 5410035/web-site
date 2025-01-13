// ハンバーガーメニュー
var hamburger = $('.hamburger');
// OPEN/CLOSEボタンをクリックしたら
$('.header__hamburger').on('click', function () {
    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('hamburger__menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
    // ハンバーガーメニューを閉じる
    hamburger.removeClass('hamburger__menu-active');
});

// slick
$(function () {
    $(".gallery__container-headiing-slick").slick({
        arrows: false,
        autoplay: false,
        adaptiveHeight: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
    });
});

// アコーディオン
$('.question__container-accordion-box-title').on('click', function (e) {
    $(this).next().slideToggle();
    $(this).toggleClass("question__container-accordion-box-title--active", 300);
});

