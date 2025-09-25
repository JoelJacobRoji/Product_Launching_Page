// Smooth scrolling for nav links
$(document).ready(function () {
  $(".navbar-nav a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 80,
        },
        800
      );
    }
  });

  // Example: button alert
  $(".cta-btn").on("click", function () {
    alert("Thanks for choosing PulsePro X! 🚀");
  });
});
