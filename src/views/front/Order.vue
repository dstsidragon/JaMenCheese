<template>
  <div class="container mt-5">
    <div>
      <!-- Alert元件 start -->
      <Alert
        class="alert-position"
        v-if="alertMessage"
        :message="alertMessage"
        :status="alertStatus"
      />
      <!-- Alert元件 end -->
    </div>
    <div class="row">
      <div class="col-md-8">
        <!-- 表單 start-->
        <Form
          ref="creatForm"
          v-slot="{ errors }"
          class="row g-3"
          @submit="sendOrder"
        >
          <!-- 姓名 -->
          <div class="col-md-6">
            <label for="name" class="form-label d-flex">姓名:</label>
            <Field
              id="name"
              ref="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入 姓名"
              rules="required"
              v-model="userData.user.name"
            />
            <ErrorMessage name="姓名" class="invalid-feedback d-flex" />
          </div>

          <!-- 電話 -->
          <div class="col-md-6">
            <label for="tel" class="form-label d-flex">電話:</label>
            <Field
              id="tel"
              ref="tel"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入 手機號碼"
              :rules="isPhone"
              v-model="userData.user.tel"
            />
            <ErrorMessage name="電話" class="invalid-feedback d-flex" />
          </div>

          <!-- 信箱 -->
          <div class="col-md-6">
            <label for="email" class="form-label d-flex">信箱:</label>
            <Field
              id="email"
              ref="email"
              name="信箱"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['信箱'] }"
              placeholder="請輸入 信箱"
              :rules="isEmail"
              v-model="userData.user.email"
            />
            <ErrorMessage name="信箱" class="invalid-feedback d-flex" />
          </div>
          <!-- 本島/離島 -->
          <div class="col-md-6">
            <label for="island" class="form-label d-flex">本島/離島:</label>
            <Field
              id="island"
              ref="island"
              name="本島/離島"
              as="radio"
              class="form-control border-0"
              :class="{ 'is-invalid': errors['本島/離島'] }"
              rules="required"
              v-model="island"
            >
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  checked
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="本島"
                />
                <label class="form-check-label" for="inlineRadio1">本島</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="離島"
                />
                <label class="form-check-label" for="inlineRadio2">離島</label>
              </div>
            </Field>
            <ErrorMessage name="本島/離島" class="invalid-feedback d-flex" />
          </div>
          <!-- 地址 -->
          <div class="col-12">
            <label for="address" class="form-label d-flex">地址:</label>
            <Field
              id="address"
              ref="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入 地址"
              rules="required"
              v-model="userData.user.address"
            />
            <ErrorMessage name="地址" class="invalid-feedback d-flex" />
          </div>
          <div class="col-12">
            <label for="text" class="form-label d-flex">留言:</label>
            <textarea
              type="text"
              id="text"
              placeholder="請輸入想說的話"
              class="form-control"
              v-model="userData.message"
            />
          </div>
          <div
            class="
              d-none d-md-flex
              flex-wrap
              justify-content-center justify-content-sm-between
            "
          >
            <button
              type="button"
              class="
                btn btn-outline-secondary
                py-2
                fz-2 fz-ssm-3
                col-10 col-sm-5
                d-flex
                justify-content-center
                align-items-center
              "
              @click="$router.push('/carts')"
            >
              <span>返回購物車</span>
            </button>
            <button
              ref="formBtn"
              type="submit"
              :disabled="loadingStatue.sendOrder == 1"
              class="
                btn btn-primary
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
              <span>送出訂單</span>
            </button>
          </div>
          <!-- 送出按鈕 start-->
          <div class="w-100 mobile-fixed d-md-none bg-white">
            <div class="d-flex justify-content-between row">
              <span
                class="
                  col-7
                  fz-0
                  d-flex
                  justify-content-around
                  align-items-center
                  border-top
                "
              >
                <p class="mb-0">總計:</p>
                <p class="fz-2 mb-0 text-danger fw-bold">
                  {{
                    cartList.final_total == null
                      ? 'NT$ 0'
                      : `NT $ ${$toComma(
                          Math.floor(cartList.final_total) + shipping
                        )}`
                  }}
                </p>
              </span>
              <button
                type="submit"
                :disabled="loadingStatue.sendOrder == 1"
                class="
                  btn btn-primary
                  py-2
                  fz-2 fz-ssm-3
                  col-5
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
                <span>送出訂單</span>
              </button>
            </div>
          </div>
          <!-- 送出按鈕 end -->
        </Form>
        <!-- 表單 end -->
      </div>
      <div class="col-md-4">
        <!-- 購物車列表 start-->
        <ul class="p-3 border border-primary">
          <li>訂單明細</li>
          <li v-for="(item, i) in cartList.carts" :key="`Car_${i}`">
            <div
              class="card border-0 mb-3 text-dark bg-white"
              style="max-width: 540px"
            >
              <div class="row g-0">
                <div class="col-2">
                  <img
                    class="cart-img object-sm-fit"
                    style="width: 48px; height: 100%; object-fit: cover"
                    :src="item.product.imageUrl"
                    :alt="item.product.title"
                  />
                </div>
                <div class="col-10">
                  <h5 class="card-title fz-1 m-0 text-start p-2">
                    {{ item.product.title }}
                  </h5>
                  <span class="d-flex justify-content-between px-2">
                    <p class="card-text m-0">
                      <small class="text-muted">
                        {{
                          `NT$ ${$toComma(item.product.price)} / ${
                            item.product.unit
                          } `
                        }}
                      </small>
                    </p>
                    <p class="card-text">{{ `X ${item.qty}` }}</p>
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <hr />
          </li>
          <!-- 套用優惠碼 -->
          <li>
            <form class="input-group mb-3" @submit.prevent="useCoupon">
              <input
                class="form-control border-primary text-primary"
                type="text"
                placeholder="請輸入優惠碼"
                aria-label="Recipient's username"
                aria-describedby="button-coupon"
                required
                v-model="couponCode"
              />
              <button
                type="submit"
                class="btn btn-outline-primary btn-right fz-0"
                id="button-coupon"
              >
                套用優惠碼
              </button>
            </form>
          </li>
          <li>
            <span class="d-flex justify-content-between align-items-center">
              <p class="mb-0">小計:</p>
              <p class="mb-0">
                {{ `NT $ ${$toComma(Math.floor(cartList.total))}` }}
              </p>
            </span>
          </li>
          <!-- 運費 -->
          <li>
            <span class="d-flex justify-content-between align-items-center">
              <p class="mb-0">運費:</p>
              <p class="mb-0">{{ `NT $ ${$toComma(shipping)}` }}</p>
            </span>
          </li>
          <li>
            <span class="d-flex justify-content-between align-items-center">
              <p class="mb-0">優惠折抵:</p>
              <p class="mb-0">
                {{
                  `NT $ -${$toComma(
                    Math.floor(cartList.total) -
                      Math.floor(cartList.final_total)
                  )}`
                }}
              </p>
            </span>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <span
              class="fz-1 d-flex justify-content-between align-items-center"
            >
              <p class="mb-0">總計:</p>
              <p class="fz-2 mb-0 text-danger fw-bold">
                {{
                  cartList.final_total == null
                    ? 'NT$ 0'
                    : `NT $ ${$toComma(
                        Math.floor(cartList.final_total) + shipping
                      )}`
                }}
              </p>
            </span>
          </li>
        </ul>
      </div>
      <!-- 購物車列表 end -->
    </div>
  </div>
  <hr />

  <!-- 讀取畫面 start-->
  <Loading :isVueLoading="isLoading" />
  <!-- 讀取畫面 end -->
