const sideBtn = document.querySelector(".side-btn"),
  header = document.querySelector(".header"),
  modalDescription = document.querySelector(".modal__txt-description"),
  modalTitle = document.querySelector(".modal__txt-title"),
  modalImage = document.querySelector(".modal__mealImage"),
  closeBtn = document.getElementById("close-btn"),
  aboutScetion = document.getElementById("aboutSection"),
  footer = document.querySelector(".footer-container"),
  theMenu = document.getElementById("TheMenu"),
  ourSideBar = document.getElementById("sideBar"),
  homeNav = document.getElementById("homeNav"),
  menuNav = document.getElementById("menuNav"),
  aboutNav = document.getElementById("aboutNav"),
  mainBtn = document.getElementById("main-btn"),
  navigationBar = document.querySelector(".navigation-bar"),
  mealElement = document.querySelectorAll(".mealItem"),
  modal = document.querySelector(".modal"),
  closeButton = document.querySelector(".close-button"),
  burger = document.getElementById("burger"),
  sideElement = document.querySelectorAll(".side-bar__elem"),
  nav = document.getElementById("main-nav");
const shawarmaCtg = document.getElementById("shawarma_ctg"),
  broastedCtg = document.getElementById("broasted_ctg"),
  burgerCtg = document.getElementById("burger_ctg"),
  falafelCtg = document.getElementById("falafel_ctg"),
  apptizersCtg = document.getElementById("apptizers_ctg"),
  barbecueCtg = document.getElementById("barbeque_ctg");

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

function toggleCtg() {
  ourSideBar.classList.toggle("active");
  console.log("functon");
}

function toggleModal(id) {
  if (!modal.classList.contains("show-modal")) {
    let index1 = Number(String(id).charAt(0));
    let index2 = Number(String(id).slice(1));

    modalTitle.textContent = meals[index1][index2].lbl;
    modalDescription.textContent = meals[index1][index2].desc;
    modalImage.innerHTML = `<img src="${meals[index1][index2].img}" onContextMenu="return false;" alt="meal Image" />`;
  }

  console.log("toggle called");
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

mainBtn.addEventListener("click", function (params) {
  theMenu.scrollIntoView({ behavior: "smooth", block: "start" });
});
sideBtn.addEventListener("click", toggleCtg);
closeBtn.addEventListener("click", toggleCtg);
homeNav.addEventListener("click", () => navsRespond(header));
menuNav.addEventListener("click", () => navsRespond(theMenu));
aboutNav.addEventListener("click", () => navsRespond(aboutScetion));
contactNav.addEventListener("click", () => navsRespond(footer));
burger.addEventListener("click", toggleMainNav);
mealElement.forEach((item) => {
  item.addEventListener("click", (event) =>
    toggleModal(event.currentTarget.id)
  );
});
closeButton.addEventListener("click", () => toggleModal("ziltch"));
window.addEventListener("click", windowOnClick);

document.addEventListener("click", function (e) {
  if (e.target !== ourSideBar && e.target !== sideBtn) {
    ourSideBar.classList.remove("active");
  }
});

sideElement.forEach((item) => {
  item.addEventListener("click", function (event) {
    switch (event.currentTarget.id) {
      case "falafel_btn":
        falafelCtg.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "shawarma_btn":
        shawarmaCtg.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "broasted_btn":
        broastedCtg.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "burger_btn":
        burgerCtg.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "apptizers_btn":
        apptizersCtg.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "barbecue_btn":
        barbecueCtg.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
    }
  });
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 3000,
      },
    },
    color: {
      value: "#fd7907",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 3,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 5,
        size_min: 0.01,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 7.8,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble",
      },
      onclick: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
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
      desc: "ассортименте (500г)",
    },
    {
      img: "assets/images/24.webp",
      lbl: "Шашлык в",
      price: "1750",
      desc: "ассортименте (1кг)",
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
/* 
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
    html += `<div class="mealItem" id="${i}${j}">`;
    html += `<p class="mealItem__price">${meals[i][j].price} ₽</p>`;
    html += ' <figure class="mealItem__main">';
    html += ` <img src="${meals[i][j].img}" alt="meal Image" onContextMenu="return false;" class="mealItem__main__img"/>`;
    html += ` <figcaption class="mealItem__main__caption">${meals[i][j].desc}</figcaption>`;
    html += " </figure>";
    html += `  <p class="mealItem__title">${meals[i][j].lbl}</p>`;
    html += " </div>";
  }
  html += "</div>";
}

console.log(html); */
