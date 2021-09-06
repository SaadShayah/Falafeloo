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

var ignoreClickOnMeElement = document.getElementById("sideBar");

document.addEventListener("click", function (event) {
  var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
  if (
    !isClickInsideElement &&
    !ignoreClickOnMeElement.classList.contains("hide")
  ) {
    ourSideBar.classList.remove("show");
    ourSideBar.classList.add("hide");
  }
});

//---------------------------- THE BURGER NAVIGATION --------------------------//

let burger = document.getElementById("burger"),
  nav = document.getElementById("main-nav");

burger.addEventListener("click", function (e) {
  this.classList.toggle("is-open");
  nav.classList.toggle("is-open");
  document.body.classList.toggle("lock");
});
