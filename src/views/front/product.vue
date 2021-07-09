<template>
  <div class="mt_navbar">
    <!-- 商品CARD start -->
    <div class="mb-3 banner py-4">
      <div class="container">
        <div class="card">
          <div class="row g-0">
            <!-- 熱賣商品輪播 -->
            <div class="col-md-6">
              <SwiperOneProductImg :product="product" />
            </div>
            <!-- <img class="object-fit col-md-4" style="height:360px;weight:100%;"
                :src="product.imageUrl" /> -->
            <div class="col-md-6 ">
              <div class="card-body ">
                <!-- 標題 -->
                <h3
                  class="card-title bg-primary text-white rounded py-2 fz-3
                  "
                >
                  {{ product.title }}
                </h3>
                <!-- 商品描述 -->
                <p
                  class="card-text text-start titleEffect--border-bottom-x
                  d-flex justify-content-center"
                >
                  <span>{{ product.description }}</span>
                </p>
                <br />
                <!-- 商品內容 -->
                <p class="card-text text-start fz-0 ">
                  <span v-html="product.content"></span>
                </p>
                <!-- 金額 -->
                <span class="row text-center">
                  <span class="text-decoration-line-through col-4">
                    原價
                    <em>{{ product.origin_price }}</em>
                    元
                  </span>
                  <span class="text-danger col-8 fs-2">
                    特價
                    <em>{{ product.price }}</em>
                    元
                  </span>
                </span>
                <!-- <div class="d-flex justify-content-around align-items-center">
                    <span class="position-relative pe-38" >
                    <input type="number" ref="inputNumber" class="product-input fz-3 text-center"
                      v-model="num"
                      oninput="if(value<0)value=0;if(value>999)value=999">
                      <span>
                    <button  class="btn  text-danger fz-1 btn_input--top"
                     @click=" num ++ ">+</button>
                    <button class="btn  text-danger fz-1 btn_input--bottom"
                    @click=" num -- ">-</button>
                      </span>
                  </span>
                  <button  class="btn btn-warning  fz-1  py-38"
                     >加入購物車</button>
                    <button class="btn btn-danger fz-1 py-38"
                    @click=" num -- ">立即購買</button>
                  </div> -->
                <div class="row justify-content-around">
                  <span class="position-relative col-4">
                    <!-- input -->
                    <input
                      type="number"
                      ref="inputNumber"
                      class="product-input fz-3 text-center"
                      v-model="num"
                      oninput="if(value<0)value=0;if(value>999)value=999"
                    />
                    <span>
                      <button class="btn  text-danger fz-1 btn_input--top" @click="num++">+</button>
                      <button class="btn  text-danger fz-1 btn_input--bottom" @click="num--">
                        -
                      </button>
                    </span>
                  </span>
                  <button class="btn btn-primary col-6 " @click="buyNow">立即購買</button>
                  <button
                    class=" d-flex justify-content-center align-items-center   col-5 mt-2
                  bg-white text-primary rounded border-primary border-1"
                  @click="addFavorite"
                  >
                    <span v-if="myFavorite.includes(id)"
                    class="material-icons text-danger">
                      favorite
                      </span>
                    <span v-else
                    class="material-icons  fz-1 ">
                      favorite_border
                    </span>
                    <span>加入收藏</span>
                  </button>
                  <button
                    class="d-flex justify-content-center align-items-center fz-1 col-5 mt-2
                  bg-white  text-primary rounded border-primary border-1"
                  @click="addCart"
                  >
                    <span class="material-icons  fz-1 "
                     :class="{ 'd-none': loadingStatue.addCart!== '' }">
                      shopping_cart
                    </span>
                    <span
                    :class="{ 'd-none': loadingStatue.addCart== '' }"
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span
                    :class="{ 'd-none': loadingStatue.addCart!== '' }"
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
      <ul class="mt-3">
        <li class="titleEffect">
          <span> 取件方式 </span>
        </li>
        <li class="mt-1 fz-0 text-primary">門市取件</li>
        <li class="mt-1 fz-0 text-primary">低溫宅配</li>
      </ul>
      <ul class="mt-3">
        <li class="titleEffect">
          <span> 付款方式 </span>
        </li>
        <li class="mt-1 fz-0 text-primary">門市付款</li>
        <li class="mt-1 fz-0 text-primary">線上刷卡</li>
        <li class="mt-1 fz-0 text-primary">轉帳或匯款</li>
      </ul>
      <ul class="mt-3">
        <li class="titleEffect">
          <span> 運送方式 </span>
        </li>
        <li class="mt-1 fz-0 text-primary">黑貓宅急便（低溫配送）</li>
        <li class="mt-1 fz-0 text-primary">白貓宅急便（低溫配送）</li>
      </ul>
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
        <li class="mt-1 fz-0 text-primary"> 恕不接受因訂錯商品或商品已拆封之退換貨</li>
        <li class="mt-1 fz-0 text-primary"> 如超過13:00下訂，則於隔日製作</li>
      </ul>
    </div>
  </div>
  <hr />
  <!-- 熱賣商品 -->
  <h3 class="titleEffect pt-5">
    <span>你可能會喜歡</span>
  </h3>
  <MaybeYouLike :category="product.category"  @view-one-product="viewOneProduct"/>
  <!-- Alert元件 start -->
  <Alert class="alert-position" v-if="alertMessage" :message="alertMessage" :status="alertStatus" />
  <!-- Alert元件 end -->
  <!-- 讀取畫面 start-->
  <Loading :isVueLoading="isLoading" />
  <!-- 讀取畫面 end -->
