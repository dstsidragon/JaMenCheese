<template>
  <Swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :loop="true"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    class="mySwiper2 img-big"
  >
    <SwiperSlide
      ><img class="object-fit" :src="product.imageUrl" :alt="product.imageUrl"
    /></SwiperSlide>
    <SwiperSlide
      class="object-fit"
      v-for="(item, i) in filterProductImg"
      :key="i"
    >
      <img :src="item" :alt="item"
    /></SwiperSlide>
  </Swiper>
  <Swiper
    @swiper="setThumbsSwiper"
    :loop="true"
    :spaceBetween="10"
    :slidesPerView="3"
    :freeMode="true"
    :watchSlidesVisibility="true"
    :watchSlidesProgress="true"
    class="mySwiper my-2"
    style="height: 100px"
  >
    <SwiperSlide><img :src="product.imageUrl" /></SwiperSlide>

    <SwiperSlide
      style="width: 100px"
      v-for="(item, i) in filterProductImg"
      :key="i"
    >
      <img :src="item" :alt="item" />
    </SwiperSlide>
  </Swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';

SwiperCore.use([Navigation, Thumbs]);

export default {
  props: ['product'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
      filterProductImg: [],
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
  watch: {
    // 塞選掉空白的圖片
    product() {
      this.filterProductImg = this.product.imagesUrl.filter(
        (item) => item !== '',
      );
    },
  },
};
</script>
<style lang="scss" scoped>
#app {
  height: 100%;
}
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
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-container {
  margin-left: auto;
  margin-right: auto;
}
.img-big {
  height: 600px;
}
@media (max-width: 767px) {
  .img-big {
    height: 400px;
  }
}

@media (max-width: 413px) {
  .img-big {
    height: 300px;
  }
}
</style>
