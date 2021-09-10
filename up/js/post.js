$(document).ready(function () {
  var postOwl = $("#post-owl .owl-carousel");
  postOwl.owlCarousel({
    loop: true,
    margin: 20,
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
      980: {
        items: 3,
      },
      1140: {
        items: 3,
      },
    },
  });

  //   Custom Button
  $("#post-owl .owl-custom-prev").click(function () {
    postOwl.trigger("next.owl.carousel");
  });
  $("#post-owl .owl-custom-next").click(function () {
    postOwl.trigger("prev.owl.carousel");
  });
});
