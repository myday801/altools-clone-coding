window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
});

$("#hamburgerBtn").on("click", function () {
  $("#mobileMenu").toggle();
});

$("#mobileMenuCloseBtn").on("click", function () {
  $("#mobileMenu").toggle();
});
