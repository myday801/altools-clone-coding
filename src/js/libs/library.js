//libraries like jquery etc
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
$(".swiper-button-pause").click(function () {
  console.log("ddd");
  mainSwiper.autoplay.stop();
  $(this).toggle();
  $(".swiper-button-play").toggle();
});
$("swiper-button-play").click(function () {
  mainSwiper.autoplay.start();
  $(this).toggle();
  $(".swiper-button-pause").toggle();
});
