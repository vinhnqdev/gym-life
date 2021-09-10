$(document).ready(function(){
    var featureOwl = $('#feature-owl .owl-carousel');
    featureOwl.owlCarousel({
      loop:true,
      margin:20,
      nav:false,
      dots: false,
      items: 3,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive:{
        0:{
            items:1
        },
        540:{
            items:2
        },
        720:{
            items:2
        },
        980:{
            items:3
        },
        1140:{
            items:3
        }
    }
    });
    
    // Custom Button
    $('#feature-owl .owl-custom-prev').click(function() {
        featureOwl.trigger('next.owl.carousel');
    });
    $('#feature-owl .owl-custom-next').click(function() {
        featureOwl.trigger('prev.owl.carousel');
    });
    
    
  });















// const featureCarousel = document.querySelector(".carousel");
// const featureTrack =  document.querySelector(".track");
// const items = document.querySelectorAll(".item");
// const featureNext = document.querySelector(".next");
// const featurePrev = document.querySelector(".prev");
// let visibleItems = 3;
// const contents = document.querySelectorAll(".feature__content");
// let direction = -1;


// //Variables
// visibleItems = 3;
//     items.forEach(item => {
//         item.style.marginRight = 20 + "px";
//         item.style.width = (featureCarousel.getBoundingClientRect().width - 40) / 3 + "px";
//     })
// let step = items[0].getBoundingClientRect().width + 20;

// let mediasmall = window.matchMedia("(max-width: 768px)");
// handleMediaSmall(mediasmall);
// mediasmall.addListener(handleMediaSmall);
// function handleMediaSmall(x){
//     if(x.matches){
//         visibleItems = 2;
//         window.addEventListener("resize",function(){
//             items.forEach((item,index) => {          
//                 featureTrack.style.width = "200%";
//                 item.style.marginRight = 10 + "px";
//                 item.style.width = (featureCarousel.getBoundingClientRect().width - 10) / 2 + "px";
//             })
//             step = items[0].getBoundingClientRect().width + 10;
//         })
//     }
//     else{
//         window.addEventListener("resize",function(){
//             visibleItems = 3;
//             items.forEach(item => {
//                 item.style.marginRight = 20 + "px";
//                 item.style.width = (featureCarousel.getBoundingClientRect().width - 40) / 3 + "px";
//             })
//             step = items[0].getBoundingClientRect().width + 20;
//         })
//     }
// }


// featureNext.addEventListener("click",() => {
//     if(direction === 1){
//         for(let i = 0; i < visibleItems; i++){
//             featureTrack.prepend(featureTrack.lastElementChild);
//         }
//         direction = -1;
//     }
//     featureCarousel.style.justifyContent = "flex-start";
//     featureTrack.style.transform = `translateX(${-step}px)`
// })

// featurePrev.addEventListener("click",() => {
//     console.log(step);
//     if(direction === -1){
//         for(let i = 0; i < visibleItems; i++){
//             featureTrack.appendChild(featureTrack.firstElementChild);
//         }
//         direction = 1;
        
//     }
    
//     featureCarousel.style.justifyContent = "flex-end";
//     featureTrack.style.transform = `translateX(${step}px`;
// })

// featureTrack.addEventListener("transitionend",() => {
//     if(direction === -1){
//         featureTrack.appendChild(featureTrack.firstElementChild);
//         featureTrack.style.transition = `none`;
//         featureTrack.style.transform = `translateX(0)`;
//         setTimeout(function(){
//             featureTrack.style.transition = `all 0.5s`;  
//         })
//     }else if(direction === 1){
//         featureTrack.prepend(featureTrack.lastElementChild);
//         featureTrack.style.transition = `none`;
//         featureTrack.style.transform = `translateX(0)`;
//         setTimeout(function(){
//             featureTrack.style.transition = `all 0.5s`;  
//         })
//     } 
// })



// // Handle Scale Overlay of an Item by Animating //
// // Because i was stuck when using transition => effected by transitioned event make track slide when hovering.

// contents.forEach(content => {
//     content.addEventListener("mouseenter",function(){
//         const currentOverlay = content.querySelector(".feature__content--top__overlay");
//         currentOverlay.classList.remove("scale-down");
//         currentOverlay.classList.add("scale-up");
//     })
//     content.addEventListener("mouseleave",function(){
//         const currentOverlay = content.querySelector(".feature__content--top__overlay");
//         currentOverlay.classList.remove("scale-up");
//         currentOverlay.classList.add("scale-down");
//         setTimeout(function(){
//             currentOverlay.classList.remove("scale-down");
//         },200)
//     })
// })