<template>
  <!-- 購物車列表 start-->
  <div class="container mt_navbar ">
    <div class="">
      <!-- Alert元件 start -->
      <Alert
        class="alert-position"
        v-if="alertMessage"
        :message="alertMessage"
        :status="alertStatus"
      />
      <!-- Alert元件 end -->

      <!-- 進度條元件 start -->
      <Progress :cartstep="cartStep" />
      <!-- 進度條元件 end -->
    <!-- 表單 start-->
    <Form ref="creatForm" v-slot="{ errors }" class="row g-3" @submit="sendOrder">
      <!-- 姓名 -->
      <div class="col-md-6">
        <label for="name" class="form-label">姓名:</label>
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
        ></Field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <!-- 電話 -->
      <div class="col-md-6">
        <label for="tel" class="form-label">電話:</label>
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
        ></Field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

      <!-- 信箱 -->
      <div class="col-md-6">
        <label for="email" class="form-label">Email:</label>
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
        ></Field>
        <error-message name="信箱" class="invalid-feedback"></error-message>
      </div>
      <!-- 付款方式 -->
      <div class="col-md-6">
        <label for="pay" class="form-label">付款方式:</label>
        <Field
          id="pay"
          ref="pay"
          name="付款方式"
          as="select"
          class="form-control"
                :class="{ 'is-invalid': errors['付款方式'] }"
                rules="required"
          v-model="userData.user.payment_method"
        >
                <option value="" disabled>點擊選取分類</option>
                <option>WebATM</option>
                <option>ATM</option>
                <option>Credit</option>
                <option>ApplePay</option>
                <option>GooglePay</option>
                </Field>
        <error-message name="付款方式" class="invalid-feedback"></error-message>
      </div>
      <!-- 地址 -->
      <div class="col-12">
        <label for="address" class="form-label">地址</label>
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
        ></Field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>
      <div class="col-12">
        <label for="text" class="form-label">留言:</label>
        <textarea
          type="text"
          id="text"
          placeholder="請輸入想說的話"
          class="form-control"
          v-model="userData.message"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">
        抱歉!錢錢，我真的需要這些酷東西
      </button>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        下個月在解決你們!
      </button>
    </Form>
  <!-- 表單 end -->
    </div>
    <table class="table mt-4 row gx-0 ">
      <thead class="co1-12">
        <tr class="row">
          <th class="col-3 d-none d-md-table-cell">商品圖片</th>
          <th class="col-4 col-md-2">商品名稱</th>
          <th class=" d-none d-md-table-cell col-md-2 " width="120">
            原價
          </th>
          <th class="col-2 col-md-1">
            售價
          </th>
          <th class="col-3 col-md-2 ">
            數量
          </th>
          <th class="col-3 col-md-2">
            刪除
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in cartList.carts" class="row" :key="'delCar_' + i">
          <td class="col-3  d-none d-md-table-cell d-flex align-items-center">
            <img
              class="cart-img object-fit"
              :src="item.product.imageUrl"
              :alt="item.product.title"
            />
          </td>
          <td class="col-4 col-md-2 d-flex align-items-center justify-content-center">
            {{ item.product.title }}
          </td>
          <td
            class="d-none d-md-flex col-md-2
            align-items-center justify-content-center"
          >
            {{ item.product.origin_price }}
          </td>
          <td class="col-2 col-md-1 d-flex align-items-center justify-content-center">
            {{ item.product.price }}
          </td>
          <td class="col-3 col-md-2  d-flex align-items-center justify-content-center">
            <input
              class="carNum"
              type="number"
              min="1"
              oninput="value=value.replace('-', '');if(value>999)value=999"
              v-model="cartList.carts[i].qty"
              @change="rediCartItemsNum(item)"
            />
          </td>
          <td class="col-3 col-md-2 d-flex align-items-center justify-content-center">
            <button
              type="button"
              :class="{ disabled: loadingStatue.delCart == item.id }"
              @click="delCartItem(item.id)"
              class="btn btn-sm btn-danger btn_white "
              data-action="remove"
            >
              <span
                :class="{ 'd-none': loadingStatue.delCart !== item.id }"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
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
    <div class="d-none d-md-flex justify-content-between mt-4 row ">
      <hr>
        <span class="col-7 fz-0 d-flex justify-content-around align-items-center">
        <p class="mb-0">商品總計:</p>
        <p class="fz-2 mb-0 text-danger fw-bold">NT$ {{  Math.floor(cartList.final_total)}}</p>
      </span>
      <button
        :class="{ 'd-none': cartList.carts == 0 }"
        class="btn btn-success fz-2 py-2 col-5 "
        @click.prevent="sendCartsList"
      >
        <span
          :class="{ 'd-none': loadingStatue.sendCart !== 1 }"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        送出訂單 ( {{ cartsNum }} )筆商品
      </button>
    </div>
  </div>
  <div class="w-100 mobile-fixed d-md-none ">
    <div class="d-flex justify-content-between row  ">
        <span class="col-7 fz-0 d-flex justify-content-around align-items-center
        border-top
        bg-white">
        <p class="mb-0">總計:</p>
        <p class="fz-3 mb-0 text-danger fw-bold">NT$ {{  Math.floor(cartList.final_total)}}</p>
      </span>
      <button
        :class="{ 'd-none': cartList.carts == 0 }"
        class="btn btn-success py-2 fz-2 fz-ssm-3 col-5 btn-right"
        @click.prevent="sendCartsList"
      >
        <span
          :class="{ 'd-none': loadingStatue.sendCart !== 1 }"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        送出訂單
      </button>
    </div></div>
  <!-- 購物車列表 end -->
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
// 進度條
import Progress from '@/components/Progress.vue';

