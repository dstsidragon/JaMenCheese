<template>
  <!-- 產品列表 start-->
  <div class="mt-navbar">
    <header class="prd-banner d-flex justify-content-center align-items-center">
      <div class="text-white bg-img-transparent rounded p-2">
        <h2 class="text-center fz-2 fz-md-4">精選商品</h2>
        <p class="fz-0 fz-md-1">
          不能決定？瀏覽我們的完整菜單，並嘗試...一切！
        </p>
      </div>
    </header>
    <div class="container mt-3">
      <div class="row">
        <div class="d-none d-lg-flex list-group col-lg-3 fz-2">
          <a
            href="#"
            class="list-group-item list-group-item-action active"
            aria-current="true"
            data-bs-toggle="tab"
            @click.prevent="nowCategory = ''"
          >
            全部商品
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action"
            v-for="(item, i) in productCategory"
            :key="`category_${i}`"
            aria-current="false"
            @click.prevent="nowCategory = item"
            data-bs-toggle="tab"
          >
            {{ item }}
          </a>
        </div>
        <select
          class="form-select form-select-lg d-lg-none mb-3"
          ref="select"
          aria-label=".form-select-lg example"
          @change.prevent="nowCategory = $refs.select.value"
        >
          <option selected >全部商品</option>
          <option
            :value="item"
            v-for="(item, i) in productCategory"
            :key="`category_${i}`"
          >
            {{ item }}
          </option>
        </select>
        <!-- 商品內容 -->
        <div class="col-lg-9" v-if="nowCategory === ''">
          <div class="row row-cols-1 row-cols-smm-2 row-cols-md-3 g-4">
            <div
              class="col cursor-pointer"
              v-for="(item, i) in productData"
              :key="`prd_${i}`"
            >
              <div class="card h-100">
                <div
                  class="overflow-hidden"
                  @click.prevent="viewOneProduct(item)"
                >
                  <img
                    :src="item.imageUrl"
                    class="card-img-top prd-card-img object-fit img--scale"
                    :alt="item.title"
                  />
                </div>
                <div class="favorite">
                  <a
                    class="text-danger"
                    href="#"
                    @click.prevent="addFavorite(item.id)"
                  >
                    <span
                      v-if="myFavorite.includes(item.id)"
                      class="material-icons text-danger hover-zoom-35"
                    >
                      favorite
                    </span>
                    <span v-else class="material-icons hover-zoom-35">
                      favorite_border
                    </span>
                  </a>
                </div>
                <div
                  v-if="item"
                  class="card-body p-0"
                  @click.prevent="viewOneProduct(item)"
                >
                  <h5 class="card-title bg-blueGray text-primary fw-bold p-1">
                    {{ item.title }}
                  </h5>
                  <span
                    class="d-flex justify-content-around align-items-center"
                  >
                    <p class="card-text border-right mb-0">
                      <del>{{ `$ ${$toComma(item.origin_price)} 元` }}</del>
                    </p>
                    <p class="card-text text-danger fz-2 mb-0">
                      {{ `$ ${$toComma(item.price)} 元` }}
                    </p>
                  </span>
                </div>
                <div class="d-flex">
                  <a
                    href="#"
                    class="
                      product-link
                      btn btn-outline-primary
                      rounded-0
                    "
                    :class="{
                      disabled: item.id === loadingStatue.viewContentStatus,
                    }"
                    :id="'content_' + item.id"
                    :data-id="item.id"
                    @click.prevent="viewOneProduct(item)"
                  >
                    <span
                      :class="{
                        'd-none': item.id !== loadingStatue.viewContentStatus,
                      }"
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span
                      :class="{
                        'd-none': item.id !== loadingStatue.viewContentStatus,
                      }"
                      class="visually-hidden"
                      >Loading...</span
                    >
                    查看內容
                  </a>
                  <a
                    href="#"
                    class="product-link btn btn-primary rounded-0"
                    :class="{ disabled: item.id === loadingStatue.addCart }"
                    :id="'car_' + item.id"
                    @click.prevent="addCart(item.id, item.qty)"
                    data-action="remove"
                    :data-id="item.id"
                  >
                    <span
                      :class="{ 'd-none': item.id !== loadingStatue.addCart }"
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    />
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
          <p>{{ `全部共有 ${filterProductCategory.length} 項產品` }}</p>
          <!-- 分頁 start -->
          <div class="d-flex justify-content-center">
            <Pagination :pagination="pagination" @get-product="getProduct" />
          </div>
          <!-- 分頁 end -->
        </div>
        <div class="col-lg-9" v-else>
          <div class="row row-cols-1 row-cols-smm-2 row-cols-md-3 g-4">
            <div
              class="col cursor-pointer"
              v-for="(item, i) in filterProductCategory"
              :key="`prd_${i}`"
            >
              <div class="card h-100">
                <div
                  class="overflow-hidden"
                  @click.prevent="viewOneProduct(item)"
                >
                  <img
                    :src="item.imageUrl"
                    class="card-img-top prd-card-img object-fit img--scale"
                    :alt="item.title"
                  />
                </div>
                <div class="favorite">
                  <a
                    class="text-danger"
                    href="#"
                    @click.prevent="addFavorite(item.id)"
                  >
                    <span
                      v-if="myFavorite.includes(item.id)"
                      class="material-icons text-danger hover-zoom-35"
                    >
                      favorite
                    </span>
                    <span v-else class="material-icons hover-zoom-35">
                      favorite_border
                    </span>
                  </a>
                </div>
                <div
                  v-if="item"
                  class="card-body p-0"
                  @click.prevent="viewOneProduct(item)"
                >
                  <h5 class="card-title bg-blueGray text-primary fw-bold p-1">
                    {{ item.title }}
                  </h5>
                  <span
                    class="d-flex justify-content-around align-items-center"
                  >
                    <p class="card-text border-right">
                      <del>{{ `$ ${$toComma(item.origin_price)} 元` }}</del>
                    </p>
                    <p class="card-text text-danger fz-2">
                      {{ `$ ${$toComma(item.price)} 元` }}
                    </p>
                  </span>
                </div>
                <div class="d-flex">
                  <a
                    href="#"
                    class="
                      product-link
                      btn btn-outline-primary-lighten
                      rounded-0
                    "
                    :class="{
                      disabled: item.id === loadingStatue.viewContentStatus,
                    }"
                    :id="'content_' + item.id"
                    :data-id="item.id"
                    @click.prevent="viewOneProduct(item)"
                  >
                    <span
                      :class="{
                        'd-none': item.id !== loadingStatue.viewContentStatus,
                      }"
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span
                      :class="{
                        'd-none': item.id !== loadingStatue.viewContentStatus,
                      }"
                      class="visually-hidden"
                      >Loading...</span
                    >
                    查看內容
                  </a>
                  <a
                    href="#"
                    class="product-link btn btn-primary rounded-0"
                    :class="{ disabled: item.id === loadingStatue.addCart }"
                    :id="'car_' + item.id"
                    @click.prevent="addCart(item.id, item.qty)"
                    data-action="remove"
                    :data-id="item.id"
                  >
                    <span
                      :class="{ 'd-none': item.id !== loadingStatue.addCart }"
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    />
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
          <p>{{ `此分類有 ${filterProductCategory.length} 項產品` }}</p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Alert元件 start -->
    <Alert
      class="alert-position"
      v-if="alertMessage"
      :message="alertMessage"
      :status="alertStatus"
    />
    <!-- Alert元件 end -->
  </div>
  <!-- 產品列表 end -->

  <!-- 讀取畫面 start-->
  <Loading :isVueLoading="isLoading" />
  <!-- 讀取畫面 end -->
