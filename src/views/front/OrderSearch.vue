<template>
  <!-- 訂單列表 start-->
  <div class="container mt-5">
    <button
      type="button"
      class="btn btn-secondary"
      @click="$router.push('/orders')"
    >
      返回訂單頁面
    </button>

    <ul class="mt-5" v-if="orderData">
      <li class="mb-3">
        <div class="card">
          <h5 class="card-header bg-primary text-white fs-5">#1</h5>
          <div class="card-body">
            <h5 class="card-title fz-1 fz-md-2 d-flex justify-content-between">
              <p class="m-0">訂單編號 :</p>
              <p class="m-0">{{ orderData.order.id }}</p>
            </h5>
            <p
              class="
                card-text
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <small class="m-0 fz-md-1">建立日期:</small>
              <small class="m-0 fz-md-1">{{
                $toLocaleDate(orderData.order.create_at)
              }}</small>
            </p>
            <span
              class="
                card-text
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <p class="m-0">備註:</p>
              <p
                v-if="
                  orderData.order.message.split('//splitValue//')[0] !== ' '
                "
                class="m-0"
              >
                {{ orderData.order.message.split('//splitValue//')[0] }}
              </p>
              <p v-else class="m-0">無備註</p>
            </span>
            <ul>
              <li class="my-2 fz-2">訂單內容</li>
              <li v-for="prd in orderData.order.products" :key="prd.id">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-2">
                      <img
                        class="object-fit prd_img_100"
                        :src="prd.product.imageUrl"
                        alt="prd_img"
                      />
                    </div>
                    <div class="col-md-10">
                      <div class="card-body">
                        <h5 class="card-title">{{ prd.product.title }}</h5>
                        <p class="card-text mb-0">
                          <small class="text-muted">{{
                            prd.product.description
                          }}</small>
                        </p>
                        <p class="card-text d-flex justify-content-between">
                          <small>*{{ prd.qty }}</small
                          ><small>${{ prd.total }}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul
              class="
                d-flex
                flex-wrap
                justify-content-between
                align-items-center
                fw-bold
              "
            >
              <li class="fs-3 text-danger">
                <p>總計:{{ Math.floor(orderData.order.total) }} 元</p>
              </li>
              <li v-if="orderData.order.is_paid" class="fs-3 text-success">
                <p>已付款</p>
              </li>
              <li v-else class="fs-3 text-danger"><p>未付款</p></li>

              <li>
                <button class="btn btn-success me-2" @click="viewSeller">
                  聯絡賣家
                </button>
                <button
                  v-if="!orderData.order.is_paid"
                  class="btn btn-danger"
                  @click="this.$router.push(`/payment/${orderId}`)"
                >
                  付款
                </button>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <!-- 訂單列表 end -->

    <!-- 賣家資訊 start-->
    <ViewSellerModal ref="viewSeller" />
    <!-- 賣家資訊 end-->
  </div>

  <!-- Alert元件 start -->
  <Alert
    class="alert-position"
    v-if="alertMessage"
    :message="alertMessage"
    :status="alertStatus"
  />
  <!-- Alert元件 end -->

  <!-- 讀取畫面 start-->
  <Loading :isVueLoading="isLoading" />
  <!-- 讀取畫面 end -->
</template>

<script>
// 查看賣家
import ViewSellerModal from '@/components/ViewSellerModal.vue';
// Alert元件
import Alert from '@/components/Alert.vue';
// 讀取畫面
import Loading from '@/components/Loading.vue';

export default {
  components: {
    // Alert元件
    Alert,
    // 查看賣家
    ViewSellerModal,
    // 讀取畫面
    Loading,
  },
  data() {
    return {
      // alert元件參數
      alertMessage: '',
      alertStatus: false,
      // 訂單資料
      orderData: '',
      // 讀取畫面
      isLoading: false,
      // 讀取狀態
      loadingStatue: {
        // 查詢訂單鈕
        searchOrder: '',
      },
      // 訂單編號
      orderId: this.$route.params.id,
    };
  },
  methods: {
    // 取得訂單
    getOrderData() {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`,
        )
        .then((res) => {
          if (res.data.success) {
            this.orderData = res.data;
            // 關閉讀取畫面
            this.isLoading = false;
          } else {
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            // 關閉讀取畫面
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.alertMessage = err.data.message;
          this.alertStatus = false;
          setTimeout(() => {
            this.alertMessage = '';
            this.alertStatus = false;
          }, 2000);
          // 關閉讀取畫面
          this.isLoading = false;
        });
    },
    // 查看賣家
    viewSeller() {
      this.$refs.viewSeller.openModal();
    },
    // 付款
    checkOut() {
      this.alertMessage = '要付款嗎? 先看看賣家是誰好了~';
      this.alertStatus = true;
      setTimeout(() => {
        this.alertMessage = '';
        this.alertStatus = false;
      }, 2000);
    },
  },
  created() {
    // 取得訂單資料
    this.getOrderData();
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/mixin/_mixin';
.orderSearch {
  width: 300px;
  @include mobile {
    width: 190px;
  }
}
.prd_img_100 {
  height: 130px;
  width: 100%;
}
@media (max-width: 767px) {
  .prd_img_100 {
    height: 250px;
  }
}
</style>
