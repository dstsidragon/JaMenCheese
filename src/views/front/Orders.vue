<template>
  <div
    class="banner mt_navbar d-flex justify-content-center align-items-center"
  >
    <div class="text-white bg-img-transparent rounded p-2">
      <h2 class="text-center fz-2 fz-md-4">訂單搜尋</h2>
      <p class="fz-0 fz-md-1">
        美食家把錢包放進肚子裏，而吝嗇鬼把肚子放在錢包裏
      </p>
    </div>
  </div>

  <router-view />
</template>
<style lang="scss" scoped>
@import '@/assets/scss/mixin/_mixin';

.banner {
  background: center center no-repeat
    url('https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627383510445.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bx%2Fv0gqalpdLjo6MeN25JfBweCMcSWWZMOfbvwFy9wex30%2Bs5aBl2p7ky%2FT9Iuer1%2FhvT9ezwQMwYoGf%2BIyDevuOeJGyhih1OteizTdzh3g51RsYS5gOStGZS5IeN8zvr8cFfRBts3Ifagni%2FrNyaZWpUU48PxVRbiWOywyTkvtkhR0E58rtQoCmiSgYUAfe7KRLuMUMmY%2FRvwIzn8k4X%2Bj3yGPU8oZubZxDiFDBEZ8BnuLA2LhYI4Yenh%2FDBdZPiOFPMr1%2BWrORZBmnb9tM%2BJX%2FT2MCkYtlMNowmTj9OCpfwAbmb89uQVjDx1lU8fNCNBGwQby8xkXjFvPRfJvGow%3D%3D');
  height: 340px;
  background-size: cover;
  background-attachment: fixed;
  @include pad {
    height: 170px;
    background-attachment: unset;
  }
}
</style>
