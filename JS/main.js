import Vue from "../node_modules/vue";
import Carousel3d from "../node_modules/vue-carousel-3d";

Vue.use(Carousel3d);

Vue.createApp({
  data: {
    slides: 7,
  },
  components: {
    Carousel,
    Slide,
    "carousel-3d": window["carousel-3d"].Carousel3d,
    slide: window["carousel-3d"].Slide,
  },
}).mount("#example");
