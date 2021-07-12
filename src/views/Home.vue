<template>

  <!-- scrollToTop start-->
<ScrollToTop />
<!-- scrollToTop end-->

  <!-- Navbar元件 start-->
<Navbar />
  <!-- Navbar元件 end-->

<router-view/>
</template>
<script>
import ScrollToTop from '@/components/ScrollToTop.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    // Navbar元件
    Navbar,
    // ScrollToTop元件
    ScrollToTop,
  },
};
</script>

<style lang="scss">

</style>
