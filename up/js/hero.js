const imgs = document.querySelectorAll(".hero__img");
const dots = document.querySelectorAll(".hero__dots--dot");
const next = document.querySelector(".hero__navigator--next");
const prev = document.querySelector(".hero__navigator--prev");
const progressLine = document.querySelector(".hero__progress");
const title = document.querySelector(".hero__content--title");
const para = document.querySelector(".hero__content--para");
const link = document.querySelector(".hero__content--link");
const duration = 8000;
const heroSection = document.querySelector(".hero");
const headerSection = document.querySelector(".header");
let TIMER = null;
let progress = null;
let content = null;
let index = 0;

computeRemainHeight();
carousel();

window.addEventListener("resize",(e) => {
    computeRemainHeight(); 
})

next.addEventListener("click",() => {
    index ++;
    if(index >= imgs.length){
        index = 0;
    }
    // showCurrentImg(index);
    // showActiveDot(index);
    resetCarousel();
    resetProgress();
    resetContent();
})
prev.addEventListener("click",() => {
    index --;
    if(index < 0){
        index = imgs.length -1;
    }
    // showCurrentImg(index);
    // showActiveDot(index);
    resetCarousel();
    resetProgress();
    resetContent();
})

dots.forEach((dot,i) => {
    dot.addEventListener("click",() => {
        // showCurrentImg(i);
        // showActiveDot(i);
        index = i;
        resetCarousel();
        resetProgress();
        resetContent();
    })
    
});

function computeRemainHeight(){
    const headerHeight = headerSection.offsetHeight;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    heroSection.style.height = windowHeight - headerHeight + "px";
}

function carousel(){
    showCurrentImg(index);
    showActiveDot(index);
    showProgress();
    showContent();
    TIMER = setTimeout(function(){
        index++;
        if(index >= imgs.length){
        index = 0;
        }
        carousel();
    },duration);
}

function showCurrentImg(index){
    imgs.forEach(img => {
        img.classList.remove("active");
    })
    imgs[index].classList.add("active");
}

function showActiveDot(index){
    dots.forEach(dot => {
        dot.classList.remove("active");
    })
    dots[index].classList.add("active");
}

function resetProgress(){
    progressLine.classList.remove("progress");
    clearTimeout(progress);
}

function showContent(){
    title.classList.add("show");
    para.classList.add("show");
    link.classList.add("show");
    content = setTimeout(function(){
        title.classList.remove("show");
        para.classList.remove("show");
        link.classList.remove("show");
    },duration - 50);
}

function showProgress(){
    progressLine.classList.add("progress");
    progress = setTimeout(function(){
        progressLine.classList.remove("progress");
    },duration - 50);
}

function resetContent(){
    title.classList.remove("show");
    para.classList.remove("show");
    link.classList.remove("show");
    clearTimeout(content);
}

function resetCarousel(){
    clearTimeout(TIMER);
    setTimeout(function(){
        carousel();
    },50)
}