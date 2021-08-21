<template>
  <ScrollToTop />

  <Navbar />

  <RouterView />

  <Footer />
</template>
<script>
import ScrollToTop from '@/components/ScrollToTop.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    ScrollToTop,
    Footer,
  },
};
</script>
