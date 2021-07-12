<template>
  <div
    class="banner mt_navbar d-flex justify-content-center align-items-center"
  >
    <div class="text-white bg-img-transparent rounded p-2">
      <h2 class="text-center fz-2 fz-md-4">我的收藏</h2>
      <p class="fz-0 fz-md-1">別人貪婪的時侯我恐懼，別人恐懼的時候我貪婪!</p>
    </div>
  </div>
  <div class="container">
         <div class="row   row-cols-1 row-cols-smm-2 row-cols-md-3 g-4">
  <div class="col cursor-pointer" v-for="(item, i) in myFavoriteProducts" :key="'prd'+i">
            <div class="card h-100 ">
              <div class="overflow-hidden "
              @click.prevent="$router.push(`/product/${item.id}`);">
                <img :src="item.imageUrl"  class="card-img-top prd-card-img object-fit img--scale"
               alt="item.title">
              </div>
              <!-- 最愛按鈕 -->
              <div  class="favorite ">
               <a  class="text-danger" @click="addFavorite(item.id)"
                  >
                    <span v-if="myFavorite.includes(item.id)"
                    class="material-icons text-danger">
                      favorite
                      </span>
                    <span v-else
                    class="material-icons ">
                      favorite_border
                    </span>
                 </a></div>
              <div class="card-body p-0 " @click.prevent="viewOneProduct(item)">
                <h5 class="card-title bg-primary text-white p-1">{{item.title}}</h5>
                <span class="d-flex justify-content-around align-items-center">
                <p class="card-text border-right"><del>${{item.origin_price}}元</del></p>
                <p class="card-text text-danger fz-2">${{item.price}}元</p>
                </span>
              </div>
            </div>
          </div>
         </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  background: center center no-repeat
    url('https://images.unsplash.com/photo-1509125602259-dc019b0b874f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
  height: 340px;
  background-size: cover;
  background-attachment: fixed;
}

@media (max-width: 768px) {
  .banner {
    height: 170px;
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
    };
  },
  computed: {
  },
  watch: {
    myFavorite() {
      this.myFavoriteProduct();
    //   console.log('watch');
    },
  },
  methods: {
    // 加入最愛
    addFavorite(id) {
    //   console.log(this.myFavorite);
      // console.log(this.id);
      // 如果已經在最愛 就刪除最愛  如果沒有 就加到最愛
      if (this.myFavorite.includes(id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(id), 1);
      } else {
        this.myFavorite.push(id);
      }
      //   console.log(this.myFavorite);

      // 儲存myFavorite資料到LocalStorage
      this.setLoCalStorage('myFavorite', this.myFavorite);
      // 發起一個觸發(刷新最愛)
      emitter.emit('refresh-favorites');
      this.getProducts();
    },
    // 將資料存到loCalStorage
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
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          // console.log(res);
          // 如果成功就執行
          if (res.data.success) {
            this.products = res.data.products;
            this.myFavoriteProduct();
          } else {
            console.log('驗證錯誤，請重新登入!');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    myFavoriteProduct() {
      const favAry = [];
      this.myFavorite.forEach((fav) => {
        this.products.forEach(
          (item) => {
            if (item.id === fav) {
              favAry.push(item);
            }
          },
        );
      });
      //   console.log(favAry);
      this.myFavoriteProducts = favAry;
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {
  },
};
</script>
