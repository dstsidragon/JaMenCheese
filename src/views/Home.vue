<template>
  <!-- scrollToTop start-->
  <ScrollToTop />
  <!-- scrollToTop end-->

  <!-- Navbar元件 start-->
  <Navbar />
  <!-- Navbar元件 end-->

  <router-view />

  <!-- Footer元件 start-->
  <Footer />
  <!-- Footer元件 end-->
</template>
<script>
import ScrollToTop from '@/components/ScrollToTop.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    // Navbar元件
    Navbar,
    // ScrollToTop元件
    ScrollToTop,
    // Footer元件
    Footer,
  },
};
</script>
