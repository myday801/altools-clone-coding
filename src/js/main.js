window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
});

$("#hamburgerBtn").on("click", function () {
  $("#mobileMenu").toggle();
});

$("#mobileMenuCloseBtn").on("click", function () {
  $("#mobileMenu").toggle();
});

$("#js-mobile-download").on("click", function () {
  $("#js-download-content").toggle();
});

$("#js-mobile-customer").on("click", function () {
  $("#js-customer-content").toggle();
});