</template>

<script>
// Alert元件
import Alert from '@/components/Alert.vue';
// 讀取畫面
import Loading from '@/components/Loading.vue';
// 產品圖片輪播
import SwiperOneProductImg from '@/components/SwiperOneProductImg.vue';
// 可能會喜歡的商品
import MaybeYouLike from '@/components/MaybeYouLike.vue';

export default {
  components: {
    // Alert元件
    Alert,
    // 讀取畫面
    Loading,
    // 產品圖片輪播
    SwiperOneProductImg,
    // 可能會喜歡的商品
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
          // console.log(res);
          // 如果成功就執行
          if (res.data.success) {
            console.log(res.data);

            // 關掉讀取畫面
            this.isLoading = false;
            // alert 元件顯示
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );
            this.product = res.data.product;
          } else {
            // alert('驗證錯誤，請重新登入!');
            // console.log(res);

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
    // 單一商品詳細內容
    viewOneProduct(item) {
      // 跳轉頁面  好像無法本頁重複push 所以先切到產品頁再切回來
      this.$router.push('/products');
      setTimeout(
        () => {
          this.$router.push(`/product/${item.id}`);
        },
        100,
      );
      setTimeout(
        () => {
          this.$router.go(`/product/${item.id}`);
        },
        200,
      );
    },
    // 加入購物車
    addCart() {
      this.loadingStatue.addCart = this.id;
      // console.log(id)
      // console.log(qty)
      const product = {
        data: {
          product_id: this.id,
          qty: parseInt(this.num, 10),
        },
      };
      // console.log(product)
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, product)
        .then((res) => {
          // console.log(res);
          // 如果成功就執行
          if (res.data.success) {
            this.loadingStatue.addCart = '';
            // alert(`${res.data.message}!`);

            // alert 元件顯示
            this.alertMessage = `${res.data.message}!`;
            this.alertStatus = true;
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );

            // 刷新購物車
            // this.getCartList();
          } else {
            // console.log(res.data.message)
            // alert(`${res.data.message}!`);

            // alert 元件顯示
            this.alertMessage = `${res.data.message}!`;
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
    // 立即購買
    buyNow() {
      // 加入購物車
      this.addCart();
      setTimeout(() => {
        // 前往購物車頁面
        this.$router.push('/carts');
      }, 500);
    },
    // 加入最愛
    addFavorite() {
      console.log(this.myFavorite);
      // console.log(this.id);
      // 如果已經在最愛 就刪除最愛  如果沒有 就加到最愛
      if (this.myFavorite.includes(this.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(this.id), 1);
      } else {
        this.myFavorite.push(this.id);
      }
      console.log(this.myFavorite);

      // 儲存myFavorite資料到LocalStorage
      this.setLoCalStorage('myFavorite', this.myFavorite);
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
.banner{
  background: url('https://images.unsplash.com/photo-1534621735346-1de48541fa12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
}
.product-input{
  width: 76px;
  height: 76px;
    padding: 0;
    border-radius: 5px 0 0 5px;
    border-width: 1px;
  #editing-view-port{
    div{
      height: 80px;
    }
  }
}
  //input
  // 消除number預設樣式
  input[type=number] {
    -moz-appearance:textfield;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .btn_input--top{
      position: absolute;
      top: 0px;
      border-left: 0;
      border-radius: 0 5px 0 0;
      border-color: black;
    }
    .btn_input--bottom{
      position: absolute;
      top: 38px;
      border-left: 0;
      border-top: 0;
      border-radius: 0  0 5px 0;
      border-color: black;
      padding-top: .4375rem;
    }
    .pe-38{
      padding-right:34px;
    }
    .py-38{
      padding-top: 25px;
      padding-bottom: 25px;
    }
</style>
