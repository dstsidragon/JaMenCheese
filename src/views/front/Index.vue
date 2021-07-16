<template>
  <div class="position-relative bg-white">
    <!-- <div class="banner"></div> -->
    <Swiper />
    <kinesis-container
      class="
        banner__font
        bgc-transparent
        rounded
        text-primary
        ff-HachiMaruPop
        p-4
      "
    >
      <kinesis-element :strength="15" class="banner__subtitle">
        創意演繹極致口感
      </kinesis-element>
      <kinesis-element :strength="30"> -勾起你心中的餓 </kinesis-element>
      <div class="d-flex justify-content-center mt-5">
        <router-link
          class="
            btn btn-primary
            px-2
            d-flex
            justify-content-center
            align-items-center
          "
          href="#"
          to="/products"
        >
          <i class="material-icons"> store </i>
          前往購物
        </router-link>
      </div>
    </kinesis-container>

    <div
      class="
        ScrollDown
        hero__scroll
        position-absolute
        start-50
        translate-middle
        cursor-pointer
      "
    >
      Scroll Down
      <i class="chevron bottom mt-1"></i>
    </div>
  </div>
  <div class="container">
    <!-- 介紹 -->
    <div
      class="
        row
        mt-5
        d-flex
        justify-content-center
        flex-column-reverse flex-md-row
      "
    >
      <img
        class="col-md-5 mt-5 order-2 order-md-1 object-fit"
        src="https://images.unsplash.com/photo-1591261730588-9c21770ff6f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="user"
      />
      <div class="col-md-6 mt-5 text-start order-1 order-md-2">
        <p class="fz-2">呷面起士</p>
        <p class="text-indent-2 text-primary">
          創辦人出生於台南，2018年冬末偶然在網路看到網頁設計的課程，
          觸發了對程式碼的熱情，即使工作再晚回家也是不間段的學習，終於2021的春初成功轉職。
        </p>
        <p class="text-indent-2 text-primary">
          2021年初，開始接觸到Vue3後，就開始這間呷面起士的創立之路，店面不大但是大大小小事情都由自己包辦，直到現在，
          呷面起士成為家喻戶曉的知名麵包店。
        </p>
      </div>
      <h3
        class="
          d-flex d-md-none
          justify-content-center
          align-items-center
          titleEffect--border-bottom-x-danger-5
          order-3
          fz-3
        "
      >
        <span>從零到一</span>
      </h3>
      <h3
        class="
          d-none d-md-flex
          writing-mode-vertical-lr
          col-md-1
          border-right-top-4
          text-start
          mb-5
          order-3
          fz-3
          align-items-end
        "
      >
        從零到一
      </h3>
    </div>
    <!-- 理念 -->
    <div class="row mt-5 d-flex justify-content-center">
      <h3
        class="
          d-flex d-md-none
          justify-content-center
          align-items-center
          titleEffect--border-bottom-x-danger-5
          fz-3
        "
      >
        <span>理念堅持</span>
      </h3>
      <h3
        class="
          d-none d-md-flex
          writing-mode-vertical-lr
          col-md-1
          border-right-top-4
          text-start
          mb-5
          redi-border
          fz-3
        "
      >
        理念堅持
      </h3>
      <div class="col-md-11">
        <div
          class="
            row
            justify-content-center justify-content-md-around
            align-items-center
          "
        >
          <img
            class="col-md-6 mt-5 rounded-circle object-sm-fit"
            style="height: 200px; width: 224px"
            src="https://images.unsplash.com/photo-1560512154-fa1f9d3a810a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="ingredients"
          />
          <div class="col-md-6 mt-5 text-start">
            <h4>嚴選食材，堅持天然</h4>
            <p class="text-primary">
              以「新鮮手作、嚴選食材」為理念經營。堅持不添加任喝一滴防腐劑、人工化學添加物等，
              在食材與原物料的運用及篩選上，更加格外的用心與注意，讓每位客人都能夠吃到麵包原始之美味。
            </p>
          </div>
        </div>
      </div>
      <div class="offset-md-1 col-md-11">
        <div
          class="
            row
            justify-content-center justify-content-md-around
            flex-md-row-reverse
            align-items-center
          "
        >
          <img
            class="col-md-6 mt-5 rounded-circle object-sm-fit"
            style="height: 200px; width: 224px"
            src="https://images.unsplash.com/photo-1514970461500-96e88f5d7bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
            alt="ingredients"
          />
          <div class="col-md-6 mt-5 text-start">
            <h4>用心烘焙，享受生活</h4>
            <p class="text-primary">
              希望能透過我們的麵包拉近彼此生活的距離，因為分享的幸福、追尋的美味，
              讓我們在這相遇，無論何時何地，呷面起士都能帶你從中找到最理想的生活。
            </p>
          </div>
        </div>
      </div>
      <div class="offset-md-1 col-md-11">
        <div
          class="
            row
            justify-content-center justify-content-md-around
            align-items-center
          "
        >
          <img
            class="col-md-6 mt-5 rounded-circle object-sm-fit"
            style="height: 200px; width: 224px"
            src="https://images.unsplash.com/photo-1601740982034-56bc80e986ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1187&q=80"
            alt="ingredients"
          />
          <div class="col-md-6 mt-5 text-start">
            <h4>獨特口味，創新研發</h4>
            <p class="text-primary">
              為了給客人提供不同的創新商品，除了技藝不斷的精進與創新研發獨特口味外、也順應市場需求及季節變化
              ，定期推出新品項，刺激視覺享受外，更加滿足各位客人的味蕾。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 活動 -->
  <div class="activity d-flex justify-content-center align-items-center mt-5">
    <div class="container text-white">
      <div class="bg-img-transparent py-2 py-md-4 rounded-3">
        <h2 class="text-center fz-2 fz-md-4">開幕限時活動</h2>
        <p class="fz-0 fz-md-2">
          活動期間，全館商品<em class="text-danger">九折</em
          >超級優惠價格外，<br />
          還有幸運大轉盤，有機會讓你得到全館半價的機會!!
        </p>
        <router-link class="btn btn-danger" href="#" to="/lotteryturntable">
          <div class="d-flex justify-content-center align-items-center">
            <i class="material-icons fz-md-2 me-2"> casino </i>
            <p class="m-0 fz-md-2">立即前往!!</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <!-- 3d產品卡片 -->
    <Card3D />
  <!-- 訂閱 -->
  <div class="subscribe d-flex justify-content-center  align-items-center ">
      <div class="bg-img-transparent p-1 rounded-3">
        <h2 class="text-start text-white fz-md-4">記得 <br />訂閱以獲取更多資訊!</h2>
        <div class="input-group mb-3" v-if="subscribeStatus">
  <input type="text" class="form-control text-primary"
  readonly value="送您訂閱優惠碼:subme"
   aria-describedby="button-addon2">
  <button class="btn btn-secondary" disabled type="button">已訂閱</button>
