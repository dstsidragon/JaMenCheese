<template>
  <nav
    class="navbar navbar-expand-lg navbar-light navbar-padding fixed-top"
    :class="navBarClass"
  >
    <div class="container-fluid position-relative text-secondary">
      <!-- LOGO start-->
      <router-link
        class="
          navbar-brand
          position-absolute
          nav-logo
          start-50
          translate-middle
        "
        to="/"
      >
        <img class="nav-logo-img" :src="scrollLogo" alt="logo"
      /></router-link>

      <div class="d-flex w-100 justify-content-between align-items-center">
        <!-- 漢堡選單 start-->
        <button
          v-if="btnHamStatus"
          class="navbar-toggler  ms-3"
          :class="navBarColor"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="openHamBtn"
        >
          <span class="material-icons" :class="navBarColor">menu</span>
        </button>
        <button
          v-else
          class="navbar-toggler  ms-3"
          :class="navBarColor"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="closeHamBtn"
        >
          <span class="material-icons" :class="navBarColor">close</span>
        </button>
        <!-- 漢堡選單 end-->

        <!-- 選單內容 -->
        <ul class="navbar-nav mb-lg-0 d-none d-lg-flex ps-lg-3">
          <li>
            <router-link
              class="nav-link fw-bold nav-drown"
              href="#"
              aria-current="page"
              :class="navBarColor"
              to="/"
              @click="closeHamburger"
              >首頁</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link fw-bold nav-drown"
              href="#"
              to="/products"
              :class="navBarColor"
              @click="closeHamburger"
              >商品列表</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link fw-bold nav-drown"
              to="/q&a"
              :class="navBarColor"
              @click="closeHamburger"
              >常見問題</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link fw-bold nav-drown"
              to="/lotteryturntable"
              :class="navBarColor"
              @click="closeHamburger"
              >活動</router-link
            >
          </li>
        </ul>
        <ul class="d-flex align-items-center mb-0 mb-lg-0">
          <!-- 收藏 -->
          <li
            class="
              nav-md-link
              align-middle
              d-none d-ssm-inline-block
              cursor-pointer
            "
            :class="navBarColor"
            @click="$router.push('/favorites')"
          >
            <div class="position-relative cursor-pointer">
            <span class="material-icons"> favorite </span>
              <p
                v-if="myFavorite"
                class="
                  favoriteNum
                  text-white
                  bg-danger
                  border border-danger
                  rounded-pill
                "
              >
                {{ myFavorite.length  }}
              </p>
            </div>
          </li>
          <!-- 購物車 -->
          <li class="nav-md-link align-middle btn-group">
            <div class="position-relative cursor-pointer">
              <div
                class="text-primary"
                data-bs-toggle="offcanvas"
                data-bs-target="#shoppingCart"
                aria-controls="shoppingCart"
              >
                <span class="material-icons px-2" :class="navBarColor">
                  shopping_cart
                </span>
              </div>
              <p
                v-if="cartList"
                class="
                  cartsNum
                  text-white
                  bg-danger
                  border border-danger
                  rounded-pill
                "
              >
                {{ cartList.carts.length }}
              </p>
            </div>

            <div
            ref="cartOffcanvas"
              class="offcanvas offcanvas-end bg-lightPrimary"
              tabindex="-1"
              id="shoppingCart"
              aria-labelledby="shoppingCartLabel"
            >
              <div class="offcanvas-header">
                <h5 id="shoppingCartLabel" class="text-primary fz-3">
                  購物清單
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body bg-white">
                <div v-if="cartList">
                  <table
                    class="table table-striped table-hover"
                    v-if="cartList.carts.length > 0"
                  >
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">商品名稱</th>
                        <th scope="col">數量</th>
                        <th scope="col">單價</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, i) in cartList.carts" :key="'car' + i">
                        <th class="col-1" scope="row">{{ i + 1 }}</th>
                        <td class="col-4">{{ item.product.title }}</td>
                        <td class="col-3">{{ item.qty }}</td>
                        <td class="col-4">NT$ {{ item.product.price }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p
                    v-if="cartList.carts.length > 0"
                    class="text-end text-danger fz-2"
                  >
                    總計: NT$ {{ cartList.total }}
                  </p>
                </div>
                <div class="d-grid gap-2" v-if="cartList">
                  <button
                    v-if="cartList.carts.length > 0"
                    class="
                      btn btn-outline-primary
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                    @click="$router.push('/carts')"
                  >
                    <p class="mb-0 fz-2" @click="closeCartOffcanvas">查看購物車</p>
                    <span class="material-icons fz-1" >
                      arrow_forward_ios </span>
                  </button>

                  <p v-if="cartList.carts.length < 1">
                    你目前沒有任何商品在購物車~
                  </p>
                  <button
                    v-if="cartList.carts.length < 1"
                    class="
                      btn btn-outline-primary
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                    @click="$router.push('/products')"
                  >
                    <p class="mb-0 fz-2" @click="closeCartOffcanvas">快去購物</p>
                    <span class="material-icons fz-1"> arrow_forward_ios </span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <!-- 使用者 -->
          <li class="nav-md-link btn-group align-middle">
            <div
              class="cursor-point"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span class="material-icons px-2" :class="navBarColor">
                person
              </span>
            </div>
            <!-- 內容 -->
            <div  ref="offcanvasRight"
              class="offcanvas offcanvas-end bg-lightPrimary"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel" class="text-primary fz-3">
                  使用者功能
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div
                class="
                  offcanvas-body
                  d-flex
                  flex-column
                  justify-content-between
                "
              >
                <ul class="">
                  <li @click="closeOffcanvas">
                    <router-link
                      class="
                        dropdown-item
                        nav-offcanvas
                        text-center text-primary
                      "
                      to="/orders"
                      @click="closeHamburger"
                      >訂單搜尋</router-link
                    >
                  </li>
                  <li @click="closeOffcanvas">
                    <router-link
                      class="
                        dropdown-item
                        text-center
                        nav-offcanvas
                        text-primary
                      "
                      to="/carts"
                      @click="closeHamburger"
                      >購物車</router-link
                    >
                  </li>
                  <li @click="closeOffcanvas">
                    <router-link
                      class="
                        dropdown-item
                        text-center
                        nav-offcanvas
                        text-primary
                      "
                      to="/favorites"
                      @click="closeHamburger"
                      >我的收藏</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="
                        dropdown-item
                        nav-offcanvas
                        text-center text-primary
                      "
                      to="/admin"
                      @click="closeHamburger"
                      >後台</router-link
                    >
                  </li>
                  <li @click="closeOffcanvas">
                    <a
                      class="
                        dropdown-item
                        nav-offcanvas
                        text-center text-primary
                      "
                      href="#"
                      v-if="loginStatus"
                      @click.prevent="openiSgnOutUserModal"
                      >登出</a
                    >
                    <router-link
                      class="
                        dropdown-item
                        nav-offcanvas
                        text-center text-primary
                      "
                      href="#"
                      v-else
                      to="/Login"
                    >
                      登入</router-link
                    >
                  </li>
                </ul>
                <a
                  class="
                    border-top border-primary
                    fz-2
                    disabled
                    text-center text-white
                  "
                  href="#"
                >
                  {{ userName }},您好</a
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 選單內容 -->
      <div
        class="
          collapse
          navbar-collapse
          d-lg-none
          justify-content-between
          mt-4 mt-lg-0
        "
        id="navbarText"
      >
        <ul class="navbar-nav mb-lg-0 d-lg-none">
          <li>
            <router-link
              class="nav-link fw-bold nav-drown"
              href="#"
              aria-current="page"
              :class="navBarColor"
              to="/"
              @click="closeHamburger"
              >首頁</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link fw-bold nav-drown"
              href="#"
              to="/products"
              :class="navBarColor"
              @click="closeHamburger"
              >商品列表</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link fw-bold nav-drown"
              to="/q&a"
              :class="navBarColor"
              @click="closeHamburger"
              >常見問題</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link fw-bold nav-drown"
              to="/lotteryturntable"
              :class="navBarColor"
              @click="closeHamburger"
              >活動</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Alert元件 start -->
  <Alert
    class="alert-position"
    v-if="alertMessage"
    :message="alertMessage"
    :status="alertStatus"
  />
  <!-- Alert元件 end -->
  <Loading></Loading>
  <!-- 登出Modal -->
  <LoginOut ref="signOutUserModal" @sign-out-admin="signOutAdmin"></LoginOut>

  <!-- <router-view/> -->
</template>
<script>
// Alert元件
import Alert from '@/components/Alert.vue';
import LoginOut from '@/components/LoginOut.vue';
import Loading from '@/components/Loading.vue';
import $ from 'jquery';
// emitte
import emitter from '@/assets/js/emitter';

export default {
  components: {
    // Alert元件
    Alert,
    // modal-登出
    LoginOut,
    Loading,
  },
  data() {
    return {
      // alert元件參數
      alertMessage: '',
      alertStatus: false,
      // 使用者名稱
      userName: '訪客',
      // 登入/登出鈕
      loginStatus: false,
      // 讀取狀態
      loadingStatue: {
        // 查看內容鈕
        viewContentStatus: '',
        // 加到購物車鈕
        addCart: '',
      },
      // NAVBAR 被景色
      navBarClass: 'bg-transparent',
      // NAVBAR 顏色
      navBarColor: 'text-primary',
      // 漢堡選單狀態
      btnHamStatus: true,
      // 滾動切換logo
      scrollLogo: 'img/logo4.d43d1d54.svg',
      // 購物車資料
      cartList: '',
      // 我的收藏
      myFavorite: [],
    };
  },
  methods: {
    // openHamBtn
    openHamBtn() {
      this.navBarClass = 'bg-primary';
      // NAVBAR 顏色
      this.navBarColor = 'text-white';
      this.btnHamStatus = !this.btnHamStatus;
      // 切換logo
      this.scrollLogo = 'https://raw.githubusercontent.com/dstsidragon/JaMenCheese/0779b76a828a44aab8ebd1518da2d8dc8c2926d7/src/assets/images/logo-white.svg';
    },
    // closeHamBtn
    closeHamBtn() {
      this.btnHamStatus = !this.btnHamStatus;
      const bodyh = document.documentElement.scrollTop || document.body.scrollTop;
      if (bodyh < 5) {
        this.navBarClass = 'bg-transparent';
        // NAVBAR 顏色
        this.navBarColor = 'text-primary';
        // 切換logo
        this.scrollLogo = 'img/logo4.d43d1d54.svg';
      }
    },
    // 登出
    signOutAdmin() {
      this.$http
        .post(`${process.env.VUE_APP_API}/logout`)
        .then((res) => {
          // console.log(res);
          // 如果成功就執行
          if (res.data.success) {
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

            // 刪除cookie
            this.deleteAllCookies();
            // 跳轉頁面
            this.$router.push('/Login');
          } else {
            // alert('未知的錯誤!');
            // alert 元件顯示
            this.alertMessage = '未知的錯誤!';
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
        });
    },
    // 登出Modal
    openiSgnOutUserModal() {
      this.$refs.signOutUserModal.openModal();
    },
    // 刪除cookie
    deleteAllCookies() {
      const cookies = document.cookie.split(';');

      for (let i = 0; i < cookies.length; i += 1) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      }
    },
    // 判斷使用者值
    chkUserName() {
      // console.log('123');
      // 如果有取到值 ，代表已登入
      if (document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/, '$1') !== '') {
        this.userName = document.cookie.replace(
          /(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/,
          '$1',
        );
        // 登入狀態
        this.loginStatus = true;
      } else {
        this.userName = '訪客';
        // 登入狀態
        this.loginStatus = false;
      }
    },
    // NavBar滾動
    ScrollNavbar() {
      window.onscroll = () => {
        const bodyh = document.documentElement.scrollTop || document.body.scrollTop;
        if (bodyh > 5) {
          // console.log(bodyh);
          // navbar 變背景顏色
          this.navBarClass = 'bg-primary';
          // NAVBAR 顏色
          this.navBarColor = 'text-white';
          // 切換logo
          this.scrollLogo = 'https://raw.githubusercontent.com/dstsidragon/JaMenCheese/0779b76a828a44aab8ebd1518da2d8dc8c2926d7/src/assets/images/logo-white.svg';
        } else if (bodyh < 5 && this.btnHamStatus) {
          // navbar 變背景顏色
          this.navBarClass = 'bg-transparent';
          // NAVBAR 顏色
          this.navBarColor = 'text-primary';
          // 切換logo
          this.scrollLogo = 'img/logo4.d43d1d54.svg';
        }
      };
    },
    // 關閉漢堡選單
    closeHamburger() {
      $('#navbarText').removeClass('show');
      this.btnHamStatus = true;
    },
    // 取得購物車列表
    getCartList() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.cartList = res.data.data;
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
        });
    },
    // 取得loCalStorage
    getLoCalStorage() {
      const favAry = JSON.parse(localStorage.getItem('myFavorite'));
      const ary = [];
      favAry.forEach((item) => {
        if (item !== null) {
          ary.push(item);
        }
      });
      // console.log(ary);
      this.myFavorite = ary;
      // console.log(this.myFavorite);
    },
    closeOffcanvas() {
      // console.dir(this.$refs.offcanvasRight);
      this.$refs.offcanvasRight.className = 'offcanvas offcanvas-end bg-lightPrimary';
      this.$refs.offcanvasRight.nextElementSibling.className = 'modal-backdrop fade';
    },
    closeCartOffcanvas() {
      this.$refs.cartOffcanvas.className = 'offcanvas offcanvas-end bg-lightPrimary';
      this.$refs.cartOffcanvas.nextElementSibling.className = 'modal-backdrop fade';
    },
  },
  created() {
    // 判斷使用者值
    this.chkUserName();
    // 取得購物車資料
    this.getCartList();
    // 取得收藏資料
    this.getLoCalStorage();
  },
  mounted() {
    // NavBar滾動
    this.ScrollNavbar();
    // 監聽一個事件(刷新購物車)
    emitter.on('refresh-carts', () => {
      this.getCartList();
    });
    // 監聽一個事件(刷新購物車)
    emitter.on('refresh-favorites', () => {
      this.getLoCalStorage();
    });
    // 監聽一個事件(刷新使用者))
    emitter.on('login-out', () => {
      this.chkUserName();
    });
  },
  unmounted() {
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin/mixin';
.top-20px{
  top:20px;
}
.nav-drown{
  &:focus,&:hover{
  color: #CF9A59  !important;
  }
  &.router-link-exact-active {
  color: #CF9A59  !important;
  }
  @include pc{
    font-size: 1.5rem;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top:#000000 1px dashed;
    &:hover{
    border-bottom: 0;
  }
  }
}
.navbar-collapse{
  @include pc{
  margin-bottom: -14px;
  }
}
.nav-logo{
    top:43px;
     @include pc {
    top:18px;
    }

    &-img{
    height: 80px !important;
    color:  red;

    @include pc {
    height:60px !important;
    }
    }
  }
.navbar-padding{
  padding: 0px;
  @include pc{
    padding: 15px;
  }
}
.nav-md-link{
  padding-right: 0.5rem;
    padding-left: 0.5rem;
  padding-top: 30px;
  padding-bottom: 30px;
  @include pc{
  padding-right: 0.5rem;
    padding-left: 0.5rem;
  padding-top: 0px;
  padding-bottom: 0px;
  }
  @include plusMobile{
  padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
}
.navbar,.container-fluid{

  @include plusMobile{
  padding-right: 0rem;
    padding-left: 0rem;
  }
}
.offcanvas-end{
  width: 320px;
}
.nav-offcanvas{
  &:focus,&:hover{
  color: #CF9A59  !important;
  }
  &.router-link-exact-active {
  color: #CF9A59  !important;
  }
    font-size: 1.5rem;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top:#000000 1px dashed;
    &:hover{
    border-bottom: 0;
  }
}
.cartsNum{
  position: absolute;
  top: -8px;
  right: 2px;
  font-size: 12px;
  padding-left: 6px;
  padding-right: 6px;
}
.favoriteNum{
  position: absolute;
  top: -8px;
  right: -10px;
  font-size: 12px;
  padding-left: 6px;
  padding-right: 6px;
}
.nav-offcanvas.router-link-exact-active[data-v-41458b80] {
    color: #ffffff !important;
}
</style>
