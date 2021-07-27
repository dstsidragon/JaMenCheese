<template>
  <h2
    class="
      shadow-sm
      p-3
      mt-1
      mb-5
      bg-yellow-lighten
      text-primary
      rounded
      fz-3 fz-sm-4
    "
  >
    商品管理
  </h2>
  <!-- 新增產品 start-->
  <div class="container mt-5 justify-content-evenly d-flex align-items-center">
    <!-- Alert元件 start -->
    <Alert
      class="alert-position"
      v-if="alertMessage"
      :message="alertMessage"
      :status="alertStatus"
    />
    <!-- Alert元件 end -->
    <!-- Button trigger modal -->
    <button class="btn btn-primary" type="button" @click="clearProductData">
      新增產品
    </button>
    <button
      v-if="dataLength > 0"
      :class="{ 'd-none': !this.productDataAll }"
      class="btn btn-danger d-none d-sm-block"
      type="button"
      @click="this.$refs.deleteAllModal.openModal()"
    >
      一鑑刪除全部商品
    </button>

    <!-- Modal -->
    <AddProductModal
      ref="UpLoadImg"
      :add-product="addProduct"
      @emit-product-data="addPrductData"
    >
    </AddProductModal>
  </div>
  <!-- 新增產品 end-->

  <!-- 刪除單一Modal start-->
  <Delete ref="deleteModal" @send="delOneData" />
  <!-- 刪除單一Modal end-->

  <!-- 產品列表 -->
  <div class="container mt_5p">
    <div class="container">
      <table class="table mt-4 row">
        <thead class="co1-12">
          <tr class="row">
            <th class="col-3 d-none d-md-table-cell">產品圖片</th>
            <th class="col-3">產品名稱</th>
            <th class="col-2 col-md-1 d-none d-ssm-table-cell" width="120">
              原價
            </th>
            <th class="col-3 col-ssm-2 col-md-1">售價</th>
            <th class="col-3 col-ssm-2">是否啟用</th>
            <th class="col-3 col-md-2">編輯/刪除</th>
          </tr>
        </thead>
        <tbody id="productList">
          <tr v-for="(item, i) in productData" class="row" :key="'bg_prd' + i">
            <td class="col-3 d-none d-md-table-cell d-flex align-items-center">
              <img class="prd_img" :src="item.imageUrl" :alt="item.imageUrl" />
            </td>
            <td class="col-3 d-flex justify-content-center align-items-center">
              {{ item.title }}
            </td>
            <td
              class="
                col-2 col-md-1
                d-none d-ssm-table-cell d-flex
                justify-content-center
                align-items-center
              "
            >
              {{ item.origin_price }}
            </td>
            <td
              class="
                col-3 col-ssm-2 col-md-1
                justify-content-center
                d-flex
                align-items-center
              "
            >
              {{ item.price }}
            </td>
            <td
              class="
                col-3 col-ssm-2
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <div class="onoffswitch">
                <input
                  type="checkbox"
                  name="onoffswitch"
                  class="onoffswitch-checkbox"
                  @click.prevent="productEnable"
                  :id="'myonoffswitch_' + item.id"
                  tabindex="0"
                  v-if="item.is_enabled == 1"
                  checked
                  :data-is_enabled="item.is_enabled"
                  :data-id="item.id"
                  :data-title="item.title"
                  :data-category="item.category"
                  :data-unit="item.unit"
                  :data-origin_price="item.origin_price"
                  :data-price="item.price"
                />
                <input
                  type="checkbox"
                  name="onoffswitch"
                  class="onoffswitch-checkbox"
                  @click.prevent="productEnable"
                  :id="'myonoffswitch_' + item.id"
                  tabindex="0"
                  v-else
                  :data-is_enabled="item.is_enabled"
                  :data-id="item.id"
                  :data-title="item.title"
                  :data-category="item.category"
                  :data-unit="item.unit"
                  :data-origin_price="item.origin_price"
                  :data-price="item.price"
                />
                <label
                  class="onoffswitch-label"
                  :for="'myonoffswitch_' + item.id"
                />
              </div>
            </td>
            <td
              class="
                col-3 col-md-2
                justify-content-center
                d-flex
                align-items-center
              "
            >
              <button
                type="button"
                :id="'redit_' + i"
                @click="getReditOneData"
                class="btn btn-sm btn-primary btn-left"
                data-action="remove"
                :data-id="item.id"
              >
                編輯
              </button>
              <button
                type="button"
                :id="'del_' + item.id"
                @click="this.$refs.deleteModal.openModal(item)"
                class="btn btn-sm btn-danger btn-right"
                data-action="remove"
                :data-id="item.id"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>{{ `目前頁面有 ${dataLength} 項產品` }}</p>
    </div>
  </div>

  <!-- 修改商品Modal -->
  <ReditProductModal
    ref="ReditProductModal"
    :redi-datas="rediData"
    @emit-redit-new-nata="reditOneData"
  />

  <!-- 分頁 start-->
  <div class="d-flex justify-content-center">
    <Pagination :pagination="pagination" @get-product="getProduct"/>

    <!-- 分頁 end-->

    <!-- 讀取畫面 start-->
    <Loading :isVueLoading="isLoading" />
    <!-- 讀取畫面 end -->

    <!-- 刪除全部Modal start-->
    <DeleteAll ref="deleteAllModal" @send="OneKeyDelAllProduct" />
    <!-- 刪除全部Modal end-->
  </div>
