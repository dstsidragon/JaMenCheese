<template>
  <!-- 產品列表 start-->
  <div class=" mt_navbar ">
      <div class=" prd-banner d-flex justify-content-center align-items-center">
        <div class="text-white  bg-img-transparent rounded p-2">
          <h2 class="text-center fz-4">精選商品</h2>
          <p>不能決定？瀏覽我們的完整菜單，並嘗試...一切！</p>
        </div>
      </div>
    <div class="container mt-3">
      <div class="row ">
        <div class="d-none d-lg-flex list-group   col-lg-3 fz-2 ">
        <a href="#" class="list-group-item list-group-item-action active "
        aria-current="true" data-bs-toggle="tab"  @click.prevent="nowCategory = ''">
        全部商品
        </a>
        <a href="#" class="list-group-item list-group-item-action "
        v-for="(item, i) in productCategory" :key="'category'+i" aria-current="false"
        @click.prevent="nowCategory = item" data-bs-toggle="tab">
        {{item}}
        </a>
        </div>
        <select class="form-select form-select-lg d-lg-none mb-3 " ref="select"
        aria-label=".form-select-lg example"
         @change.prevent="nowCategory =$refs.select.value ">
          <option selected value="">
            全部商品</option>
          <option :value="item" v-for="(item, i) in productCategory"
          :key="'category'+i" >
        {{item}}</option>
        </select>
        <!-- 商品內容 -->
      <div class="col-lg-9">
         <div class="row   row-cols-1 row-cols-smm-2 row-cols-md-3 g-4">
          <div class="col cursor-pointer" v-for="(item, i) in filterProductCategory" :key="'prd'+i">
            <div class="card h-100 ">
              <div class="overflow-hidden " @click.prevent="viewOneProduct(item)">
                <img :src="item.imageUrl"  class="card-img-top prd-card-img object-fit img--scale"
               alt="item.title">
              </div>
              <div  class="favorite ">
               <a  class="text-danger">
                 <span class="material-icons">
                  favorite_border
                  </span>
                  <!-- <span class="material-icons">
                  favorite
                  </span> -->
                 </a></div>
              <div class="card-body p-0 " @click.prevent="viewOneProduct(item)">
                <h5 class="card-title bg-primary text-white p-1">{{item.title}}</h5>
                <span class="d-flex justify-content-around align-items-center">
                <p class="card-text border-right"><del>${{item.origin_price}}元</del></p>
                <p class="card-text text-danger fz-2">${{item.price}}元</p>
                </span>
              </div>
              <div class="d-flex">
                <a
                href="#"
                class="product-link btn btn-success rounded-0 "
                  :class="{ disabled: item.id === loadingStatue.viewContentStatus }"
                  :id="'content_' + item.id"
                  data-id="item.id"
                  @click.prevent="viewOneProduct(item)"
                >
                <!-- class="btn  btn-success btn_white " -->
                  <span
                    :class="{ 'd-none': item.id !== loadingStatue.viewContentStatus }"
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span
                    :class="{ 'd-none': item.id !== loadingStatue.viewContentStatus }"
                    class="visually-hidden"
                    >Loading...</span
                  >
                  查看內容
                </a>
                <a
                href="#"
                class="product-link btn btn-danger rounded-0"
                  :class="{ disabled: item.id === loadingStatue.addCart }"
                  :id="'car_' + item.id"
                  @click.prevent="addCart(item.id, item.qty)"
                  data-action="remove"
                  data-id="item.id"
                >
                  <!-- class="btn  btn-info btn_white " -->
                  <span
                    :class="{ 'd-none': item.id !== loadingStatue.addCart }"
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span
                    :class="{ 'd-none': item.id !== loadingStatue.addCart }"
                    class="visually-hidden"
                  >
                    Loading...</span
                  >
                  加入購物車
                </a>
              </div>
            </div>
          </div>
        </div>
        <p>此頁面有{{ filterProductCategory.length }}項產品</p>
         <!-- 分頁 start -->
        <div class="d-flex justify-content-center">
          <Pagination :pagination="pagination" @get-product="getProduct"></Pagination>
        </div>
        <!-- 分頁 end -->

      </div>

      </div>
      <hr>
      <!-- 熱賣商品 -->
        <h3 class="titleEffect pt-5"><span>熱賣商品</span></h3>
        <HotProductSwiper :products="productData" @view-one-product="viewOneProduct"/>
    </div>

    <!-- Alert元件 start -->
    <Alert class="alert-position"  v-if="alertMessage" :message="alertMessage"
    :status="alertStatus" />
    <!-- Alert元件 end -->
  </div>
  <!-- 產品列表 end -->

  <!-- 讀取畫面 start-->
  <Loading :isVueLoading='isLoading' />
  <!-- 讀取畫面 end -->
