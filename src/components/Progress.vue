<template>
  <div class="row position-relative pt-5">
    <ul
      class="offset-1 col-10 d-flex  justify-content-between
        align-items-center z-index-1020"
    >
      <li>
        <div class="rounded-pill border-primary border px-2 bg-white active">1</div>
      </li>
      <li>
        <div
          :class="{ active: cartstep > 1 }"
          class="rounded-pill border-primary border px-2 bg-white"
        >
          2
        </div>
      </li>
      <li>
        <div
          :class="{ active: cartstep > 2 }"
          class="rounded-pill border-primary border px-2 bg-white"
        >
          3
        </div>
      </li>
      <li>
        <div
          :class="{ active: cartstep > 3 }"
          class="rounded-pill border-primary border px-2 bg-white"
        >
          4
        </div>
      </li>
    </ul>
    <ul
      class="offset-1 col-10 d-flex gx-0
        align-items-center row"
    >
      <li class=" col-3 text-start">
        <div class=" text-primary fz-0">商品確認</div>
      </li>
      <li class="col-3 pe-sm-2 pe-md-4 pe-lg-5 pe-xl-7">
        <div v-if="cartstep > 1" class=" text-primary fz-0">運送&付款</div>
      </li>
      <li class="  col-3 ps-2 ps-ssm-3 ps-sm-4 ps-md-5 ps-xl-9">
        <div v-if="cartstep > 2" class=" text-primary fz-0">確認明細</div>
      </li>
      <li class="col-3 text-end pe-2">
        <div v-if="cartstep > 3" class=" text-primary fz-0">完成</div>
      </li>
    </ul>
    <div class="offset-1 col-10 progressbar">
      <div class="progress" style="height: 2px;">
        <div
          class="progress-bar"
          role="progressbar"
          :style="`width:${progress}%;`"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'cartstep',
  ],
  data() {
    return {
      progress: '',
    };
  },
  watch: {
    cartstep() {
      this.chkProgress();
    },
  },
  methods: {
    chkProgress() {
      if (this.cartstep === 1) {
        this.progress = 0;
      } else if (this.cartstep === 2) {
        this.progress = 33;
      } else if (this.cartstep === 3) {
        this.progress = 66;
      } else if (this.cartstep === 4) {
        this.progress = 100;
      } else {
        this.progress = 0;
      }
    },
  },
  mounted() {
    this.chkProgress();
  },
};
</script>

<style lang="scss" scoped>
.progressbar {
  position: absolute;
  top: 60px;
}
.active {
  background-color: #7f5625 !important;
  color: #ffffff;
}
</style>
