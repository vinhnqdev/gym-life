$(document).ready(function(){
    var clientsOwl = $('#clients-owl .owl-carousel');
    clientsOwl.owlCarousel({
      loop:true,
      margin:20,
      nav:false,
      dots: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        720:{
            items:2
        },
        980:{
            items:2
        }
    }
    });
      
  });
