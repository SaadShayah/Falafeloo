// require("../node_modules/vue");
// import Vue from "../node_modules/vue";
// import Carousel3d from "./vue-carousel-3d";
// import { Carousel3d, Slide } from "../node_modules/vue-carousel-3d";
// require("../vue-carousel-3d");

const home = document.getElementById("home");
const contact = document.getElementById("contact");
const about = document.getElementById("about");
const container = document.querySelector(".container");
const rectangle = document.querySelector(".rectangle");
const sideBtn = document.querySelector(".side-btn");
const ourSideBar = document.getElementById("sideBar");

// Vue.use(Carousel3d);

// new Vue({
//   el: "#example",
//   data: {
//     slides: 7,
//   },
//   components: {
//     "carousel-3d": window["carousel-3d"].Carousel3d,
//     slide: window["carousel-3d"].Slide,
//   },
// });

//---------------------------- THE SIDE NAVIGATION --------------------------//

menu.addEventListener("click", function (event) {
  container.style.transform = "translateY(-4.5rem)";
  rectangle.style.height = "72vh";
});

home.addEventListener("click", function name(params) {
  container.style.transform = "translateY(0)";
  rectangle.style.height = "85vh";
});

contact.addEventListener("click", function name(params) {
  container.style.transform = "translateY(-9rem)";
  rectangle.style.height = "63vh";
});

about.addEventListener("click", function name(params) {
  container.style.transform = "translateY(-14rem)";
  rectangle.style.height = "54vh";
});

sideBtn.addEventListener("click", function name(params) {
  ourSideBar.classList.remove("hide");
  ourSideBar.classList.add("show");
});

//---------------------------- HANDELING CLICKS OUTSIDE OF THE SIDEBAR --------------------------//

// var ignoreClickOnMeElement = document.getElementById("sideBar");

// document.addEventListener("click", function (event) {
//   var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
//   if (
//     !isClickInsideElement &&
//     !ignoreClickOnMeElement.classList.contains("hide")
//   ) {
//     ourSideBar.classList.remove("show");
//     ourSideBar.classList.add("hide");
//   }
// });

//---------------------------- THE BURGER NAVIGATION --------------------------//

let burger = document.getElementById("burger"),
  nav = document.getElementById("main-nav");

burger.addEventListener("click", function (e) {
  this.classList.toggle("is-open");
  nav.classList.toggle("is-open");
  document.body.classList.toggle("lock");
});

//---------------------------- THE DESCKTOP SLIDER --------------------------//

