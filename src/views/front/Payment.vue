<template>
  <div class="container mt-3 ">
    <div >
      <!-- Alert元件 start -->
      <Alert
        class="alert-position"
        v-if="alertMessage"
        :message="alertMessage"
        :status="alertStatus"
      />
      <!-- Alert元件 end -->
    </div>
    <!-- 訂單資訊 -->
    <div class="card">
  <div class="card-header fz-2">
    訂單資訊
  </div>
  <div class="card-body text-start">
    <ul v-if="orderData" class="blockquote mb-0 p-3 fz-1">
      <li class="d-flex justify-content-between align-items-center">
          <p>訂單編號:</p>
          <p>{{ orderData.order.id}}</p>
      </li>
      <li class="d-flex justify-content-between align-items-center">
          <p>訂單日期:</p>
          <p>{{ $toLocaleDate(orderData.order.create_at)}}</p>
      </li>
      <li class="d-flex justify-content-between align-items-center">
          <p>收件人:</p>
          <p>{{ orderData.order.user.name}}</p>
      </li>
      <li class="d-flex justify-content-between align-items-center">
          <p>電話:</p>
          <p>{{ orderData.order.user.tel}}</p>
      </li>
      <li class="d-flex justify-content-between align-items-center">
          <p>信箱:</p>
          <p>{{ orderData.order.user.email}}</p>
      </li>
      <li class="d-flex justify-content-between align-items-center">
          <p>收件地址:</p>
          <p>{{ orderData.order.user.address}}</p>
      </li>
      <li class="d-flex justify-content-between align-items-center">
          <p>備註:</p>
          <p>{{ message }}</p>
      </li>
      <li class="d-flex justify-content-between align-items-center">
          <p>總計:</p>
          <p>{{ finally_total }}</p>
      </li>
      <li class="d-flex justify-content-between align-items-center">
          <p>運費:</p>
          <p>{{ shipping }}</p>
      </li>
      <li class="d-flex justify-content-between align-items-center">
          <p>優惠折扣:</p>
          <p>{{ couponPrice }}</p>
      </li>
      <li class="d-flex justify-content-between align-items-center">
          <p>付款狀態:</p>
          <p>{{orderData?.order.is_paid? '已付款':'未付款'}}</p>
      </li>
      <li>
          <!-- 表單 start-->
        <Form ref="creatForm" v-slot="{ errors }" class="row g-3" @submit="payment">
    <!-- 付款方式 -->
        <div class=" ">
          <label for="pay" class="form-label ">付款方式:</label>
          <Field
            id="pay"
            ref="pay"
            name="付款方式"
            as="select"
            class="form-control "
            :class="{ 'is-invalid': errors['付款方式'] }"
            rules="required"
            v-model="payment_method"
          >
            <option value="" disabled>選擇付款方式</option>
            <option>WebATM</option>
            <option>ATM</option>
            <option>Credit</option>
            <option>ApplePay</option>
            <option>GooglePay</option>
          </Field>
          <error-message name="付款方式" class="invalid-feedback"></error-message>
        </div>
        <div class="d-none d-md-flex flex-wrap justify-content-center justify-content-sm-between">
          <button
      type="button"
        class="btn btn-secondary py-2 fz-2 fz-ssm-3 col-10 col-sm-5
        d-flex justify-content-center align-items-center"
        @click="$router.push('/products')"
      >
        <span>返回購物</span>
      </button>
          <button ref="formBtn"
      type="submit"
        :disabled='loadingStatue.sendOrder == 1 '
        class="btn btn-primary py-2 fz-2 fz-ssm-3 col-10 col-sm-5
         d-flex justify-content-center align-items-center"
      >
        <span
          :class="{ 'd-none': loadingStatue.sendOrder !== 1 }"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span>確認付款</span>
      </button>
        </div>
        </Form>
        <!-- 表單 end -->
      </li>
    </ul>
  </div>
    </div>
    </div>
    <!-- 送出按鈕 start-->
  <div class="w-100 mobile-fixed d-md-none bg-white" >
    <div class="d-flex justify-content-between row  ">
      <button @click="$refs.formBtn.click()"
      type="submit"
        :disabled='loadingStatue.sendOrder == 1 '
        class="btn btn-primary py-2 fz-2 fz-ssm-3  btn-right
        btn-primary-mobile d-flex justify-content-center align-items-center"
      >
        <span
          :class="{ 'd-none': loadingStatue.sendOrder !== 1 }"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span>確認付款</span>
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
      // 訂單資料
      orderData: '',
      // 讀取狀態
      loadingStatue: {
      },
      // 購物步驟
      cartStep: 3,
      // 付款方式
      payment_method: '',
      // 訂單ID
      orderId: this.$route.params.orderId,
      // 商品清單
      products: '',
      // 訊息藏值
      messageValue: '',
      user: {},
    };
  },
  methods: {
    // 取得訂單列表
    getOrderList() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            // console.log(res.data);
            this.orderData = res.data;
            this.products = res.data.order.products;
            this.messageValue = res.data.order.message;
            // 改變進度條
            this.chgCartStep();
            // 關掉讀取畫面
            this.isLoading = false;
          } else {
            // alert(res.data.message);
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );
            // 關掉讀取畫面
            this.isLoading = false;
          }
        })
        .catch((err) => {
          // console.log(err)
          // alert(err.data.message);
          this.alertMessage = err.data.message;
          this.alertStatus = false;
          setTimeout(
            () => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000,
          );
          // 關掉讀取畫面
          this.isLoading = false;
        });
    },
    // 改變進度條
    chgCartStep() {
      // 發起一個觸發(可帶參數)
      emitter.emit('chg-cart-step', this.cartStep);
    },
    // 付款
    payment() {
      console.log('付款');
      // 送出訂單
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            // alert(res.data.message);
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );
            this.loadingStatue.sendOrder = '';
            this.orderId = res.data.orderId;
            // 前往付款完成頁面
            this.$router.push('/finishpay');
          } else {
            // alert(res.data.message);
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );
            this.loadingStatue.sendOrder = '';
          }
        })
        .catch((err) => {
          // console.log(err);

          // alert(err.data.message);
          this.alertMessage = err.data.message;
          this.alertStatus = false;
          setTimeout(
            () => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000,
          );
          this.loadingStatue.coupon = '';
        });
    },
  },
  computed: {
    message() {
      return this.messageValue.split('//splitValue//')[0];
    },
    finally_total() {
      return this.messageValue.split('//splitValue//')[2];
    },
    shipping() {
      return this.messageValue.split('//splitValue//')[4];
    },
    couponPrice() {
      return this.messageValue.split('//splitValue//')[6];
    },
  },
  created() {
    // 改變進度條
    this.chgCartStep();
  },
  mounted() {
    // 取得訂單列表
    this.getOrderList();
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
