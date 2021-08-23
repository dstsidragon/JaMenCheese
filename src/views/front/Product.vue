<template>
  <div class="mt-navbar">
    <!-- 商品CARD start -->
    <div class="mb-3 py-4">
      <div class="container">
        <div class="card">
          <div class="row g-0">
            <!-- 熱賣商品輪播 -->
            <div class="col-md-6">
              <SwiperOneProductImg :product="product" />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <!-- 標題 -->
                <h3
                  class="
                    card-title
                    bg-primary
                    text-white
                    rounded
                    py-2
                    fz-3
                    position-relative
                  "
                >
                  {{ product.title }}
                  <a
                    class="text-danger fac-position"
                    href="#"
                    @click.prevent="addFavorite"
                  >
                    <span
                      v-if="myFavorite.includes(id)"
                      class="material-icons text-danger hover-zoom-35"
                    >
                      favorite
                    </span>
                    <span v-else class="material-icons hover-zoom-35">
                      favorite_border
                    </span>
                  </a>
                </h3>
                <!-- 商品描述 -->
                <p
                  class="
                    card-text
                    text-center
                    titleEffect--border-bottom-x
                    d-flex
                    justify-content-center
                  "
                >
                  <span>{{ product.description }}</span>
                </p>
                <br />
                <!-- 商品內容 -->
                <p class="card-text text-start fz-0">
                  <span v-html="product.content" />
                </p>
                <!-- 金額 -->
                <span
                  v-if="product"
                  class="row text-center align-items-center mb-2"
                >
                  <span class="text-decoration-line-through col-5 text-start">
                    {{ `原價 ${$toComma(product.origin_price)} 元` }}
                  </span>
                  <span class="text-danger col-7 fs-2 text-end">
                    {{ `特價 ${$toComma(product.price)} 元` }}
                  </span>
                </span>
                <div class="d-flex justify-content-between flex-wrap">
                  <span
                    class="position-relative d-flex justify-content-start col-6"
                  >
                    <!-- input -->
                    <input
                      type="number"
                      ref="inputNumber"
                      class="product-input fz-3 text-center"
                      v-model="num"
                      oninput="if(value<0)value=0;if(value>999)value=999"
                    />
                    <span>
                      <button
                        type="button"
                        class="btn text-dark fz-1 btn-input--top w-1"
                        @click="num++"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn text-dark fz-1 btn-input--bottom w-1"
                        @click="num--"
                      >
                        -
                      </button>
                    </span>
                  </span>
                  <button
                    class="btn btn-primary fz-smm-3 col-6"
                    type="button"
                    @click="buyNow"
                  >
                    立即購買
                  </button>
                  <button
                    type="button"
                    class="
                      d-flex
                      justify-content-center
                      align-items-center
                      fz-smm-3
                      col-12
                      mt-3
                      btn
                      py-3
                      btn-outline-primary
                    "
                    @click="addCart"
                  >
                    <span
                      class="material-icons fz-smm-3"
                      :class="{ 'd-none': loadingStatue.addCart !== '' }"
                    >
                      shopping_cart
                    </span>
                    <span
                      :class="{ 'd-none': loadingStatue.addCart == '' }"
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span
                      :class="{ 'd-none': loadingStatue.addCart !== '' }"
                      class="visually-hidden"
                    >
                      Loading...</span
                    >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品CARD end -->
    <div class="container">
      <h3 class="titleEffect--border-bottom-bold">
        <span>購物小叮嚀</span>
      </h3>
      <div class="row text-start">
        <ul class="mt-3 col-smm-4 d-flex flex-column align-items-center">
          <li class="titleEffect">
            <span> 取件方式 </span>
          </li>
          <li class="mt-1 fz-0 text-primary">門市取件</li>
          <li class="mt-1 fz-0 text-primary">低溫宅配</li>
        </ul>
        <ul class="mt-3 col-smm-4 d-flex flex-column align-items-center">
          <li class="titleEffect">
            <span> 付款方式 </span>
          </li>
          <li class="mt-1 fz-0 text-primary">門市付款</li>
          <li class="mt-1 fz-0 text-primary">線上刷卡</li>
          <li class="mt-1 fz-0 text-primary">轉帳或匯款</li>
        </ul>
        <ul class="mt-3 col-smm-4 d-flex flex-column align-items-center">
          <li class="titleEffect">
            <span> 運送方式 </span>
          </li>
          <li class="mt-1 fz-0 text-primary">黑貓宅急便（低溫配送）</li>
          <li class="mt-1 fz-0 text-primary">白貓宅急便（低溫配送）</li>
        </ul>
        <div class="d-flex flex-column align-items-center">
          <ul class="mt-3">
            <li class="titleEffect">
              <span> 退換貨方式 </span>
            </li>
            <li class="mt-1 fz-0 text-primary">
               門市現場訂購商品者不適用於7天鑑賞期，不接受退換貨機制
            </li>
            <li class="mt-1 fz-0 text-primary">
               宅配運送過程如若碰撞造成損毀請當日撥打電話連繫客服，逾期恕不受理
            </li>
            <li class="mt-1 fz-0 text-primary">
               如若遇到不可抗力之因素造成的延遲到貨，恕無法接受退貨
            </li>
            <li class="mt-1 fz-0 text-primary">
               恕不接受因訂錯商品或商品已拆封之退換貨
            </li>
            <li class="mt-1 fz-0 text-primary">
               如超過13:00下訂，則於隔日製作
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <!-- 熱賣商品 -->
  <h3 class="titleEffect pt-5">
    <span>你可能會喜歡</span>
  </h3>
  <MaybeYouLike
    :category="product.category"
    @view-one-product="viewOneProduct"
  />
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
import Alert from '@/components/Alert.vue';
import Loading from '@/components/Loading.vue';
import SwiperOneProductImg from '@/components/SwiperOneProductImg.vue';
import MaybeYouLike from '@/components/MaybeYouLike.vue';
import emitter from '@/assets/js/emitter';

