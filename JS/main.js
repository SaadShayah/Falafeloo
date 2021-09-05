// import Vue from "../node_modules/vue";
// import Carousel3d from "../node_modules/vue-carousel-3d";

// Vue.use(Carousel3d);

// Vue.createApp({
//   data: {
//     slides: 7,
//   },
//   components: {
//     Carousel,
//     Slide,
//     "carousel-3d": window["carousel-3d"].Carousel3d,
//     slide: window["carousel-3d"].Slide,
//   },
// }).mount("#example");const menu = document.getElementById("menu");
const home = document.getElementById("home");
const contact = document.getElementById("contact");
const about = document.getElementById("about");
const container = document.querySelector(".container");
const rectangle = document.querySelector(".rectangle");
const sideBtn = document.querySelector(".side-btn");
const ourSideBar = document.getElementById("sideBar");

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
  ourSideBar.classList.add("show");
  console.log("clicked");
});

document.addEventListener("click", (evt) => {
  let targetElement = evt.target; // clicked element

  do {
    if (targetElement == ourSideBar) {
      // This is a click inside. Do nothing, just return.
      return;
    }
    // Go up the DOM
    targetElement = targetElement.parentNode;
  } while (targetElement);

  // This is a click outside.
  ourSideBar.classList.remove("show");
  ourSideBar.classList.add("hide");
});

let burger = document.getElementById("burger"),
  nav = document.getElementById("main-nav"),
  slowmo = document.getElementById("slowmo");

burger.addEventListener("click", function (e) {
  this.classList.toggle("is-open");
  nav.classList.toggle("is-open");
});

/* Onload demo - dirty timeout */
let clickEvent = new Event("click");

window.addEventListener("load", function (e) {
  slowmo.dispatchEvent(clickEvent);
  burger.dispatchEvent(clickEvent);

  setTimeout(function () {
    burger.dispatchEvent(clickEvent);

    setTimeout(function () {
      slowmo.dispatchEvent(clickEvent);
    }, 3500);
  }, 5500);
});