$(document).ready(function () {
  var $slider = $(".slider"),
    $slideBGs = $(".slide__bg"),
    diff = 0,
    curSlide = 0,
    numOfSlides = $(".slide").length - 1,
    animating = false,
    animTime = 500,
    autoSlideTimeout,
    autoSlideDelay = 6000,
    $pagination = $(".slider-pagi");

  function createBullets() {
    for (var i = 0; i < numOfSlides + 1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-" + i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  }

  createBullets();

  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides)
      $(".slider-control.right").addClass("inactive");
  }

  function autoSlide() {
    autoSlideTimeout = setTimeout(function () {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  }

  autoSlide();

  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-" + curSlide).addClass("active");
      setTimeout(function () {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-" + curSlide).addClass("active");
    $slider.css("transform", "translate3d(" + -curSlide * 100 + "%,0,0)");
    $slideBGs.css("transform", "translate3d(" + curSlide * 50 + "%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function (e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
      winW = $(window).width();
    diff = 0;

    $(document).on("mousemove touchmove", function (e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = ((startX - x) / winW) * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0))
        diff /= 2;
      $slider.css(
        "transform",
        "translate3d(" + (-curSlide * 100 - diff) + "%,0,0)"
      );
      $slideBGs.css(
        "transform",
        "translate3d(" + (curSlide * 50 + diff / 2) + "%,0,0)"
      );
    });
  });

  $(document).on("mouseup touchend", function (e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });

  $(document).on("click", ".slider-control", function () {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });

  $(document).on("click", ".slider-pagi__elem", function () {
    curSlide = $(this).data("page");
    changeSlides();
  });
});

//---------------------------- THE MENU --------------------------//

let meals = [
  [
    {
      img: "assets/images/1.webp",
      lbl: "Шаурма от шеф повара",
      price: "200",
      desc: "Курица, майонез, помидор,картофель, сыр,солёный огурец,салат с зеленью",
    },
    {
      img: "assets/images/2.webp",
      lbl: "Шаурма",
      price: "160",
      desc: " Курица, майонез, помидор, картофель, солёный огурец,салат с зеленью",
    },
    {
      img: "assets/images/1.webp",
      lbl: "Шаурма от шефа /большая/",
      price: "300",
      desc: "Курица, майонез, помидор,картофель, сыр,солёный огурец,салат с зеленью",
    },
    {
      img: "assets/images/4.webp",
      lbl: "Шаурма по Арабски",
      price: "250",
      desc: "Курица, майонез, помидор,картофель+сыр,солёный огурец,салат с зеленью",
    },
    {
      img: "assets/images/3.webp",
      lbl: "Мексикану",
      price: "200",
      desc: "Арабский хлеб, куриное филе,красный болгарский перец,зеленый лук, кукуруза,приправа, майонез,грибы, картофель",
    },

    {
      img: "assets/images/5.webp",
      lbl: "Шаурма панне",
      price: "350",
      desc: "Шаурма с курицей впанировке, чесночныйсоус, картофель фрикетчуп",
    },

    {
      img: "assets/images/6.webp",
      lbl: "Цезарь ролл",
      price: "200",
      desc: "Стрипсы, майонез, помидор,сыр, солёный огурец,салат с зеленью",
    },

    {
      img: "assets/images/7.webp",
      lbl: "Шаурма гиро",
      price: "200",
      desc: "Курица, майонез, помидор,картофель, солёный огурец,салат с зеленью, хлеб пита",
    },
  ],
  [
    {
      img: "assets/images/8.webp",
      lbl: "Крылышки 8шт",
      price: "250",
      desc: "",
    },
    {
      img: "assets/images/8.webp",
      lbl: "Крылышки 16шт",
      price: "470",
      desc: "",
    },
    {
      img: "assets/images/9.webp",
      lbl: "Комбо 8шт",
      price: "350",
      desc: "кетчуп, чесночный соус,кока-кола",
    },
    {
      img: "assets/images/9.webp",
      lbl: "Комбо 16шт",
      price: "680",
      desc: "картофель,кетчуп, чесночный соус,кока-кола",
    },
  ],
  [
    {
      img: "assets/images/10.webp",
      lbl: "Бургер от шеф-повара",
      price: "240",
      desc: "Булочка, котлета мяснаяиз баранины, помидор,листья салата ,сыр",
    },
    {
      img: "assets/images/11.webp",
      lbl: "Бургер от шеф-повара",
      price: "240",
      desc: " Булочка, котлета из курицы,листья салата ,сыр",
    },
    {
      img: "assets/images/12.webp",
      lbl: "Комбо от шеф-повара баранина",
      price: "380",
      desc: "картофель,кетчуп, чесночный соус,кока-кола",
    },
    {
      img: "assets/images/12.webp",
      lbl: "Комбо от шеф-повара курица",
      price: "380",
      desc: "",
    },
  ],
  [
    {
      img: "assets/images/13.webp",
      lbl: "Бургер Фалафель",
      price: "200",
      desc: "картофель, майонез",
    },
    {
      img: "assets/images/14.webp",
      lbl: "Сэндвич салатом с сыром",
      price: "200",
      desc: " ",
    },
    {
      img: "assets/images/15.webp",
      lbl: "Сэндвич с картошкой",
      price: "200",
      desc: "",
    },
  ],
  [
    {
      img: "assets/images/16.webp",
      lbl: "Фалафель",
      price: "200",
      desc: "Горох, специальная приправа,помидор, ТХИНА ,айзберг салат,огурец, мята",
    },
    {
      img: "assets/images/17.webp",
      lbl: "Фалафель по Арабски",
      price: "250",
      desc: "Горох, специальная приправа,помидор, ТХИНА , айзберг салат,огурец, мята",
    },
    {
      img: "assets/images/18.webp",
      lbl: "Уджа с мясом",
      price: "240",
      desc: "Котлета из куриных яиц,мясо ,петрушка, лук,чеснок, приправа, помидор",
    },
    {
      img: "assets/images/19.webp",
      lbl: "Уджа",
      price: "200",
      desc: "Котлета из куриных яиц,петрушка, лук, чеснок,приправа, помидор",
    },
    {
      img: "assets/images/20.webp",
      lbl: "Фалафель штучный",
      price: "150",
      desc: "Горох, специальная приправа 5шт (веган)",
    },
  ],
  [
    {
      img: "assets/images/21.webp",
      lbl: "Люля кебаб",
      price: "200",
      desc: "Мясо баранины",
    },
    {
      img: "assets/images/21.webp",
      lbl: "Люля кебаб",
      price: "160",
      desc: "Курица",
    },
    {
      img: "assets/images/22.webp",
      lbl: "Шашлык (баранина)",
      price: "200",
      desc: "",
    },
    {
      img: "assets/images/23.webp",
      lbl: "Шиш тауук",
      price: "160",
      desc: "Курица,майонез,помидор,петрушка,лук ,лимон.",
    },
    {
      img: "assets/images/24.webp",
      lbl: "Шашлык в",
      price: "900",
      desc: "ассортименте",
    },
    {
      img: "assets/images/24.webp",
      lbl: "Шашлык в",
      price: "1750",
      desc: "ассортименте",
    },
  ],
  [
    {
      img: "assets/images/food_1600х1200.jpg",
      lbl: "Фри",
      price: "60",
      desc: "",
    },
    {
      img: "assets/images/food_1600х1200.jpg",
      lbl: "Фри",
      price: "100",
      desc: "",
    },
    {
      img: "assets/images/food_1600х1200.jpg",
      lbl: "Фри (большая)",
      price: "200",
      desc: "",
    },
    {
      img: "assets/images/27.webp",
      lbl: "АРАЕС с мясом",
      price: "160",
      desc: "Арабский хлеб,мясной фарш,помидор, болгарский перец",
    },
    {
      img: "assets/images/28.webp",
      lbl: "Араес Сыр (веган)",
      price: "140",
      desc: "Сыр в арабской пите, помидор, мята, оливковое масло, кунжут",
    },
    {
      img: "assets/images/29.webp",
      lbl: "АРАЕС мясом с сыром",
      price: "180",
      desc: "Арабский хлеб, сыр, мясной фарш, помидор, болгарский перец",
    },
    {
      img: "assets/images/30.webp",
      lbl: "Суджук",
      price: "180",
      desc: "Мясо баранины со специальной приправой, чеснок, помидор, огурец соленый.",
    },
    {
      img: "assets/images/31.webp",
      lbl: "АРАЕС сыр",
      price: "180",
      desc: "с аджика арабская (острое)",
    },
    {
      img: "assets/images/31.webp",
      lbl: "АРАЕС аджика",
      price: "140",
      desc: "",
    },
    {
      img: "assets/images/32.webp",
      lbl: "Хумус (сезонный)",
      price: "150",
      desc: "",
    },
    {
      img: "assets/images/33.webp",
      lbl: "Мтапал (сезонный)",
      price: "150",
      desc: "",
    },
    {
      img: "assets/images/34.webp",
      lbl: "Табуле",
      price: "150",
      desc: "",
    },
    {
      img: "assets/images/35.webp",
      lbl: "Арабский салат",
      price: "150",
      desc: "",
    },
  ],
];

let html = "",
  title = "";
for (let i = 0, l = meals.length; l > i; i++) {
  html += '<div class="firstContainer">';

  switch (i) {
    case 0:
      title = "Шаурма";
      break;
    case 1:
      title = "Хрустящие";
      break;
    case 2:
      title = "Бургеры";
      break;
    case 3:
      title = "Вегетерианское";
      break;
    case 4:
      title = "Фалафель";
      break;
    case 5:
      title = "Шашлык";
      break;
    case 6:
      title = "Закуски";
      break;
  }

  html += `<p class="firstContainer__title">${title}</p>`;
  for (let j = 0, s = meals[i].length; s > j; j++) {
    html += '<div class="mealItem">';
    html += `<p class="mealItem__price">${meals[i][j].price} ₽</p>`;
    html += ' <figure class="mealItem__main">';
    html += ` <img src="${meals[i][j].img}" alt="meal Image" class="mealItem__main__img"/>`;
    html += ` <figcaption class="mealItem__main__caption">${meals[i][j].desc}</figcaption>`;
    html += " </figure>";
    html += `  <p class="mealItem__title">${meals[i][j].lbl}</p>`;
    html += " </div>";
  }
  html += "</div>";
}

document.getElementById("TheMenu").innerHTML = html;
