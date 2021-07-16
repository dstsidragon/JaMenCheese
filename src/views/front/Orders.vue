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

<router-view/>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/mixin/_mixin';

.banner {
  background: center center no-repeat
    url('https://images.unsplash.com/photo-1608679627228-a8393e0f3fa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
  height: 340px;
  background-size: cover;
  background-attachment: fixed;
  @include pad {
    height: 170px;
    background-attachment: unset;
  }
}
</style>
