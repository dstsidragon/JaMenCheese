<template>
  <Swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    class="mySwiper"
  >
    <SwiperSlide
      v-for="(item, i) in filterProducts"
      :key="i"
      @click.prevent="$emit('view-one-product', item)"
    >
      <div class="overflow-hidden">
        <img
          :src="item.imageUrl"
          class="object-fit swiper-img img--scale"
          :alt="item.imageUrl"
        />
      </div>
      <span>
        <p class="bg-primary text-white p-1 fs-2 m-0">{{ item.title }}</p>
        <p class="text-primary border border-primary p-1 m-0">詳細內容</p>
      </span>
      <div class="bg-danger text-white p-1 hotProduct-icon">HOT</div>
    </SwiperSlide>
  </Swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import SwiperCore, { EffectCoverflow } from 'swiper/core';

SwiperCore.use([EffectCoverflow]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ['products'],
  watch: {
    products() {
      this.getRandomProduct(10);
    },
  },
  data() {
    return {
      filterProducts: [],
    };
  },
  methods: {
    getRandomNumber(n) {
      return Math.floor(Math.random() * n);
    },
    getRandomProduct(item) {
      const prdSet = new Set([]);
      for (let i = 0; prdSet.size < item; i += 1) {
        const prd = this.getRandomNumber(this.products.length);
        prdSet.add(prd);
      }
      prdSet.forEach((i) => {
        this.filterProducts.push(this.products[i]);
      });
    },
  },
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
  height: 215px;
}
.hotProduct-icon {
  position: absolute;
  top: 0;
  left: 5px;
}
</style>
