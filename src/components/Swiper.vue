<template>
<!-- :effect="'fade'" -->
  <swiper  :spaceBetween="30" :centeredSlides="true" :autoplay='{
  "delay": 2500,
  "disableOnInteraction": false
}'
:loop="true"
  >
    <swiper-slide class="swiper-banner swiper-banner-img1"></swiper-slide>
    <swiper-slide class="swiper-banner swiper-banner-img2"></swiper-slide>
    <swiper-slide class="swiper-banner swiper-banner-img3"></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';

import 'swiper/components/effect-fade/effect-fade.min.css';
// import Swiper core and required modules
import SwiperCore, {
  EffectFade, Autoplay,
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([EffectFade, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
};
</script>
<style lang="scss" >
@import '@/assets/scss/mixin/_mixin';
.swiper-banner{
  min-height: 100vh;
  // background-attachment: fixed;
  &-img1{
  background: center center no-repeat
    url('https://images.unsplash.com/photo-1621857426350-ddab819cf0cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80');
  background-size: cover;
  opacity: 0.5 !important;
  }
  &-img2{
  background: center center no-repeat
    url('https://images.unsplash.com/photo-1591299177061-2151e53fcaea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80');
  background-size: cover;
  opacity: 0.5 !important;
  }
  &-img3{
  background: center center no-repeat
    url('https://images.unsplash.com/photo-1575613425642-7ff66d570b52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80');

  background-size: cover;
  opacity: 0.5 !important;
  }
}
</style>