</div>
      <Form  v-else v-slot="{ errors }" class="input-group mb-3" @submit="sendMail">
        <Field
              name="信箱"
              type="email"
          class="form-control "
          placeholder="Your email address"
          aria-label="Your email address"
          aria-describedby="button-subscribe"
              :class="{ 'is-invalid': errors['信箱'] }"
              :rules="isEmail"
        />
        <button class="btn btn-primary" type="submit" id="button-subscribe">
          訂閱
        </button>
            <error-message name="信箱" class="invalid-feedback fz-2 "></error-message>
      </Form>
    </div>
  </div>
  <!-- 讀取畫面 start -->
  <div class="container">
    <Loading :isVueLoading="isLoading" />
  </div>
  <!-- 讀取畫面 end -->
</template>

<script>
import Loading from '@/components/Loading.vue';
import Swiper from '@/components/Swiper.vue';
import Card3D from '@/components/Card3D.vue';
import $ from 'jquery';

export default {
  components: {
    Loading,
    Swiper,
    Card3D,
  },
  data() {
    return {
      isLoading: false,
      // 訂閱 改變class
      subscribeStatus: false,
    };
  },
  methods: {
    // 驗證信箱格式
    isEmail(value) {
      const mail = /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return mail.test(value) ? true : '需要輸入正確的信箱';
    },
    // 訂閱
    sendMail() {
      this.subscribeStatus = true;
    },
  },
  mounted() {
    // 讀取畫面
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
    // ScrollDown 監聽
    $('.hero__scroll').on('click', () => {
      $('html, body').animate(
        {
          scrollTop: $(window).height(),
        },
        1200,
      );
    });
  },
};
</script>

<style lang="scss" scoped>
@import url('https://unicons.iconscout.com/release/v2.1.9/css/unicons.css');
@import '@/assets/scss/mixin/_mixin';
// 滿版swiper
.banner {
  &__font {
    z-index: 1000;
    position: absolute;
    top: 20%;
    left: 5%;
    font-size: 2rem;
    color: #ffffff;
    font-weight: bold;
    text-align: left;
  }
  &__subtitle {
    font-size: 3rem;
  }
  @include mobile {
    height: 500px;
    &__font {
      top: 30%;
      font-size: 1.5rem;
    }
    &__subtitle {
      font-size: 2rem;
    }
  }
}
.bgc-transparent {
  background-color: rgba(1, 2, 0.1, 0.1);
}
// scroll down
.chevron {
  margin-top: 20px;
  display: block;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite;
  color: #7f5625;

  &.bottom:before {
    top: 0;
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  &::before {
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    content: '';
    display: inline-block;
    height: 20px;
    position: relative;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    vertical-align: top;
    width: 20px;
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(0, 10px);
    transform: translate(0, 10px);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
.ScrollDown {
  bottom: 6%;
  color: #7f5625;
  font-size: 24px;
  font-weight: bold;
  z-index: 1080;
}

.redi-border {
  &:after {
    top: 32%;
    left: 0%;
  }
}
.activity {
  background: center center no-repeat
    url('https://images.unsplash.com/photo-1575613586166-d07573e2a428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80');
  height: 340px;
  background-size: cover;
  background-attachment: fixed;
  @include pad {
    height: 250px;
    background-attachment: unset;
  }
}
.subscribe {
  background: center center no-repeat
    url('https://images.unsplash.com/photo-1567752588693-ad10a647c5a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80');
  height: 400px;
  background-size: cover;
  background-attachment: fixed;
  @include pad {
    height: 250px;
    background-attachment: unset;
  }
}
</style>