</template>
<script>
import Alert from '@/components/Alert.vue';
import Loading from '@/components/Loading.vue';
import emitter from '@/assets/js/emitter';

export default {
  components: {
    Alert,
    Loading,
  },
  data() {
    return {
      // alert元件參數
      alertMessage: '',
      alertStatus: false,
      // 讀取畫面
      isLoading: false,
      // 購物車資料
      cartList: {},
      // 購物車數量
      cartsNum: 0,
      // 讀取狀態
      loadingStatue: {
        // 送出訂單
        sendOrder: '',
        // 套用優惠碼
        coupon: '',
      },
      // 優惠碼
      couponCode: '',
      // 優惠金額
      couponPrice: 0,
      user: {},
      // 購物步驟
      cartStep: 2,
      userData: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      // 選擇島嶼
      island: '本島',
      // 運費
      shipping: 0,
      // 訂單ID
      orderId: '',
    };
  },
  methods: {
    // 取得購物車列表
    getCartList() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.cartList = res.data.data;
            this.chgCartStep();
            this.isLoading = false;
          } else {
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
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
          this.isLoading = false;
        });
    },
    // 套用優惠券
    useCoupon() {
      this.loadingStatue.coupon = 1;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http
        .post(url, {
          data: {
            code: this.couponCode === '' ? 'origin' : this.couponCode,
          },
        })
        .then((res) => {
          if (res.data.success) {
            this.couponPrice = res.data.data.final_total;
            this.couponCode = '';
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            this.getCartList();
            this.loadingStatue.coupon = '';
            this.isLoading = false;
          } else {
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            this.loadingStatue.coupon = '';
            this.couponCode = '';
          }
        })
        .catch((err) => {
          this.alertMessage = err.data.message;
          this.alertStatus = false;
          setTimeout(() => {
            this.alertMessage = '';
            this.alertStatus = false;
          }, 2000);
          this.loadingStatue.coupon = '';
          this.couponCode = '';
        });
    },
    // 送出訂單
    sendOrder() {
      this.loadingStatue.sendOrder = 1;
      const data = {
        data: {
          user: {
            name: this.userData.user.name,
            email: this.userData.user.email,
            tel: this.userData.user.tel,
            address: this.userData.user.address,
          },
          message: `${
            this.userData.message
          } //splitValue//finally_total//splitValue//${
            Math.floor(this.cartList.final_total) + this.shipping
          }//splitValue//shipping//splitValue//${
            this.shipping
          }//splitValue//couponPrice//splitValue//${
            Math.floor(this.cartList.total) - Math.floor(this.cartList.final_total)
          }`,
        },
        prd: {
          shipping: this.shipping,
        },
      };
      // 送出訂單
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`,
          data,
        )
        .then((res) => {
          if (res.data.success) {
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            this.loadingStatue.sendOrder = '';
            this.orderId = res.data.orderId;
            // 發起一個觸發(刷新購物車)
            emitter.emit('refresh-carts');
            this.$router.push(`/payment/${this.orderId}`);
          } else {
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            this.loadingStatue.sendOrder = '';
          }
        })
        .catch((err) => {
          this.alertMessage = err.data.message;
          this.alertStatus = false;
          setTimeout(() => {
            this.alertMessage = '';
            this.alertStatus = false;
          }, 2000);
          this.loadingStatue.coupon = '';
        });
    },
    // 驗證號碼格式
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要輸入正確的手機號碼';
    },
    // 驗證信箱格式
    isEmail(value) {
      const mail = /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return mail.test(value) ? true : '需要輸入正確的信箱';
    },
    // 計算運費
    calculateshipping() {
      if (this.island === '本島') {
        if (Math.floor(this.cartList.total) < 2500) {
          this.shipping = 180;
        } else if (
          Math.floor(this.cartList.total) >= 2500 && Math.floor(this.cartList.total) < 3500
        ) {
          this.shipping = 150;
        } else {
          this.shipping = 0;
        }
      } else if (this.island === '離島') {
        if (Math.floor(this.cartList.total) < 2500) {
          this.shipping = 280;
        } else if (
          Math.floor(this.cartList.total) < 3500 && Math.floor(this.cartList.total) >= 2500
        ) {
          this.shipping = 250;
        } else {
          this.shipping = 0;
        }
      } else {
        this.shipping = 123;
      }
      this.isLoading = false;
    },
    // 改變進度條
    chgCartStep() {
      // 發起一個觸發(可帶參數)
      emitter.emit('chg-cart-step', this.cartStep);
    },
  },
  watch: {
    // 刷新購物車數量
    island() {
      this.calculateshipping();
    },
  },
  created() {
    this.chgCartStep();
    this.getCartList();
  },
  mounted() {
    // 刷新運費
    setTimeout(() => {
      this.calculateshipping();
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.carNum {
  width: 50px;
}
.cart-img {
  width: 100%;
  height: 100px;
}
.btn-primary-mobile:hover {
  border-color: #fff;
  background-color: #7f5625;
  color: #fff;
}
</style>
