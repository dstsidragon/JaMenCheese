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

    <!-- 購物車列表 start-->
    <table class="table mt-4 row gx-0">
      <thead class="co1-12">
        <tr class="row">
          <th class="col-3 d-none d-md-table-cell">商品圖片</th>
          <th class="col-4 col-md-2">商品名稱</th>
          <th class="d-none d-md-table-cell col-md-2" width="120">原價</th>
          <th class="col-2 col-md-1">售價</th>
          <th class="col-3 col-md-2">數量</th>
          <th class="col-3 col-md-2">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in cartList.carts"
          class="row"
          :key="'delCar_' + i"
        >
          <td class="col-3 d-none d-md-table-cell d-flex align-items-center">
            <img
              class="cart-img object-fit"
              :src="item.product.imageUrl"
              :alt="item.product.title"
            />
          </td>
          <td
            class="
              col-4 col-md-2
              d-flex
              align-items-center
              justify-content-center
            "
          >
            {{ item.product.title }}
          </td>
          <td
            class="
              d-none d-md-flex
              col-md-2
              align-items-center
              justify-content-center
            "
          >
            {{ $toComma(item.product.origin_price) }}
          </td>
          <td
            class="
              col-2 col-md-1
              d-flex
              align-items-center
              justify-content-center
            "
          >
            {{ $toComma(item.product.price) }}
          </td>
          <td
            class="
              col-3 col-md-2
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <button
              type="button"
              class="btn text-danger px-1 fz-2"
              @click="rediCartItemsNum(item, -1)"
            >
              -
            </button>
            <input
              class="carNum"
              type="number"
              min="1"
              oninput="value=value.replace('-', '');if(value>999)value=999"
              v-model="item.qty"
              @change="rediCartItemsNum(item)"
            />
            <button
              type="button"
              class="btn text-danger px-1 fz-2"
              @click="rediCartItemsNum(item, 1)"
            >
              +
            </button>
          </td>
          <td
            class="
              col-3 col-md-2
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <button
              type="button"
              :class="{ disabled: loadingStatue.delCart == item.id }"
              @click="delCartItem(item.id)"
              class="btn btn-sm btn-danger btn_white"
              data-action="remove"
            >
              <span
                :class="{ 'd-none': loadingStatue.delCart !== item.id }"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart-dash"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                <path
                  d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5
                  0 0 0 4 12h1a2 2 0 1 0 0 4 2 2
                  0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0
                  .491-.408l1.5-8A.5.5 0 0 0 14.5
                  3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102
                  4h10.796l-1.313 7h-8.17zM6 14a1 1 0
                  1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="d-flex justify-content-end mt-4"
      v-if="cartList.carts?.length > 0"
    >
      <button
        class="btn btn-outline-danger"
        type="button"
        @click.prevent="clearCart"
      >
        <span
          :class="{ 'd-none': loadingStatue.clearCart !== 1 }"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
        清空購物車
      </button>
    </div>
    <div
      class="d-none d-md-flex justify-content-between mt-4 row"
      v-if="cartList.carts?.length > 0"
    >
      <hr />
      <span class="col-7 fz-0 d-flex justify-content-around align-items-center">
        <p class="mb-0">商品總計:</p>
        <p class="fz-2 mb-0 text-danger fw-bold">
          {{ `NT$ ${$toComma(Math.floor(cartList.total))}` }}
        </p>
      </span>
      <button
        type="button"
        class="btn btn-primary fz-2 py-2 col-5"
        @click.prevent="sendCartsList"
      >
        <span
          :class="{ 'd-none': loadingStatue.sendCart !== 1 }"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
        {{ `送出訂單( ${cartsNum} )筆商品` }}
      </button>
    </div>
  </div>
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
          {{ `NT$ ${$toComma(Math.floor(cartList.total))}` }}
        </p>
      </span>
      <button
        type="button"
        v-if="cartList.carts?.length > 0"
        :disabled="loadingStatue.sendCart == 1"
        class="
          btn btn-primary
          py-2
          fz-2 fz-ssm-3
          col-5
          btn-right btn-primary-mobile
        "
        @click.prevent="sendCartsList"
      >
        <span
          :class="{ 'd-none': loadingStatue.sendCart !== 1 }"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
        送出訂單
      </button>
      <button
        v-if="cartList.carts?.length === 0"
        type="button"
        class="btn btn-primary py-2 fz-2 fz-ssm-3 col-5 btn-right"
        @click="$router.push('/products')"
      >
        前往購物
      </button>
    </div>
  </div>
  <!-- 購物車列表 end -->

  <!-- 購物車沒商品時，呈現此區塊  star-->
  <div v-if="cartList.carts?.length === 0">
    <span class="material-icons fz-4"> production_quantity_limits </span>

    <p class="fz-3">購物車目前沒商品喔!</p>
    <button
      type="button"
      class="btn btn-primary fz-3"
      @click="$router.push('/products')"
    >
      前往SHOPPING!
    </button>
  </div>
  <!-- 購物車沒商品時，呈現此區塊  end-->
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
      // 購物車資料
      cartList: {},
      // 購物車數量
      cartsNum: 0,
      // 讀取狀態
      loadingStatue: {
        addCart: '',
        // 刪除購物車鈕
        delCart: '',
        // 清空購物車鈕
        clearCart: '',
        // 送出購物車鈕
        sendCart: '',
        // 套用優惠碼
        coupon: '',
      },
      // 購物步驟
      cartStep: 1,
      // 優惠碼
      couponCode: '',
      // 優惠%數
      couponPrice: 0,
    };
  },
  methods: {
    // 取得購物車列表
    getCartList() {
      // 發起一個觸發(刷新購物車)
      emitter.emit('refresh-carts');
      // 開啟讀取畫面
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.cartList = res.data.data;
            // 關掉讀取畫面
            this.isLoading = false;
          } else {
            // alert(res.data.message);
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            // 關掉讀取畫面
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
          // 關掉讀取畫面
          this.isLoading = false;
        });
    },
    // 刪除購物車商品
    delCartItem(id) {
      this.loadingStatue.delCart = id;
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`,
        )
        .then((res) => {
          if (res.data.success) {
            // 刷新購物車
            this.getCartList();
            // 清空讀取狀態
            this.loadingStatue.delCart = '';
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
          } else {
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
          }
        })
        .catch((err) => {
          this.alertMessage = err.data.message;
          this.alertStatus = false;
          setTimeout(() => {
            this.alertMessage = '';
            this.alertStatus = false;
          }, 2000);
        });
    },
    // 清空購物車商品
    clearCart() {
      this.loadingStatue.clearCart = 1;
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`,
        )
        .then((res) => {
          if (res.data.success) {
            // 刷新購物車
            this.getCartList();

            // alert 元件顯示
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            this.loadingStatue.clearCart = '';
          } else {
            // alert(res.data.message);
            // alert 元件顯示
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
          }
        })
        .catch((err) => {
          // alert 元件顯示
          this.alertMessage = err.data.message;
          this.alertStatus = false;
          setTimeout(() => {
            this.alertMessage = '';
            this.alertStatus = false;
          }, 2000);
        });
    },
    // 改動購物車商品數量
    rediCartItemsNum(item, i) {
      // 開啟讀取畫面
      this.isLoading = true;
      let num = 0;
      if (parseInt(item.qty + i, 10) < 1) {
        num = 1;
      } else if (parseInt(item.qty + i, 10) > 999) {
        num = 999;
      } else {
        num = parseInt(item.qty + i, 10);
      }
      const cartItem = {
        data: {
          product_id: item.product_id,
          qty: num,
        },
      };
      this.$http
        .put(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
          cartItem,
        )
        .then((res) => {
          if (res.data.success) {
            this.getCartList();
            // 關掉讀取畫面
            this.isLoading = false;
          } else {
            // alert(res.data.message);
            // alert 元件顯示
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            // 關掉讀取畫面
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
          // 關掉讀取畫面
          this.isLoading = false;
        });
    },
    // 送出購物車訂單
    sendCartsList() {
      this.loadingStatue.sendCart = 1;
      setTimeout(() => {
        this.loadingStatue.sendCart = '';
      }, 1000);
      // 前往購物車頁面
      this.$router.push('/order');
    },
    // 套用優惠券
    coupon() {
      this.loadingStatue.coupon = 1;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http
        .post(url, {
          data: {
            code: this.couponCode,
          },
        })
        .then((res) => {
          if (res.data.success) {
            this.couponPrice = res.data.data.final_total;
            // 清空優惠碼
            this.couponCode = '';
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            // 關閉 按鈕loading
            this.loadingStatue.coupon = '';
          } else {
            // alert(res.data.message);
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            // 關閉 按鈕loading
            this.loadingStatue.coupon = '';
            // 清空優惠碼
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
          // 關閉 按鈕loading
          this.loadingStatue.coupon = '';
          // 清空優惠碼
          this.couponCode = '';
        });
    },
    // 改變進度條
    chgCartStep() {
      // 發起一個觸發(可帶參數)
      emitter.emit('chg-cart-step', this.cartStep);
    },
  },
  watch: {
    // 刷新購物車數量
    cartList() {
      this.cartsNum = this.cartList.carts.length;
    },
  },
  created() {
    // 改變進度條
    this.chgCartStep();
  },
  mounted() {
    // 開啟讀取畫面
    this.isLoading = true;
    // 刷新購物車列表
    this.getCartList();
  },
};
</script>

<style lang="scss" scoped>
.carNum {
  width: 35px;
}
.cart-img {
  width: 100%;
  height: 200px;
}

.btn-primary-mobile:hover {
  border-color: #fff;
  background-color: #7f5625;
  color: #fff;
}
//input
// 消除number預設樣式
input[type='number'] {
  -moz-appearance: textfield;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
