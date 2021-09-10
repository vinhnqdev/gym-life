const galleryContainer = document.querySelector(".gallery__container--items");
const items = document.querySelectorAll(".gallery__container--item");
const cloneItems = Array.from(items);
const filterBtns = document.querySelectorAll(
  ".gallery__container--header__item"
);
// const itemWidth = items[0].clientWidth;
const viewPortWidth = window.innerWidth;

let itemWidth = null;
let itemHeight = null;
let quanlity = null;
let marginBtItem = 20;

let prevItems = null;

let pos = {
  yoga: [],
  gym: [],
  fitness: [],
  running: [],
};

const setWidthItem = (items, quanlity) => {
  items.forEach((item) => {
    item.style.width = galleryContainer.clientWidth / quanlity + "px";
  });
  itemWidth = parseInt(items[0].style.width);
};

const setHeightItem = (items) => {
  items.forEach((item) => {
    item.style.height = 0.675 * itemWidth + "px";
  });
  itemHeight = parseInt(items[0].style.height);
};

const setMinHeight = (element, items) => {
  const lines = Math.ceil(items.length / quanlity);
  element.style.minHeight = lines * (itemHeight + marginBtItem) + "px";
};
const setPosItems = (quanlity, items, itemWidth, itemHeight) => {
  items.forEach((item, index) => {
    item.style.left = (index % quanlity) * itemWidth + "px";
    item.style.top =
      Math.floor(index / quanlity) * itemHeight +
      Math.floor(index / quanlity) * marginBtItem +
      "px";
  });
};
const getOriginalPos = (items) => {
  items.forEach((item) => {
    const style = item.dataset.filter;
    pos[style].push({
      top: item.style.top,
      left: item.style.left,
    });
  });
};

const activeBtn = (activeBtn) => {
  filterBtns.forEach((filterBtn) => {
    filterBtn.classList.remove("active");
  });
  activeBtn.classList.add("active");
};

const showFilteredItems = (filteredItems) => {
  if (!filteredItems.length) {
    setTimeout(function () {
      showFilteredItems(items);
      setPosItems(quanlity, items, itemWidth, itemHeight);
    }, 100);
    return;
  }
  items.forEach((item) => {
    // item.style.opacity = "0.8";
    item.style.transform = "scale(0)";
  });
  filteredItems.forEach((filteredItem) => {
    // filteredItem.style.opacity = "1";
    filteredItem.style.transform = "scale(1)";
  });
};

// --------------------- Click FilterBtn --------------------------//

filterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    const filterType = filterBtn.dataset.filter;
    const filteredItem = cloneItems.filter(
      (item) => item.dataset.filter === filterType
    );
    if (prevItems && prevItems.length) {
      const style = prevItems[0].dataset.filter;
      if (style === filterType) return;
      prevItems.forEach((prevItem, index) => {
        prevItem.style.top = pos[style][index].top;
        prevItem.style.left = pos[style][index].left;
      });
    }
    prevItems = filteredItem;

    showFilteredItems(filteredItem);
    // setMinHeight(galleryContainer,filteredItem);
    activeBtn(filterBtn);
    setTimeout(function () {
      setPosItems(quanlity, filteredItem, itemWidth, itemHeight);
    }, 300);
  });
});

if (viewPortWidth > 768) {
  quanlity = 3;
  // marginBtItem = 20;
} else {
  quanlity = 2;
  // marginBtItem = 10;
}
setWidthItem(items, quanlity);
setHeightItem(items);
setPosItems(quanlity, items, itemWidth, itemHeight);
getOriginalPos(items);
setMinHeight(galleryContainer, items);

const checkMedia = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    quanlity = 3;
    marginBtItem = 20;
  } else {
    quanlity = 2;
    marginBtItem = 10;
  }

  setWidthItem(items, quanlity);
  setHeightItem(items);
  setPosItems(quanlity, items, itemWidth, itemHeight);
  getOriginalPos(items);
  setMinHeight(galleryContainer, items);
};
window.addEventListener("resize", checkMedia);

// window.addEventListener('resize', checkMediaQuery);
