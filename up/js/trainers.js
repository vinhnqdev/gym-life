$(document).ready(function(){
    var trainerOwl = $('#trainers-owl .owl-carousel');
    trainerOwl.owlCarousel({
      loop:true,
      margin:20,
      nav:false,
      dots: false,
      items: 3,
      autoplay: true,
      autoplayTimeout: 6000,
      responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        720:{
            items:2
        },
        980:{
            items:3
        },
        1140:{
            items:4
        }
    }
    });
    
    // Custom Button
    $('#trainers-owl .owl-custom-prev').click(function() {
        trainerOwl.trigger('next.owl.carousel');
    });
    $('#trainers-owl .owl-custom-next').click(function() {
        trainerOwl.trigger('prev.owl.carousel');
    });
    
    
  });