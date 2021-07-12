<template>
  <!-- scrollToTop start-->
  <div
    v-if="scrollToTop"
    class="
      scrollToTop
      border border-primary
      rounded-pill
      fz-4
      text-primary
      cursor-pointer
      material-icons
    "
    @click.prevent="toTop"
  >
    arrow_upward
  </div>
  <!-- scrollToTop end-->
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      // 顯示scrollToTop
      scrollToTop: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.winScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.winScroll);
  },
  methods: {
    // 回到頂部
    toTop() {
      $('html,body').animate(
        {
          scrollTop: 0,
        },
        700,
      );
    },
    winScroll() {
      const scroll = $(window).scrollTop();
      if (scroll >= 5) {
        this.scrollToTop = true;
      } else {
        this.scrollToTop = false;
      }
    },
  },
};
// 顯示scrollToTop
//   this.scrollToTop = false;
</script>
<style lang="scss" scoped>
.scrollToTop {
  position: fixed;
  bottom: 15%;
  right: 2%;
  z-index: 1050;
}
</style>
