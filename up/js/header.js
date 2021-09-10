const searchIcon = document.querySelector(
  ".header__container--nav__icons--search"
);
const inputWithSearch = document.querySelector(
  ".header__container--nav__icons--input"
);
const header = document.querySelector(".header");
let isClick = false;
searchIcon.addEventListener("click", () => {
  searchIcon.classList.toggle("clicked");
  inputWithSearch.focus();
  if (!isClick) {
    inputWithSearch.style.width = "20rem";
    isClick = true;
  } else {
    inputWithSearch.style.width = "3rem";
    isClick = false;
  }
});

// Fixed Header when scroll

window.addEventListener("scroll", function () {
  if (window.scrollY > 200 && window.scrollY < 500) {
    header.style.position = "fixed";
    header.style.width = "100%";
    heroSection.style.marginTop = header.offsetHeight + "px";
    // ProgressLine variable declared at hero file;
    progressLine.style.position = "fixed";
    progressLine.style.top = header.offsetHeight + "px";
  } else if (window.scrollY > 500) {
    progressLine.style.position = "absolute";
    // Remove menu when sroll above 500px
    // menuBtn.classList.remove("clicked");
  } else {
    header.style.position = "absolute";
    header.style.width = "100%";
    progressLine.style.position = "absolute";
    progressLine.style.top = 0;
  }
});
// Toggle Menu Mobile
const menuBtn = document.querySelector(".header__container--menu");
// const contentPanel = document.querySelector(".header__container--content");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("clicked");
});

// Create an Accordion/Collapsibles (Slide Down)
//Change Icon SubMenu: plus icon (+) and minus icon (-)
const accordions = document.querySelectorAll(".accordion");
let currentPanel;
let preAccordion;
const subAccordions = document.querySelectorAll(".sub-accordion");
let subCurrentPanel;
let subPreAccordion;

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    if (preAccordion && preAccordion !== accordion) {
      preAccordion.classList.remove("active");
    }
    preAccordion = accordion;
    accordion.classList.toggle("active");
    if (
      currentPanel !== undefined &&
      currentPanel !== accordion.nextElementSibling
    ) {
      currentPanel.style.maxHeight = null;
    }
    currentPanel = accordion.nextElementSibling;
    if (currentPanel.style.maxHeight) {
      currentPanel.style.maxHeight = null;
    } else {
      currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
    }
  });
});

subAccordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    if (subPreAccordion && subPreAccordion !== accordion) {
      subPreAccordion.classList.remove("active");
    }
    subPreAccordion = accordion;
    accordion.classList.toggle("active");
    if (
      subCurrentPanel !== undefined &&
      subCurrentPanel !== accordion.nextElementSibling
    ) {
      subCurrentPanel.style.maxHeight = null;
    }
    subCurrentPanel = accordion.nextElementSibling;
    if (subCurrentPanel.style.maxHeight) {
      subCurrentPanel.style.maxHeight = null;
    } else {
      subCurrentPanel.style.maxHeight = subCurrentPanel.scrollHeight + "px";
    }
  });
});

function handleAccordion(prevAccordion, prevPanel, currentAccordion) {
  if (preAccordion && preAccordion !== currentAccordion) {
    preAccordion.classList.remove("active");
  }
  preAccordion = currentAccordion;
  currentAccordion.classList.toggle("active");
  if (
    prevPanel !== undefined &&
    prevPanel !== currentAccordion.nextElementSibling
  ) {
    prevPanel.style.maxHeight = null;
  }
  prevPanel = currentAccordion.nextElementSibling;
  if (prevPanel.style.maxHeight) {
    prevPanel.style.maxHeight = null;
  } else {
    prevPanel.style.maxHeight = prevPanel.scrollHeight + "px";
  }
}