export default {
  components: {
    Alert,
    Loading,
    SwiperOneProductImg,
    MaybeYouLike,
  },
  data() {
    return {
      id: this.$route.params.id,
      product: '',
      // alert元件參數
      alertMessage: '',
      alertStatus: false,
      // 讀取畫面
      isLoading: false,
      num: 1,
      // 讀取狀態
      loadingStatue: {
        // 加到購物車鈕
        addCart: '',
      },
      // 我的收藏
      myFavorite: this.getLoCalStorage('myFavorite') || [],
    };
  },
  methods: {
    // 取得商品
    getProductData() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            this.product = res.data.product;
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
    // 單一商品詳細內容
    viewOneProduct(item) {
      this.id = item.id;
      this.$router.push(`/product/${item.id}`);
      this.getProductData(item.id);
    },
    // 加入購物車
    addCart() {
      this.loadingStatue.addCart = this.id;
      const product = {
        data: {
          product_id: this.id,
          qty: Number(this.num),
        },
      };
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`,
          product,
        )
        .then((res) => {
          if (res.data.success) {
            this.loadingStatue.addCart = '';

            this.alertMessage = `${res.data.message}!`;
            this.alertStatus = true;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            // 發起一個觸發(刷新購物車)
            emitter.emit('refresh-carts');
          } else {
            // alert 元件顯示
            this.alertMessage = `${res.data.message}!`;
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
    // 立即購買
    buyNow() {
      this.addCart();
      setTimeout(() => {
        this.$router.push('/carts');
      }, 1000);
    },
    // 加入最愛
    addFavorite() {
      if (this.myFavorite.includes(this.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(this.id), 1);
      } else {
        this.myFavorite.push(this.id);
      }
      this.setLoCalStorage('myFavorite', this.myFavorite);
      // 發起一個觸發(刷新最愛)
      emitter.emit('refresh-favorites');
    },
    // 將資料存到loCalStorage
    setLoCalStorage(name, item) {
      localStorage.setItem(name, JSON.stringify(item));
    },
    // 取得loCalStorage
    getLoCalStorage(name) {
      return JSON.parse(localStorage.getItem(name));
    },
  },
  watch: {
    num() {
      if (this.num < 0) {
        this.num = 0;
      } else if (this.num > 999) {
        this.num = 999;
      }
    },
  },
  mounted() {
    this.isLoading = true;
    // 取得產品資訊
    this.getProductData();
  },
};
</script>

<style lang="scss" scoped>
.product-input {
  width: 76px;
  height: 76px;
  padding: 0;
  border-radius: 5px 0 0 5px;
  border-width: 1px;
  #editing-view-port {
    div {
      height: 80px;
    }
  }
}
//input
// 消除number預設樣式
input[type='number'] {
  appearance: textfield;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}

.btn-input--top {
  position: absolute;
  top: 0px;
  border-left: 0;
  border-radius: 0 5px 0 0;
  border-color: black;
}
.btn-input--bottom {
  position: absolute;
  top: 38px;
  border-left: 0;
  border-top: 0;
  border-radius: 0 0 5px 0;
  border-color: black;
  padding-top: 0.4375rem;
}
.pe-38 {
  padding-right: 34px;
}
.py-38 {
  padding-top: 25px;
  padding-bottom: 25px;
}
.fac-position {
  position: absolute;
  top: 10px;
  right: 20px;
}
.w-1{
  width: 40px!important;
}
</style>
