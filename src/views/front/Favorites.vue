<template>
  <header
    class="banner mt-navbar d-flex justify-content-center align-items-center"
  >
    <div class="text-white bg-img-transparent rounded p-2">
      <h2 class="text-center fz-2 fz-md-4">我的收藏</h2>
      <p class="fz-0 fz-md-1">別人貪婪的時侯我恐懼，別人恐懼的時候我貪婪!</p>
    </div>
  </header>
  <div class="container mt-5">
    <div v-if="myFavoriteProducts.length === 0" >
      <p class="text-center text-primary fz-2">目前沒有商品加入收藏!</p>
    </div>
    <div class="row row-cols-1 row-cols-smm-2 row-cols-md-3 g-4">
      <div
        class="col cursor-pointer"
        v-for="(item, i) in myFavoriteProducts"
        :key="`prd_${i}`"
      >
        <div class="card h-100">
          <div
            class="overflow-hidden"
            @click.prevent="$router.push(`/product/${item.id}`)"
          >
            <img
              :src="item.imageUrl"
              class="card-img-top prd-card-img object-fit img--scale"
              :alt="item.title"
            />
          </div>
          <!-- 最愛按鈕 -->
          <div class="favorite">
            <a
              class="text-danger"
              href="#"
              @click.prevent="addFavorite(item.id)"
            >
              <span
                v-if="myFavorite.includes(item.id)"
                class="material-icons text-danger"
              >
                favorite
              </span>
              <span v-else class="material-icons"> favorite_border </span>
            </a>
          </div>
          <div class="card-body p-0" @click.prevent="viewOneProduct(item)">
            <h5 class="card-title bg-primary text-white p-1">
              {{ item.title }}
            </h5>
            <span class="d-flex justify-content-around align-items-center">
              <p class="card-text border-right">
                <del>{{ `$ ${item.origin_price} 元` }}</del>
              </p>
              <p class="card-text text-danger fz-2">${{ item.price }}元</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// emitter
import emitter from '@/assets/js/emitter';

export default {
  data() {
    return {
      // 我的收藏
      myFavorite: this.getLoCalStorage('myFavorite') || [],
      // 全部商品
      products: '',
      // 收藏的產品
      myFavoriteProducts: '',
      err: '',
    };
  },
  computed: {},
  watch: {
    myFavorite() {
      this.myFavoriteProduct();
    },
  },
  methods: {
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
      this.getProducts();
    },
    setLoCalStorage(name, item) {
      localStorage.setItem(name, JSON.stringify(item));
    },
    // 取得loCalStorage
    getLoCalStorage(name) {
      return JSON.parse(localStorage.getItem(name));
    },
    // 取得商品列表
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`,
        )
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.myFavoriteProduct();
          }
        })
        .catch((err) => {
          this.err = err;
        });
    },
    myFavoriteProduct() {
      const favAry = [];
      this.myFavorite.forEach((fav) => {
        this.products.forEach((item) => {
          if (item.id === fav) {
            favAry.push(item);
          }
        });
      });
      this.myFavoriteProducts = favAry;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
<style lang="scss" scoped>
.banner {
  background: center center no-repeat
    url('https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627384537686.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hVq0cCLDD3ZvSZwrFJNfBGgcDqIbrfoJiBXiW0GlvOltTFcdwY3LUEXHqamTNgAbLSBA1SeSUGDZEHQY%2FvgihB%2FCq0f9ob2NxGTKJqMVkJyzKVpP1W7wFx5fKvP5kO3pgaEPEuIVq0EoFMypPzvK73oZGGaXkgghgMDdyrbvlbCsSaWKYMjVWGFSyJAQCwgL0fhdmVLfaRPROVr4Ya1oB6DcPwVZDmOyYnUAYkdO2tJ%2F%2Br6SVCpffpzXBgWLLR%2FNa0UL6oK8A4xyGfc6R%2B1T75bf2ei6qEa79krGM8E89exbz6W%2Bcec1gu6BRVvReu4UiN%2FSHdbdSwb3QivW%2Bz1Tgw%3D%3D');
  height: 340px;
  background-size: cover;
  background-attachment: fixed;
}

@media (max-width: 768px) {
  .banner {
    height: 170px;
  }
}
.favorite {
  position: absolute;
  top: 5px;
  right: 5px;
}
.product-link {
  flex: 1;
  padding: 0.5rem 0;
}
.list-group {
  padding-left: 1.5rem * 0.5 !important;
}
.prd-card-img {
  height: 200px;
}
@media (max-width: 512px) {
  .prd-card-img {
    height: 300px;
  }
}
</style>
