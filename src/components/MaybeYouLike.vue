<template>
  <Swiper
    :slidesPerView="3"
    :spaceBetween="10"
    :slidesPerGroup="1"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }"
    class="mySwiper"
  >
    <SwiperSlide
      v-for="(item, i) in filterProducts"
      :key="i"
      @click.prevent="$emit('view-one-product', item)"
    >
      <div class="overflow-hidden cursor-pointer">
        <img
          :src="item.imageUrl"
          class="object-fit swiper-img img--scale"
          :alt="item.imageUrl"
        />
      </div>
      <span class=" cursor-pointer">
        <p class="bg-primary text-white p-1 fs-2 m-0">{{ item.title }}</p>
        <p class="text-primary border border-primary p-1 m-0">詳細內容</p>
      </span>
      <div class="bg-primary text-white p-1 hotProduct-icon cursor-pointer">{{ category }}</div>
    </SwiperSlide>
  </Swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import SwiperCore, { Autoplay } from 'swiper/core';

SwiperCore.use([Autoplay]);

export default {
  emits: ['view-one-product'],
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ['category'],
  data() {
    return {
      productsData: '',
      filterProducts: [],
      filterSameCategory: '',
      err: '',
    };
  },
  watch: {
    category() {
      setTimeout(() => {
        this.getSameCategoryProduct(4);
      }, 500);
    },
  },
  methods: {
    getRandomNumber(n) {
      return Math.floor(Math.random() * n);
    },
    // 取得全部商品列表
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`,
        )
        .then((res) => {
          if (res.data.success) {
            this.productsData = res.data.products;
          }
        })
        .catch((err) => {
          this.err = err;
        });
    },
    getSameCategoryProduct(num) {
      if (this.productsData !== '') {
        this.filterSameCategory = this.productsData.filter(
          (item) => item.category === this.category,
        );
        // 如果陣列商品不足，就以當前陣列長度為基準
        const productNum = this.filterSameCategory.length < num
          ? this.filterSameCategory.length
          : num;
        const prdSet = new Set([]);
        for (let i = 0; prdSet.size < productNum; i += 1) {
          const prd = this.getRandomNumber(productNum);
          prdSet.add(prd);
        }
        prdSet.forEach((i) => {
          this.filterProducts.push(this.filterSameCategory[i]);
        });
      }
    },
  },
  mounted() {
    this.getProducts();
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
