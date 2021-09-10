
$(document).ready(function(){
    var storeOwl = $('#store-owl .owl-carousel');
    storeOwl.owlCarousel({
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
            items:3
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
    $('#store-owl .owl-custom-prev').click(function() {
        storeOwl.trigger('next.owl.carousel');
    });
    $('#store-owl .owl-custom-next').click(function() {
        storeOwl.trigger('prev.owl.carousel');
    });
    
    
  });