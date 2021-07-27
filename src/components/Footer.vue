<template>
  <div class="bg-primary position-relative clip-path mt-5">
    <div class="cp-Triangle stripe-one" />
    <div class="cp-Triangle stripe-two" />
    <div class="cp-Triangle stripe-three" />
  </div>
  <div class="bg-primary w-100 py-2">
    <div class="container d-flex justify-content-around align-items-center">
      <img
        class="logo d-none d-sm-block"
        src="@/assets/images/logo-white.svg"
        alt="logo"
      />
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
        <ul class="d-flex justify-content-around align-items-center">
          <li>
            <!-- 貼FACEBOOK 網址會跳警告 -->
            <a href="https://tw.yahoo.com/?fr=fptb-yie8">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627389885638.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=N8mdWId6WZKEPrKsipNl%2FDOTPei3xVsk32iz7kv3imqaWIm%2BeGjjnRM8JiMqV5UcX8Y1DJlMgzfNw8SZxrWjLkrXcpLnYqXnv94UlY4dGnLl8%2Byea3%2Fo9Qicp6Zn7KO9qTBO0scErXsHh9J9%2BkmyzoKL4ejxFUq720l8MCGjVsycEzQE3OsTZgIuBu3h1ECXP0UDoDtR6l3KB8qK%2BGUiNU4ga0CTDnK53Giy6xM1XI7on4OYoVgZLotwkcdM%2Fyc62kOXdWo5WaPuKbczcJAsC4u2qZIyUPJbZXSxL6HuFhi8FI8TXoHQcrko2IqDuZoKGqMhM3ep3pj1Z%2BK6KKECng%3D%3D"
                style="width: 32px; height: 32px"
                alt="facebook"
              />
            </a>
          </li>
          <li>
            <a href="https://tw.yahoo.com/?fr=fptb-yie8">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627389703272.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pQIlnF2PnM3fuMfy%2Bi6T3ny9yrefgRKUa15saWWjWTMj5RpV5gAa50Za%2B7z3hQ%2BMEoNMdbwqMYQPF0Zud7Ri20UrbU9WX7btPcEfghX29nfjwruAg4e8oq6e4Nv4lcLR9QdDkEvY1dxcxwPYf7PhPBJwiPrNytn%2F%2FLMEQRGgDs8dQopMLQBsmIknUYFo%2FLEUJMEQRw%2FCPIsBoOEco9LIM5TY4w3AdodPMIJJwEt2%2BJGxGgJrPAmb8qJQWggXZF00G%2B0HKM2jAOOuBarmGOQFlLx1XSD9yfnTcyV5a32h8Achw7PsfOJ0RlcO1bY%2F%2BTpauIriZciGP2msAMffDCYoUQ%3D%3D"
                style="width: 32px; height: 32px"
                alt="line"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/dstsidragon/JaMenCheese">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627389638837.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=F4uptmK8SbSP2xLkl%2FLWzohJ0%2BgPpTbu6nF2sH449V37nkS2Ks1vjuLjziRv4d6LIGOPoun7r8MEy6melb27y01Nv3MgV065GKW18LSzzCsDv1HWnCBZ7QWt7%2F%2FePyh6v1S39qcyyeUm5ofyAn7AQT0V1cyxVEaLqGiq2qtWg43feial9ua2BYssf6CmYIhi9PJxpQzj9q2m8fHWcDIROn0PITI9ZsKu3uTGTg2oTotjNcqHXbtYXp6TAYHrhq%2BYA%2BQZC02qUBCc1AcDnyPicQejtXhnN7B6KznD3mw2grLvmJcORDyzhSIUN34QJdya4vQfnW%2FKBVJWmRebgHDZDA%3D%3D"
                style="width: 32px; height: 32px"
                alt="GITHUB"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/scss/mixin/mixin';

.logo {
  width: 150px;
  height: 150px;
  // 992px
  @include pc {
  }
  // 768px
  @include pad {
  }
  // 630px
  @include mobile {
  }
  // 512px
  @include smallmobile {
  }
  // 414px
  @include plusMobile {
  }
  // 320px
  @include miniMobile {
  }
}
.clip-path {
  width: 100%;
  height: 400px;
  -webkit-clip-path: ellipse(69% 77% at 50% 80%);
  clip-path: ellipse(69% 77% at 50% 80%);
  // 992px
  @include pc {
  }
  // 768px
  @include pad {
    height: 200px;
  }
  // 630px
  @include mobile {
  }
  // 512px
  @include smallmobile {
    height: 150px;
  }
  // 414px
  @include plusMobile {
  }
  // 320px
  @include miniMobile {
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
  @include pc {
  }
  // 768px
  @include pad {
    height: 150px;
    width: 150px;
  }
  // 630px
  @include mobile {
  }
  // 512px
  @include smallmobile {
  }
  // 414px
  @include plusMobile {
  }
  // 320px
  @include miniMobile {
  }
}
.stripe-one {
  position: absolute;
  top: -8px;
  left: 15%;
  // 992px
  @include pc {
  }
  // 768px
  @include pad {
    top: -8px;
  }
  // 630px
  @include mobile {
    left: 8%;
  }
  // 512px
  @include smallmobile {
    left: 4%;
  }
  // 414px
  @include plusMobile {
    left: 1%;
    top: -22px;
  }
  // 320px
  @include miniMobile {
    left: -15%;
    top: -50px;
  }
}
.stripe-two {
  position: absolute;
  top: -32px;
  left: 40%;
  // 992px
  @include pc {
  }
  // 768px
  @include pad {
    top: -15px;
    left: 36%;
  }
  // 630px
  @include mobile {
    left: 37%;
  }
  // 512px
  @include smallmobile {
    left: 33%;
  }
  // 414px
  @include plusMobile {
    top: -28px;
    left: 28%;
  }
  // 320px
  @include miniMobile {
    top: -52px;
    left: 16%;
  }
}
.stripe-three {
  position: absolute;
  top: -24px;
  left: 65%;
  // 992px
  @include pc {
  }
  // 768px
  @include pad {
    top: -19px;
    left: 58%;
  }
  // 630px
  @include mobile {
    top: -33px;
  }
  // 512px
  @include smallmobile {
    left: 60%;
  }
  // 414px
  @include plusMobile {
    left: 55%;
  }
  // 320px
  @include miniMobile {
    top: -52px;
    left: 47%;
  }
}
</style>
