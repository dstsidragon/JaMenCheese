<template>
  <div class="container mt_navbar ">
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

</style>