</template>

<script>
// Alert元件
import Alert from '@/components/Alert.vue';
// 分頁
import Pagination from '@/components/Pagination.vue';
// 讀取畫面
import Loading from '@/components/Loading.vue';
// 熱賣商品
import HotProductSwiper from '@/components/HotProductSwiper.vue';

export default {
  components: {
    // Alert元件
    Alert,
    // 分頁
    Pagination,
    // 讀取畫面
    Loading,
    // 熱賣商品
    HotProductSwiper,
  },
  data() {
    return {
      // alert元件參數
      alertMessage: '',
      alertStatus: false,
      // 讀取畫面
      isLoading: false,
      // 產品資料
      productData: [],
      // 分頁
      pagination: [],
      // 登入/登出鈕
      loginStatus: false,
      // 資料筆數
      dataLength: 0,
      // 單一產品資料
      product: {},
      // 讀取狀態
      loadingStatue: {
        // 查看內容鈕
        viewContentStatus: '',
        // 加到購物車鈕
        addCart: '',
      },
      // 產品分類
      productCategory: [],
      // 當前點擊的商品分類
      nowCategory: '',
    };
  },
  methods: {
    // 取得商品列表
    getProduct(page = 1) {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          // console.log(res);
          // 如果成功就執行
          if (res.data.success) {
            this.productData = res.data.products;
            this.pagination = res.data.pagination;
            // 取得商品分類
            const category = new Set([]);
            res.data.products.forEach((item) => {
              category.add(item.category);
            });
            // console.log(category);
            this.productCategory = [...category];
            // 將資料筆數更新
            this.dataLength = this.productData.length;
            // 關掉讀取畫面
            this.isLoading = false;
          } else {
            // alert('驗證錯誤，請重新登入!');

            // alert 元件顯示
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );

            // 跳轉頁面
            this.$router.push('/Login');
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
          // 關掉讀取畫面
          this.isLoading = false;
        });
    },
    // 加入購物車
    addCart(id, qty = 1) {
      this.loadingStatue.addCart = id;
      // console.log(id)
      // console.log(qty)
      const product = {
        data: {
          product_id: id,
          qty: parseInt(qty, 10),
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
              }, 1000,
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
              }, 1000,
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
            }, 1000,
          );
        });
    },
    // 大量加進購物車
    addItemsToCart(item) {
    //   console.log(item);
      const product = {
        data: {
          product_id: item.id,
          qty: item.qty,
        },
      };
      // console.log(product);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, product)
        .then((res) => {
          // console.log(res);
          // 如果成功就執行
          if (res.data.success) {
            // alert(`${res.data.message}!`);
            // console.log(res);

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
          // console.dir(err);
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
      // 跳轉頁面
      this.$router.push(`/product/${item.id}`);
    },
  },
  computed: {
    filterProductCategory() {
      return this.productData.filter((item) => item.category.match(this.nowCategory));
    },
  },
  created() {
  },
  mounted() {
    this.isLoading = true;
    // 取得商品資料
    this.getProduct();
    // console.log(this.$route);
  },
};
</script>

<style lang="scss" scoped>

.prd-banner{
  height: 340px;
  background: center center no-repeat
    url('https://i.imgur.com/T5rE13B.jpg');
  background-size: cover;
  background-attachment: fixed;
}
@media(max-width:776px){
  .prd-banner{
  height: 170px;
  background: center center no-repeat
    url('https://i.imgur.com/T5rE13B.jpg');
  background-size: cover;
  // background-attachment: fixed;
}
}
.favorite{
  position: absolute;
  top: 5px;
  right: 5px;
}
.product-link {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: .5rem 0;
}
.list-group {
    padding-left: 1.5rem*.5 !important;
}
.prd-card-img{
  height:200px;
}
@media(max-width: 512px){
   .prd-card-img{
    height: 300px;
  }
}
</style>
