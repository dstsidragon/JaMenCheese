<template>
  <div class="position-relative">
    <!-- <div class="banner"></div> -->
    <Swiper/>
    <kinesis-container class="banner__font bgc-transparent rounded text-primary
     ff-HachiMaruPop p-4">
              <kinesis-element :strength="15" class="banner__subtitle">
                創意演繹極致口感
              </kinesis-element>
              <kinesis-element :strength="30">
                -勾起你心中的餓
              </kinesis-element>
                <div class="d-flex justify-content-center mt-5">
                  <router-link  class="btn btn-primary px-2 d-flex
                  justify-content-center align-items-center"  href="#"
          to="/products" >
          <i class="material-icons">
          store
          </i>
          前往購物
          </router-link>
          </div>
          </kinesis-container>
  <div class="box"></div>
   <!-- 讀取畫面 start -->
  <div class="container">
  <Loading :isVueLoading='isLoading' />
  </div>
   <!-- 讀取畫面 end -->
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import Swiper from '@/components/Swiper.vue';

export default {
  components: {
    Loading,
    Swiper,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin/_mixin';

.banner{
  &__font{
    z-index: 1000;
  position:absolute;
  top:20%;
  left:5%;
  font-size: 2rem;
  color: #ffffff;
  font-weight: bold;
  text-align: left;
  }
  &__subtitle{
  font-size:3rem;
  }
  @include mobile{
    height: 500px;
    &__font{
  top:30%;
    font-size: 1.5rem;
  }
  &__subtitle{
  font-size:2rem;
  }
  }
}
.box {
  margin-top: 10px;
  margin-bottom: 10px;
  margin: 0 auto;
  background-color: #fff;
  height: 200px;
}
.bgc-transparent{
  background-color: rgba(1, 2, 0.1, 0.1);
}
</style>
