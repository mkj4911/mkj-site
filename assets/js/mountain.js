// スプレッド構文を使って配列で取得する
let imagesItems = [...document.querySelectorAll(".img-wrap")];
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");
// console.log(imagesItems);

let setItemActive = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
};

let options = {
  rootMargin: "0px",
  threshold: 0.2,
};

let observer = new IntersectionObserver(setItemActive, options);

observer.observe(titleMessage);

imagesItems.map((item, index) => {
  item.children[0].style.backgroundImage = `url(./assets/mountains/${index + 1}.jpg)`;
  index % 2 == 0 ? (item.style.left = '55%') : (item.style.left = '5%');
  observer.observe(item);
});

titles.map((title, index) => {
  index % 2 == 0 ? (title.style.left = '45%') : (title.style.left = '35%');
  observer.observe(title);
});

const buttonDown = document.getElementById('downButton')

buttonDown.addEventListener("click", (e) => {
  e.preventDefault;
  autoScroll(scrollY);
  function autoScroll(y) {
    if (y > 4000 ) {
      return
    }
    y = y + 2; // 垂直方向のスクロール量を減らす
    scrollTo(scrollX, y);
    setTimeout(autoScroll, 1, y);
  };
});

const buttonUp = document.getElementById('upButton')

buttonUp.addEventListener("click", (e) => {
  e.preventDefault;
  autoScroll(scrollY);
  function autoScroll(y) {
    if (y < -1 || scrollY > y + 100) {
      return
    }
    y = y - 5; // 垂直方向のスクロール量を減らす
    scrollTo(scrollX, y);
    setTimeout(autoScroll, 1, y);
  };
});
