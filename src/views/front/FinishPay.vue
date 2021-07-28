<template>
  <div class="container mt-3">
    <!-- Alert元件 start -->
    <Alert
      class="alert-position"
      v-if="alertMessage"
      :message="alertMessage"
      :status="alertStatus"
    />
    <!-- Alert元件 end -->
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h5 class="card-title fz-3">付款完成！</h5>
      </div>
      <div class="card-body">
        <p class="card-text fz-2 text-primary">
          商品開始備料製作，<br />感謝您對我們商品的支持
        </p>
      </div>
    </div>
    <div class="d-none d-md-flex justify-content-center mt-5">
      <button
        ref="formBtn"
        @click="$router.push('/products')"
        type="submit"
        :disabled="loadingStatue.sendOrder == 1"
        class="
          btn btn-primary-lighten
          py-2
          fz-2 fz-ssm-3
          col-10 col-sm-5
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <span
          :class="{ 'd-none': loadingStatue.sendOrder !== 1 }"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
        <span>繼續購物</span>
      </button>
    </div>
  </div>
  <!-- 送出按鈕 start-->
  <div class="w-100 mobile-fixed d-md-none bg-white border-top border-dark">
    <div class="d-flex justify-content-between row">
      <button
        @click="$router.push('/products')"
        type="submit"
        :disabled="loadingStatue.sendOrder == 1"
        class="
          btn btn-primary
          py-2
          fz-2 fz-ssm-3
          btn-right btn-primary-mobile
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <span
          :class="{ 'd-none': loadingStatue.sendOrder !== 1 }"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
        <span>繼續購物</span>
      </button>
    </div>
  </div>
  <!-- 送出按鈕 end -->
  <hr />

  <!-- 讀取畫面 start-->
  <Loading :isVueLoading="isLoading" />
  <!-- 讀取畫面 end -->
</template>

<script>
// Alert元件
import Alert from '@/components/Alert.vue';
// 讀取畫面
import Loading from '@/components/Loading.vue';
// emitter
import emitter from '@/assets/js/emitter';

export default {
  components: {
    // Alert元件
    Alert,
    // 讀取畫面
    Loading,
  },
  data() {
    return {
      // alert元件參數
      alertMessage: '',
      alertStatus: false,
      // 讀取畫面
      isLoading: false,
      // 讀取狀態
      loadingStatue: {},
      // 購物步驟
      cartStep: 4,
    };
  },
  methods: {
    // 改變進度條
    chgCartStep() {
      // 發起一個觸發(可帶參數)
      emitter.emit('chg-cart-step', this.cartStep);
    },
  },
  created() {
    // 改變進度條
    this.chgCartStep();
  },
};
</script>

<style lang="scss" scoped>
.btn-primary-mobile:hover {
  border-color: #fff;
  background-color: #7f5625;
  color: #fff;
}
</style>
