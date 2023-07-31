// js-main-swiper
var mainSwiper = new Swiper(".js-main-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

$(".swiper-button-play").hide();
$(".swiper-button-pause").on("click", function () {
  console.log("ddd");
  mainSwiper.autoplay.stop();
  $(this).toggle();
  $(".swiper-button-play").toggle();
});
$("swiper-button-play").on("click", function () {
  mainSwiper.autoplay.start();
  $(this).toggle();
  $(".swiper-button-pause").toggle();
});

// js-promotion-swiper
var promoSwiper = new Swiper(".js-promotion-swiper", {
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: ".promotion-swiper-pagination",
        dynamicBullets: true,
      },
    },
    1240: {
      slidesPerView: 1,
      navigation: {
        prevEl: "promotion-button-prev",
        nextEl: "promotion-button-next",
      },
    },
  },
});
