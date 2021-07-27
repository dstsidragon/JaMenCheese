<template>
  <!-- 訂單列表 start-->
  <!-- 訂單列表沒訂單時，呈現此區塊  star-->
  <div v-if="orderPagination.total_pages === 0" class="container mt-5">
    <span class="material-icons fz-4"> list_alt </span>

    <p class="fz-3">目前沒訂單喔!</p>
    <button
      type="button"
      class="btn btn-primary fz-3"
      @click="$router.push('/products')"
    >
      前往SHOPPING!
    </button>
  </div>
  <!-- 訂單列表沒訂單時，呈現此區塊  end-->
  <div v-else class="container mt-5">
    <form class="d-flex justify-content-center" @submit.prevent="searchOrder">
      <input
        class="form-control me-2 orderSearch"
        type="search"
        v-model="order"
        placeholder="訂單搜尋"
        aria-label="訂單搜尋"
      />
      <button class="btn btn-outline-success" type="submit">
        <span
          :class="{ 'd-none': loadingStatue.searchOrder == '' }"
          class="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        />
        <span
          :class="{ 'd-none': loadingStatue.searchOrder == '' }"
          class="visually-hidden"
        >
          Loading...</span
        >
        搜尋
      </button>
    </form>
    <ul class="mt-5">
      <li v-for="(item, i) in orderList.orders" :key="i" class="mb-3">
        <div class="card">
          <h5 class="card-header bg-primary text-white fs-5">
            #{{ (orderList.pagination.current_page - 1) * 10 + i + 1 }}
          </h5>
          <div class="card-body">
            <h5
              class="
                card-title
                fz-1 fz-md-2
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <p class="m-0">訂單編號 :</p>
              <p class="m-0">{{ item.id }}</p>
            </h5>
            <p
              class="
                card-text
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <small class="fz-md-1">建立日期:</small>
              <small class="fz-md-1">{{ $toLocaleDate(item.create_at) }}</small>
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
                v-if="item.message.split('//splitValue//')[0] !== ' '"
                class="m-0"
              >
                {{ item.message.split('//splitValue//')[0] }}
              </p>
              <p v-else class="m-0">無備註</p>
            </span>
            <ul>
              <li class="my-2 fz-2">訂單內容</li>
              <li v-for="prd in item.products" :key="prd.id">
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
              <!-- <li><p>目前有{{ cartsNum }}項產品</p></li> -->
              <!-- <li>總共 {{ item.product }} 項商品</li> -->
              <li class="fs-3 text-danger">
                <p>{{ `總計: ${Math.floor(item.total)} 元` }}</p>
              </li>
              <li v-if="item.is_paid" class="fs-3 text-success">
                <p>已付款</p>
              </li>
              <li v-else class="fs-3 text-danger"><p>未付款</p></li>

              <li>
                <button
                  class="btn btn-success me-2"
                  @click="viewSeller"
                  type="button"
                >
                  聯絡賣家
                </button>
                <button
                  v-if="!item.is_paid"
                  class="btn btn-danger"
                  type="button"
                  @click="this.$router.push(`/payment/${item.id}`)"
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
    <!-- 訂單分頁 start -->
    <div class="d-flex justify-content-center">
      <Pagination :pagination="orderPagination" @get-product="getOrderList" />
    </div>
    <!-- 訂單分頁 end -->

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
// 分頁元件
import Pagination from '@/components/Pagination.vue';
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
    // 分頁元件
    Pagination,
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
      orderList: '',
      // 訂單分頁
      orderPagination: '',
      // 讀取畫面
      isLoading: false,
      // 讀取狀態
      loadingStatue: {
        // 查詢訂單鈕
        searchOrder: '',
      },
      // 訂單搜尋
      order: '',
    };
  },
  methods: {
    // 取得訂單列表
    getOrderList(page = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/orders?page=${page}`,
        )
        .then((res) => {
          if (res.data.success) {
            this.orderList = res.data;
            this.orderPagination = res.data.pagination;
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
      // this.$refs.viewSeller.openModal();
      this.$refs.viewSeller.openModal();
    },
    // 付款
    checkOut() {
      // alert('要付款嗎? 先看看賣家是誰好了~');
      this.alertMessage = '要付款嗎? 先看看賣家是誰好了~';
      this.alertStatus = true;
      setTimeout(() => {
        this.alertMessage = '';
        this.alertStatus = false;
      }, 2000);
    },
    // 搜尋訂單
    searchOrder() {
      this.loadingStatue.searchOrder = this.order;
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${
            process.env.VUE_APP_PATH
          }/order/${this.order.trim()}`,
        )
        .then((res) => {
          if (res.data.success) {
            // 關閉讀取畫面
            this.isLoading = false;
            this.loadingStatue.searchOrder = '';
            this.$router.push(`/order/${this.order.trim()}`);
          } else {
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            // 關閉讀取畫面
            this.isLoading = false;
            this.loadingStatue.searchOrder = '';
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
          this.loadingStatue.searchOrder = '';
        });
    },
  },
  mounted() {
    // 取得訂單資料
    this.getOrderList();
  },
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
