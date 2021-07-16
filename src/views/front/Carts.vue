<template>

    <div class="banner mt_navbar  d-flex justify-content-center align-items-center">
        <div class="text-white  bg-img-transparent rounded p-2 ">
          <h2 class="text-center fz-2 fz-md-4">購買商品</h2>
          <p class="fz-0 fz-md-1">猶豫不決固然可以免去一些作錯事的機會，但也失去了成功的機遇!</p>
        </div>
         </div>
  <div class="container  ">
    <div>
      <!-- 進度條元件 start -->
      <Progress :cartstep="cartStep" />
      <!-- 進度條元件 end -->
    </div>

    </div>
  <!-- 購物車列表 end -->
  <hr />

<router-view/>
</template>
<script>
// 進度條
import Progress from '@/components/Progress.vue';
// emitte
import emitter from '@/assets/js/emitter';

export default {
  components: {
    // 進度條
    Progress,
  },
  data() {
    return {
      // 購物步驟
      cartStep: 1,
    };
  },
  methods: {
  },
  watch: {
  },
  mounted() {
    //  監聽一個事件
    emitter.on('chg-cart-step', (e) => {
      this.cartStep = e;
    });
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin/_mixin';
.banner{
  background: center center no-repeat
  url('https://images.unsplash.com/photo-1620648360404-e895f8976aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80');
  height: 340px;
  background-size: cover;
  background-attachment: fixed;
  @include pad{
  height: 170px;
  }
}

</style>