export default {
  components: {
    // Alert元件
    Alert,
    // 讀取畫面
    Loading,
    // 進度條
    Progress,
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
      // 優惠碼
      couponCode: '',
      // 優惠%數
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
          payment_method: '',
        },
        message: '',
      },
    };
  },
  methods: {
    // 取得購物車列表
    getCartList() {
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
    // 刪除購物車商品
    delCartItem(id) {
      // console.log(id)
      this.loadingStatue.delCart = id;
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          // console.log(res);
          if (res.data.success) {
            // 刷新購物車
            this.getCartList();
            // 清空讀取狀態
            this.loadingStatue.delCart = '';
            // alert(res.data.message);
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );
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
        });
    },
    // 清空購物車商品
    clearCart() {
      // console.log(id)
      this.loadingStatue.clearCart = 1;
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          // console.log(res);
          if (res.data.success) {
            // 刷新購物車
            this.getCartList();
            // alert(res.data.message);

            // alert 元件顯示
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );
            this.loadingStatue.clearCart = '';
          } else {
            // alert(res.data.message);
          // alert 元件顯示
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );
          }
        })
        .catch((err) => {
          // console.log(err);
          // alert(err.data.message);

          // alert 元件顯示
          this.alertMessage = err.data.message;
          this.alertStatus = false;
          setTimeout(
            () => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000,
          );
        });
    },
    // 改動購物車商品數量
    rediCartItemsNum(item) {
      // console.log(item)
      const cartItem = {
        data: { product_id: item.product_id, qty: parseInt(item.qty, 10) },
      };
      // console.log(cart_item)
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, cartItem)
        .then((res) => {
          // console.log(res)
          if (res.data.success) {
            this.getCartList();
          } else {
            // alert(res.data.message);
            // alert 元件顯示
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );
          }
        })
        .catch((err) => {
          // console.log(err);
          // alert(err.data.message);
          // alert 元件顯示
          this.alertMessage = err.data.message;
          this.alertStatus = false;
          setTimeout(
            () => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000,
          );
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
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );
            // 關閉 按鈕loading
            this.loadingStatue.coupon = '';
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
            // 關閉 按鈕loading
            this.loadingStatue.coupon = '';
            // 清空優惠碼
            this.couponCode = '';
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
          // 關閉 按鈕loading
          this.loadingStatue.coupon = '';
          // 清空優惠碼
          this.couponCode = '';
        });
    },
    // 送出訂單
    sendOrder() {
      const data = {
        data: this.userData,
      };
      // 送出訂單
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, data)
        .then((res) => {
          // console.log(res)
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
            this.reGetCartList();
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
  },
  watch: {
    // 刷新購物車數量
    cartList() {
      this.cartsNum = this.cartList.carts.length;
    },
  },
  mounted() {
    this.isLoading = true;
    // 刷新購物車列表
    this.getCartList();
  },
};
</script>

<style lang="scss" scoped>

.carNum{
  width: 50px;
}
.cart-img{
  width: 100%;
  height: 100px;
}

</style>
