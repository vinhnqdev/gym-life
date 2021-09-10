$(document).ready(function () {
  var brandOwl = $("#brand-owl .owl-carousel");
  brandOwl.owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    dots: false,
    items: 3,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      720: {
        items: 2,
      },
      980: {
        items: 4,
      },
      1140: {
        items: 4,
      },
    },
  });
  $("#brand-owl .owl-custom-prev").click(function () {
    brandOwl.trigger("next.owl.carousel");
  });
  $("#brand-owl .owl-custom-next").click(function () {
    brandOwl.trigger("prev.owl.carousel");
  });
});
