the website had an amazing side navigation but for reponsiveness and huge efforts requirements it has been removed to be used in future versions, and here I am going to put its code:

HTML code:

   <div class="navigation-bar">
        <div class="rectangle"></div>
        <div class="container"></div>

        <ul class="navs">
          <li class="navs__item">
            <input
              type="radio"
              class="navs__item__radio"
              name="size"
              id="home"
            />
            <label for="home" class="navs__item__label"> главного</label>
          </li>
          <li class="navs__item">
            <input
              type="radio"
              class="navs__item__radio"
              name="size"
              id="menu"
            />
            <label for="menu" class="navs__item__label"> меню</label>
          </li>
          <li class="navs__item">
            <input
              type="radio"
              class="navs__item__radio"
              name="size"
              id="contact"
            />
            <label for="contact" class="navs__itme__label"> Контактная</label>
          </li>
          <li class="navs__item">
            <input
              type="radio"
              class="navs__item__radio"
              name="size"
              id="about"
            />
            <label for="about" class="navs__item__label"> О компании</label>
          </li>
        </ul>
      </div>

CSS code:

.navigation-bar {
position: fixed;
top: 0;
right: 0;
z-index: 99999;
display: none;

@media screen and (min-width: 350px) and (max-width: 1000px) {
display: inline-block;
}
}

.navs {
list-style: none;
margin-top: 10vh;
margin-right: 1rem;
font-size: 1.2rem;
display: flex;
transform-origin: right;
transform: rotatez(-90deg);

&\_\_item {
padding: 1rem;

    &__radio {
      display: none;
    }

}

@media only screen and(min-height:515px) {
margin-top: 35vh;
}
@media only screen and(min-height:555px) {
margin-top: 38vh;
}
@media only screen and(min-height:580px) {
margin-top: 39vh;
}
@media only screen and(min-height:600px) {
margin-top: 40vh;
}
@media only screen and(min-height:620px) {
margin-top: 42vh;
}
@media only screen and(min-height:650px) {
margin-top: 44vh;
}
@media only screen and(min-height:680px) {
margin-top: 46vh;
}
@media only screen and(min-height:720px) {
margin-top: 48vh;
}
@media only screen and(min-height:775px) {
margin-top: 50vh;
}
@media only screen and(min-height:820px) {
margin-top: 51vh;
}
@media only screen and(min-height:845px) {
margin-top: 52vh;
}
@media only screen and(min-height:860px) {
display: none;
}
}

.rectangle {
height: 83vh;
width: 4px;
background-color: $red-dark1;
position: fixed;
right: 0;
top: 0;
transition: all 0.3s;
}

.container {
height: 7rem;
width: 2rem;
background-color: $red-dark1;
border-radius: 10px 0 0 10px;
position: absolute;
right: 0;
top: 80.5vh;
transition: all 0.3s;
box-shadow: 2px 2px 5px $grey-dark;
}

The JS code:

const home = document.getElementById("home"),
contact = document.getElementById("contact"),
about = document.getElementById("about"),
container = document.querySelector(".container"),
rectangle = document.querySelector(".rectangle");

//----- this code was implemented from outer source in order to detect JS scroll form the one from the user ------//
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
//----------------------------------------------------------------------------------------------------------------//

//------- gets the coordination of a given element relatively to the whole document --------//
function getOffset(el) {
const rect = el.getBoundingClientRect();
return {
left: rect.left + window.scrollX,
top: rect.top + window.scrollY,
};
}

menu.addEventListener("click", () => sideNavRespond(-4.5, 72, theMenu));
home.addEventListener("click", () => sideNavRespond(0, 85, header));
contact.addEventListener("click", () => sideNavRespond(-9, 63, footer));
about.addEventListener("click", () => sideNavRespond(-14, 54, aboutScetion));

// main nav responding to scroll

document.addEventListener("scroll", (event) => {
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

// controls navigation of the side nav
function sideNavRespond(translate, height, domElement) {
container.style.transform = `translateY(${translate}rem)`;
rectangle.style.height = `${height}vh`;
domElement.scrollIntoView({ behavior: "smooth", block: "start" });
}
