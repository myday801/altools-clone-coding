window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
});

$("#hamburgerBtn").on("click", function () {
  $("#mobileMenu").toggle();
});

$("#mobileMenuCloseBtn").on("click", function () {
  $("#mobileMenu").toggle();
});

$(".js-mobilemenu-clickable").on("click", function () {
  let mobileMenuLi = $(this).parent();
  mobileMenuLi.find(".mobile-content").toggle();
  $(this).toggleClass(".rotate-180");
});
