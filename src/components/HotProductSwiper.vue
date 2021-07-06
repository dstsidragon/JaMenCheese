<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }"
    :pagination="true"
    class="mySwiper"
  >
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"/></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg"/></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg"/></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg"/></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg"/></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg"/></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg"/></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-8.jpg"/></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-9.jpg"/></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';

import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

</style>