</template>

<script>
import Alert from '@/components/Alert.vue';
import Pagination from '@/components/Pagination.vue';
import Loading from '@/components/Loading.vue';
import emitter from '@/assets/js/emitter';
import 'bootstrap/js/dist/tab';

export default {
  components: {
    Alert,
    Pagination,
    Loading,
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
      // 全部產品資料
      allProductsData: [],
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
      // 我的收藏
      myFavorite: this.getLoCalStorage('myFavorite') || [],
    };
  },
  methods: {
    // 取得商品列表
    getProduct(page = 1) {
      this.getAllProducts();
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`,
        )
        .then((res) => {
          if (res.data.success) {
            this.productData = res.data.products;
            this.pagination = res.data.pagination;
            // 取得商品分類
            const category = new Set([]);
            res.data.products.forEach((item) => {
              category.add(item.category);
            });
            this.productCategory = [...category];
            this.dataLength = this.productData.length;
            this.isLoading = false;
          } else {
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);

            this.$router.push('/Login');
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
    // 取得全部商品列表
    getAllProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`,
        )
        .then((res) => {
          if (res.data.success) {
            this.allProductsData = res.data.products;
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
    // 加入購物車
    addCart(id, qty = 1) {
      this.loadingStatue.addCart = id;
      const product = {
        data: {
          product_id: id,
          qty: Number(qty),
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
            }, 1000);
            // 發起一個觸發(刷新購物車)
            emitter.emit('refresh-carts');
          } else {
            this.alertMessage = `${res.data.message}!`;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 1000);
          }
        })
        .catch((err) => {
          this.alertMessage = err.data.message;
          this.alertStatus = false;
          setTimeout(() => {
            this.alertMessage = '';
            this.alertStatus = false;
          }, 1000);
        });
    },
    // 大量加進購物車
    addItemsToCart(item) {
      const product = {
        data: {
          product_id: item.id,
          qty: item.qty,
        },
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, product)
        .then((res) => {
          if (res.data.success) {
            this.alertMessage = `${res.data.message}!`;
            this.alertStatus = true;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            // 發起一個觸發(刷新購物車)
            emitter.emit('refreshCarts');
          } else {
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
    // 單一商品詳細內容
    viewOneProduct(item) {
      this.$router.push(`/product/${item.id}`);
    },
    // 加入最愛
    addFavorite(id) {
      if (this.myFavorite.includes(id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(id), 1);
      } else {
        this.myFavorite.push(id);
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
  computed: {
    filterProductCategory() {
      return this.allProductsData.filter((item) => item.category.match(this.nowCategory));
    },
  },
  mounted() {
    this.isLoading = true;
    this.getProduct();
  },
};
</script>

<style lang="scss" scoped>
.prd-banner {
  height: 340px;
  background: center center no-repeat
    url('https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627379949432.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B%2Bq%2BvzNhAGumFKDQzNn7muw1Q8Y3rjPd3PGT7U2bjU78LffMeu5yEbwnb2dfRG5IJi1BQ8rPO1OymuxYjE7JpH%2FjgLdkKIFL8JQImVhbIhxUp9s%2FkGIrVfcVODAfr3%2BdxyTog3eWRQf050WJXR8MCNqaJJw%2B4Mv%2FaWBUI4kA8CF9kPoJyOSlpmHOZom6O9uz9%2BJuKRU6aVOZfXHx93MNHwgIqYaASAo0zk18GynlhiDfSvDCdID4neh5GGTAzIhixZhj1FpOhZXQ%2Bn9L6bprNSdrvWhO57k7AY1f9Aq%2BNLP0s7V6I9RE6GVHxeyVKRuTRHQjo0B5FLHNBv2hf6WB%2BA%3D%3D');
  background-size: cover;
  background-attachment: fixed;
}
@media (max-width: 768px) {
  .prd-banner {
    height: 170px;
    background: center center no-repeat
      url('https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627379982059.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=V322tazhWOJkaK1f%2FQ%2FjFHJ1i3Zh4kwPT6qjY3YD3vZdfDRBooDEb2Je5BzTyJnaq7kh1hKXiC%2FkW%2Fq8MVqWlK1pCakPFxduNoc9uElkH%2BKYsDmGHkka3boWWYHveZpNsVH47Gmisp3gYUtELvo59jXI2ml5Oxby%2BYIvkEyntDwCAzWikRvpJJW%2F%2BZxI28BApYpwImaOpWVi%2B99HU5%2FYG6HkXLxX0nFHL8xS0UTi4cNbgLB5yYNZSMQb4CJEGK6hO%2BotZOySRkVkTuj6RAVvu%2Fp2pKnq6nYXXZ9Ib2X3ZAd6pLWU2%2BBFzVXVgXn4vCVASXHzu1n9p00gv4CvgbUx%2FQ%3D%3D');
    background-size: cover;
  }
}
.favorite {
  position: absolute;
  top: 5px;
  right: 5px;
}
.product-link {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0.5rem 0;
}
.list-group {
  padding-left: 1.5rem * 0.5 !important;
}
.prd-card-img {
  height: 250px;
}
@media (max-width: 512px) {
  .prd-card-img {
    height: 300px;
  }
}
</style>
