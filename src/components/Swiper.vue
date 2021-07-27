<template>
  <!-- :effect="'fade'" -->
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :loop="true"
  >
    <swiper-slide class="swiper-banner swiper-banner-img1" />
    <swiper-slide class="swiper-banner swiper-banner-img2" />
    <swiper-slide class="swiper-banner swiper-banner-img3" />
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';

import 'swiper/components/effect-fade/effect-fade.min.css';
// import Swiper core and required modules
import SwiperCore, { EffectFade, Autoplay } from 'swiper/core';
// install Swiper modules
SwiperCore.use([EffectFade, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style lang="scss" >
@import '@/assets/scss/mixin/_mixin';
.swiper-banner {
  min-height: 100vh;
  // background-attachment: fixed;
  &-img1 {
    background: center center no-repeat
      url('https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627385259783.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CR8%2Bibg8t44nvQOmhEhLRN4orKm4il2E3BWZKQyj7XTwqUoIDAd4Vxvf280dX%2FQG0PI8NZVGwgbjEa7Jm6kyI2a%2FAoelhNREwBfs2f%2FsoZ3alhBcP2b3XsIKO6Onwdf4XgYMRjUH8kRGLACvb2XGb7FoHSJYrhewNObAqu1Naww8W8EQK1LZD2EvJUfKqnV6h7grdiuDuhdPfAY6uEKznqCX84k5Q0wBkQRIwRvzzi%2BkWYJfc5f%2BJVoxGu8%2FeHiWrDwZcCkbXdY26z3BSNFM0Df7XKqE9%2Ff%2BrtjZGp8wWVhahjrHaRaLnMJBbymEAiOkdepszgDfYlArp2fGvztoHQ%3D%3D');
    background-size: cover;
    opacity: 0.5 !important;
  }
  &-img2 {
    background: center center no-repeat
      url('https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627385291120.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MK3Msx0aW5Q%2F8cleNGpeIAJ%2BotlaqpxC20cFTNhQvEMT4N0H6SaXGwi9Rd5nO46p4WterZSJmZmQYjsU7a8fVkELrbNaXlGH27K4iJB2IQlQO8KmliFOyVj73aEeSok%2BSe9RRmUASgoRj5OmkmXsT9MHdPbDKAwX4wXdvRpW5nGxgPmY35ayp0ly7IFkBnU2A7ENC%2B6tr%2FHM9qY4Gu5JfAZipZa%2BrtemVz%2FUj8UnmJprAJ999iv2CpPkyZjhPeraJWiFv7GefCYXYJf8ojnPzzYmTgO1nqnY6itSQemG78clyQkf4K6Hl0Lsw2AnkI5rZqjYR%2FeEUhdfYQf8mVBKuA%3D%3D');
    background-size: cover;
    opacity: 0.5 !important;
  }
  &-img3 {
    background: center center no-repeat
      url('https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627385317242.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ThI8%2BMxHPrhKgjcwTRmtDW4Fhhr3joeXl3TMkfIPNpDk3d62HdXP8123HK2WnxmRVEzmBTGJ3xKs5rAIV%2FJxh1n4qYEO11ubSxTv19yHo0yodKldCLCKzhjkArhQQA2MRJXywZJnCPe%2BPnG1BIiufifKa2sHxnHSncx0XEQLTBx56cQOnZ%2Bl1SV9fZ%2FNd2aO%2FjH%2FxjfT86T8lrOWZ5zcbBp77wx9nWYFjlsA7Q25DE9AagMMqddxLH0MD1bT%2BWM40Dw2SRk%2BI2XFtSpBpuaob%2FM%2FFoH2f7rQu%2Fu%2FzYx%2FrI66q%2BsLt1TN%2F1z0k9nvsDtb69ZsLtnwqy9L%2Bo63f49gjg%3D%3D');

    background-size: cover;
    opacity: 0.5 !important;
  }
}
</style>
