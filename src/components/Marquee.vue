<template>
<div class="overflow-hidden h-28">
  <h2 class="text-white bg-primary fz-2 " v-text="msg" ></h2>
  </div>
</template>
<style lang="scss" scoped>
.h-28{
    height: 28px;
}
</style>
<script>
export default {
  data() {
    return {
      msg: '慶開幕，開幕期間，全館商品皆九折，超級優惠碼[super9]。',
      intervalId: null,
    };
  },
  methods: {
    lang() {
      if (this.intervalId != null) return;
      this.intervalId = setInterval(() => {
        const start = this.msg.substring(0, 1);
        const end = this.msg.substring(1);
        this.msg = end + start;
      }, 300);
    },

    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
  },
  created() {
    this.lang();
  },
};
</script>
