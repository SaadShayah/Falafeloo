const home = document.getElementById("home"),
  contact = document.getElementById("contact"),
  about = document.getElementById("about"),
  container = document.querySelector(".container"),
  rectangle = document.querySelector(".rectangle"),
  sideBtn = document.querySelector(".side-btn"),
  header = document.querySelector(".header"),
  closeBtn = document.querySelector(".close"),
  aboutScetion = document.getElementById("aboutSection"),
  footer = document.querySelector(".footer-container"),
  theMenu = document.getElementById("TheMenu"),
  ourSideBar = document.getElementById("sideBar"),
  homeNav = document.getElementById("homeNav"),
  menuNav = document.getElementById("menuNav"),
  aboutNav = document.getElementById("aboutNav"),
  contactNav = document.getElementById("contactNav"),
  falafelBtn = document.getElementById("falafel_btn"),
  shawarmaBtn = document.getElementById("shawarma_btn"),
  broastedBtn = document.getElementById("broasted_btn"),
  burgerBtn = document.getElementById("burger_btn"),
  apptizersBtn = document.getElementById("apptizers_btn"),
  shawarmaCtg = document.getElementById("shawarma_cth"),
  broastedCtg = document.getElementById("broasted_ctg"),
  burgerCtg = document.getElementById("burger_ctg"),
  falafelCtg = document.getElementById("falafel_ctg"),
  apptizersCtg = document.getElementById("apptizers_ctg"),
  mainBtn = document.getElementById("main-btn"),
  navigationBar = document.querySelector(".navigation-bar");
let burger = document.getElementById("burger"),
  nav = document.getElementById("main-nav");
/* 
var userScroll = false;

function mouseEvent(e) {
  userScroll = true;
}

document.addEventListener("keydown", function (e) {
  if (
    e.key == 33 || // page up
    e.key == 34 || // page dn
    e.key == 32 || // spacebar
    e.key == 38 || // up
    e.key == 40 || // down
    (e.ctrlKey && e.key == 36) || // ctrl + home
    (e.ctrlKey && e.key == 35) // ctrl + end
  ) {
    userScroll = true;
  }
});

// detect user scroll through mouse
// Mozilla/Webkit
if (window.addEventListener) {
  document.addEventListener("DOMMouseScroll", mouseEvent, false);
}

//for IE/OPERA etc
document.onmousewheel = mouseEvent;

// to reset flag when named anchors are clicked
$("a[href*=#]").click(function () {
  userScroll = false;
});

// detect browser/user scroll
document.addEventListener("scroll", () => {
  console.log(
    "Scroll initiated by " + (userScroll == true ? "user" : "browser")
  );
});


 */

// gets the coordination of a given element relatively to the whole document
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

// responsible of opening and closing the main nav
function toggleMainNav() {
  if (!nav.classList.contains("is-open")) header.scrollIntoView();
  burger.classList.toggle("is-open");
  nav.classList.toggle("is-open");
  document.body.classList.toggle("lock");
}

// controls navigation of the main nav
function navsRespond(domElement) {
  toggleMainNav();
  domElement.scrollIntoView({ behavior: "smooth", block: "start" });
}

// controls navigation of the side nav
function sideNavRespond(translate, height, domElement) {
  container.style.transform = `translateY(${translate}rem)`;
  rectangle.style.height = `${height}vh`;
  domElement.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleCtg() {
  ourSideBar.classList.toggle("hide");
  ourSideBar.classList.toggle("show");
  console.log("functon");
}


menu.addEventListener("click", () => sideNavRespond(-4.5, 72, theMenu));
home.addEventListener("click", () => sideNavRespond(0, 85, header));
contact.addEventListener("click", () => sideNavRespond(-9, 63, footer));
about.addEventListener("click", () => sideNavRespond(-14, 54, aboutScetion));
sideBtn.addEventListener("click", toggleCtg);
closeBtn.addEventListener("click", toggleCtg);
homeNav.addEventListener("click", () => navsRespond(header));
menuNav.addEventListener("click", () => navsRespond(theMenu));
aboutNav.addEventListener("click", () => navsRespond(aboutScetion));
contactNav.addEventListener("click", () => navsRespond(footer));
burger.addEventListener("click", toggleMainNav);

// responding to scroll

document.addEventListener("scroll", () => {
  if (
    window.scrollY >= getOffset(theMenu).top &&
    window.scrollY < getOffset(aboutScetion).top &&
    window.scrollY < getOffset(footer).top
  ) {
    container.style.transform = "translateY(-4.5rem)";
    rectangle.style.height = "72vh";
  } else if (
    window.scrollY >= getOffset(aboutScetion).top &&
    window.scrollY < getOffset(footer).top - 750
  ) {
    container.style.transform = "translateY(-14rem)";
    rectangle.style.height = "54vh";
  } else if (window.scrollY > getOffset(footer).top - 750) {
    container.style.transform = "translateY(-9rem)";
    rectangle.style.height = "63vh";
  } else {
    container.style.transform = "translateY(0)";
    rectangle.style.height = "85vh";
  }
});

// mainBtn.addEventListener("click", function (params) {
//   console.log("clikced");
//   theMenu.scrollIntoView({ behavior: "smooth", block: "start" });
// });
//---------------------------- THE MENU --------------------------//
/* 
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
      img: "assets/images/25.webp",
      lbl: "Фри",
      price: "60",
      desc: "",
    },
    {
      img: "assets/images/25.webp",
      lbl: "Фри",
      price: "100",
      desc: "",
    },
    {
      img: "assets/images/26.webp",
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
title = "",
id = "";
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
        id = "broasted";
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
              
              html += `<p class="firstContainer__title" id="${id}">${title}</p>`;
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
            */

/* falafelBtn.addEventListener("click", function (params) {
  ourSideBar.classList.remove("show");
  ourSideBar.classList.add("hide");
  falafelCtg.scrollIntoView({ behavior: "smooth", block: "start" });
  console.log("clicked");
});
shawarmaBtn.addEventListener("click", function name(params) {
  ourSideBar.classList.remove("show");
  ourSideBar.classList.add("hide");
  shawarmaCtg.scrollIntoView({ behavior: "smooth", block: "start" });
});
broastedBtn.addEventListener("click", function name(params) {
  ourSideBar.classList.remove("show");
  ourSideBar.classList.add("hide");
  broastedCtg.scrollIntoView({ behavior: "smooth", block: "start" });
});
burgerBtn.addEventListener("click", function name(params) {
  ourSideBar.classList.remove("show");
  ourSideBar.classList.add("hide");
  burgerCtg.scrollIntoView({ behavior: "smooth", block: "start" });
});
apptizersBtn.addEventListener("click", function name(params) {
  ourSideBar.classList.remove("show");
  ourSideBar.classList.add("hide");
  apptizersCtg.scrollIntoView({ behavior: "smooth", block: "start" });
}); */
