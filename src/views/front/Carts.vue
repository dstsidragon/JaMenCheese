<template>
  <div
    class="banner mt-navbar d-flex justify-content-center align-items-center"
  >
    <header class="text-white bg-img-transparent rounded p-2">
      <h2 class="text-center fz-2 fz-md-4">購買商品</h2>
      <p class="fz-0 fz-md-1">
        猶豫不決固然可以免去一些作錯事的機會，但也失去了成功的機遇!
      </p>
    </header>
  </div>
  <div class="container">
    <div>
      <!-- 進度條元件 start -->
      <Progress :cartstep="cartStep" />
      <!-- 進度條元件 end -->
    </div>
  </div>
  <hr />

  <RouterView />
</template>
<script>
// 進度條
import Progress from '@/components/Progress.vue';
// emitte
import emitter from '@/assets/js/emitter';

export default {
  components: {
    Progress,
  },
  data() {
    return {
      // 購物步驟
      cartStep: 1,
    };
  },
  mounted() {
    emitter.on('chg-cart-step', (e) => {
      this.cartStep = e;
    });
  },
  unmounted() {
    emitter.off('chg-cart-step', (e) => {
      this.cartStep = e;
    });
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin/_mixin';
.banner {
  background: center center no-repeat
    url('https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627384683804.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CCAjYbXhtk0AEfzr4vyKAztR52diMCQNfF%2BcEJSMtiz4ZBC2njfp8gYNbnzPqoKMtoVDeYUJfIzt%2FaibOxmav5ea%2BmvUGF90zTFTBf1j2gqQrzFvXs120EQMd0JKeigVEUUvUyHMTdKeOinXoFmKRX4kumXXE5bRw%2B1qpPREkGhl7tln%2BU%2FnZHJmDFKEzLc6k8WbivkFICPNAsgwuZ%2FTOZ8Z0mIT4bPMEAkyzphJolvPYiFqRGeQooNFaYi8l9cwdNVWcx%2Fq2aLIVRkO%2BCnoKUh3pEGvo4drN8rH5%2FFCf69uUzHI5%2Fy%2F5CJPf9y4Vkly6FC%2FRYu%2Bgsd9MVbhfsBk0g%3D%3D');
  height: 340px;
  background-size: cover;
  background-attachment: fixed;
  @include pad {
    height: 170px;
  }
}
</style>
