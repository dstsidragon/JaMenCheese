<template>
    <div class="bg-primary  position-relative clip-path mt-5
    ">
    <div class="cp-Triangle stripe-one"></div>
    <div class="cp-Triangle stripe-two"></div>
    <div class="cp-Triangle stripe-three"></div>
    </div>
    <div class="bg-primary w-100 py-2">
        <div class="container d-flex justify-content-around align-items-center">
    <img class="logo d-none d-sm-block" src="@/assets/images/logo-white.svg" alt="logo" />
   <div class="">
        <ul class="text-white fz-0">
        <li>
            <p>營業時間:周一至周六 08:00~17:00</p>
        </li>
        <li>
            <p>服務電話:080-0123-456</p>
        </li>
        <li>
            <p>店面地址: 台中市隔壁區大馬路123號</p>
        </li>
    </ul>
    <p class="text-white">- - 個人練習使用 - -</p>
    <ul  class="d-flex justify-content-around align-items-center">
        <li >
            <!-- 貼FACEBOOK 網址會跳警告 -->
            <a href="https://tw.yahoo.com/?fr=fptb-yie8">
                <img src="https://cdn2.iconfinder.com/data/icons/social-18/512/Facebook-2-256.png"
            style="width:32px;height:32px;" alt="facebook">
            </a>
            </li>
        <li>
            <a href="https://tw.yahoo.com/?fr=fptb-yie8">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/200_Line_logo_logos-512.png"
            style="width:32px;height:32px;" alt="line">
            </a>
        </li>
        <li>
            <a href="https://github.com/dstsidragon/JaMenCheese">
            <img src="https://cdn3.iconfinder.com/data/icons/social-media-2253/25/Group-256.png"
            style="width:32px;height:32px;"  alt="GITHUB">
            </a>
            </li>
    </ul>
   </div>
      <!-- <div class="d-flex">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.180301268507!2d120.64295697934496!3d24.165408708410983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d8ca540c069%3A0x9d1c5107395b4c4d!2z5paw5YWJ5LiJ6LaK5Y-w5Lit5Lit5riv5bqX!5e0!3m2!1szh-TW!2stw!4v1626188360881!5m2!1szh-TW!2stw"
        width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div> -->
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../assets/scss/mixin/mixin';

.logo {
  width: 150px;
  height: 150px;
    // 992px
    @include pc{
  }
    // 768px
    @include pad{
    }
    // 630px
    @include mobile{}
    // 512px
    @include smallmobile{
    }
    // 414px
    @include plusMobile{}
    // 320px
    @include miniMobile{
    }
}
.clip-path {
    width: 100%;
  height: 400px;
-webkit-clip-path: ellipse(69% 77% at 50% 80%);
clip-path: ellipse(69% 77% at 50% 80%);
    // 992px
    @include pc{
  }
    // 768px
    @include pad{
    height: 200px;
    }
    // 630px
    @include mobile{}
    // 512px
    @include smallmobile{
    height: 150px;
    }
    // 414px
    @include plusMobile{}
    // 320px
    @include miniMobile{
    height: 120px;
    }
}
.cp-Triangle {
  height: 200px;
  width: 200px;
  background-color: #ffffff;
-webkit-clip-path: polygon(50% 0%, 82% 99%, 66% 0);
clip-path: polygon(50% 0%, 82% 99%, 66% 0);
    // 992px
    @include pc{}
    // 768px
    @include pad{
    height: 150px;
    width: 150px;
    }
    // 630px
    @include mobile{}
    // 512px
    @include smallmobile{}
    // 414px
    @include plusMobile{}
    // 320px
    @include miniMobile{}
}
.stripe-one{
    position: absolute;
    top:-8px;
    left: 15%;
    // 992px
    @include pc{}
    // 768px
    @include pad{
    top:-8px;
    }
    // 630px
    @include mobile{
    left: 8%;
    }
    // 512px
    @include smallmobile{
    left: 4%;
    }
    // 414px
    @include plusMobile{
    left: 1%;
    top:-22px;
    }
    // 320px
    @include miniMobile{
    left: -15%;
    top:-50px;
    }
}
.stripe-two{
    position: absolute;
    top:-32px;
    left: 40%;
    // 992px
    @include pc{}
    // 768px
    @include pad{
    top:-15px;
    left: 36%;
    }
    // 630px
    @include mobile{
    left: 37%;
    }
    // 512px
    @include smallmobile{
    left: 33%;
    }
    // 414px
    @include plusMobile{
    top:-28px;
    left: 28%;
    }
    // 320px
    @include miniMobile{
    top:-52px;
    left: 16%;
    }
}
.stripe-three{
    position: absolute;
    top:-24px;
    left: 65%;
    // 992px
    @include pc{}
    // 768px
    @include pad{
    top:-19px;
    left: 58%;
    }
    // 630px
    @include mobile{
    top:-33px;
    }
    // 512px
    @include smallmobile{
    left: 60%;
    }
    // 414px
    @include plusMobile{
    left: 55%;
    }
    // 320px
    @include miniMobile{
    top:-52px;
    left: 47%;
    }
}
</style>