</template>
<script>
// 刪除單一Modal
import Delete from '@/components/Delete.vue';
// 分頁
import Pagination from '@/components/Pagination.vue';
// 新增商品 Modal
import AddProductModal from '@/components/AddProductModal.vue';
// 編輯商品 Modal
import ReditProductModal from '@/components/ReditProductModal.vue';
// 讀取畫面
import Loading from '@/components/Loading.vue';
// Alert元件
import Alert from '@/components/Alert.vue';
// 刪除全部 Modal
import DeleteAll from '@/components/DeleteAll.vue';

export default {
  components: {
    // 刪除全部 Modal
    DeleteAll,
    // 刪除單一Modal
    Delete,
    // Alert元件
    Alert,
    // 分頁
    Pagination,
    // 新增商品 Modal
    AddProductModal,
    // 編輯商品 Modal
    ReditProductModal,
    // 讀取畫面
    Loading,
  },
  data() {
    return {
      // alert元件參數
      alertMessage: '',
      alertStatus: false,
      // 讀取狀態
      isLoading: false,
      // 商品資料
      productData: [],
      // 全部商品資料
      productDataAll: {},
      allProductAry: [],
      // 分頁
      pagination: [],
      // 商品資料筆數
      dataLength: 0,
      // 取得token
      token: document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      ),
      // 預存的商品資料
      defaulData: [],
      // 編輯資料索引
      rediData: {
        redi_index: null,
        id: '',
        title: '',
        description: '',
        content: '',
        category: null,
        unit: '',
        origin_price: null,
        price: null,
        is_enabled: 0,
        num: 1,
        imageUrl: '',
        imagesUrl: {
          url1: '',
          url2: '',
          url3: '',
          url4: '',
          url5: '',
        },
      },
      // 新增產品
      addProduct: {
        imageUrls: {},
      },
    };
  },
  methods: {
    // 取得商品列表
    getProduct(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          // 如果成功就執行
          if (res.data.success) {
            this.productData = res.data.products;
            this.pagination = res.data.pagination;
            // 更新筆數
            this.dataLength = this.productData.length;

            // 取得全部商品
            this.getAllProduct();

            // 關掉讀取畫面
            this.isLoading = false;
          } else {
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            // 跳轉頁面
            this.$router.push('/login');
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

    // 刪除單一資料
    delOneData(e) {
      const { id } = e;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      this.$http
        .delete(url)
        .then((res) => {
          // 如果成功就執行
          if (res.data.success) {
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            this.getProduct();
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
          this.alertStatus = true;
          setTimeout(() => {
            this.alertMessage = '';
            this.alertStatus = false;
          }, 2000);
        });
    },
    // 啟用/未啟用事件
    productEnable(e) {
      const delId = e.target.dataset.id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${delId}`;
      this.$http
        .put(url, {
          data: {
            category: `${e.target.dataset.category}`,
            is_enabled: e.target.dataset.is_enabled === '1' ? 0 : 1,
            // eslint-disable-next-line radix
            origin_price: parseInt(e.target.dataset.origin_price),
            // eslint-disable-next-line radix
            price: parseInt(e.target.dataset.price),
            title: `${e.target.dataset.title}`,
            unit: `${e.target.dataset.unit}`,
          },
        })
        .then((res) => {
          // 如果成功就執行
          if (res.data.success) {
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            this.getProduct();
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

    // 建立產品
    addPrductData(emitproductData) {
      // 判斷是否都不為空值
      if (
        emitproductData.bg_add_title !== ''
        && emitproductData.bg_add_category !== ''
        && emitproductData.bg_add_unit !== ''
        && emitproductData.bg_add_origin_price !== ''
        && emitproductData.bg_add_price !== ''
      ) {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;

        // 送至伺服器
        this.$http
          .post(url, emitproductData)
          .then((res) => {
            // 如果成功就執行
            if (res.data.success) {
              this.alertMessage = res.data.message;
              this.alertStatus = true;
              setTimeout(() => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000);
              // 刷新
              this.getProduct();

              // 關掉新增產品選單
              this.$refs.UpLoadImg.closeModal();
              // 清空新增產品的資料
              this.clearProductData();
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
      } else {
        this.alertMessage = '標題、分類、單位、原價、售價為必填欄位!';
        this.alertStatus = false;
        setTimeout(() => {
          this.alertMessage = '';
          this.alertStatus = false;
        }, 2000);
      }
    },
    // 取得全部商品
    getAllProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`;
      // 取得全部商品
      this.$http
        .get(url)
        .then((res) => {
          // 如果成功就執行
          if (res.data.success) {
            this.productDataAll = res.data.products;
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
    // 一鑑刪除全部商品
    OneKeyDelAllProduct() {
      this.allProductAry.forEach((item, i) => {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item}`;
        this.$http
          .delete(url)
          .then((res) => {
            // 如果成功就執行
            if (res.data.success) {
              if (i === this.allProductAry.length - 1) {
                this.alertMessage = res.data.message;
                this.alertStatus = true;
                setTimeout(() => {
                  this.alertMessage = '';
                  this.alertStatus = false;
                }, 2000);
                this.getProduct();
              }
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
      });
    },
    // 清空新增產品的資料
    clearProductData() {
      // 清空新增產品的資料
      this.$refs.UpLoadImg.$refs.addPrdForm.resetForm();
      // 打開新增產品視窗
      this.$refs.UpLoadImg.openModal();
    },
    // 取得編輯商品
    getReditOneData(e) {
      // 取得待編輯商品索引
      const index = e.target.id.split('_')[1];
      // 將索引傳至data
      this.rediData.redi_index = index;
      // 將資料傳至data
      const rediItem = this.productData[this.rediData.redi_index];
      this.rediData.title = rediItem.title;
      this.rediData.description = rediItem.description;
      this.rediData.id = rediItem.id;
      this.rediData.content = rediItem.content;
      this.rediData.category = rediItem.category;
      this.rediData.unit = rediItem.unit;
      this.rediData.origin_price = rediItem.origin_price;
      this.rediData.price = rediItem.price;
      // eslint-disable-next-line radix
      this.rediData.is_enabled = parseInt(rediItem.is_enabled);
      this.rediData.imageUrl = rediItem.imageUrl;
      this.rediData.imagesUrl = {
        url1: rediItem.imagesUrl[0],
        url2: rediItem.imagesUrl[1],
        url3: rediItem.imagesUrl[2],
        url4: rediItem.imagesUrl[3],
        url5: rediItem.imagesUrl[4],
      };
      this.$refs.ReditProductModal.openModal();
    },
    // 編輯商品
    reditOneData(reditNewData) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.rediData.id}`;
      // 編輯資料
      this.$http
        .put(url, reditNewData)
        .then((res) => {
          // 如果成功就執行
          if (res.data.success) {
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(() => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000);
            // 刷新
            this.getProduct();
            // 關閉編輯視窗
            this.$refs.ReditProductModal.closeModal();
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
  },
  watch: {
    productDataAll() {
      // 如果productDataAll的資料不為空就取出ID
      if (this.productDataAll !== undefined && this.productDataAll !== null) {
        // 將取得全部商品物件轉陣列取出ID
        this.allProductAry = Object.keys(this.productDataAll);
      }
    },
  },
  created() {
    // 使用token驗證
    this.$http.defaults.headers.common.Authorization = this.token;
  },
  mounted() {
    this.isLoading = true;
    // 取得商品資料
    this.getProduct();
  },
};
</script>
