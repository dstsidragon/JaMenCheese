<template>
  <div class="vld-parent">
    <Loading v-model:active="isLoading">
      <h1 class="m-l6">
        <span class="text-wrapper">
          <span class="letters shine-font">Loading...</span>
        </span>
      </h1>
      <div class="loading-spinner scale">
        <div class="ldio">
          <div>
            <div />
            <div />
            <div />
          </div>
          <div>
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </Loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import anime from 'animejs';

export default {
  props: ['isVueLoading'],
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    Loading,
  },
  watch: {
    isVueLoading() {
      this.isLoading = this.isVueLoading;
    },
  },
  mounted() {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.m-l6 .letter',
        translateY: ['1.1em', 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i,
      })
      .add({
        targets: '.m-l6',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  },
};
</script>

<style style lang="scss">
@import '../assets/scss/mixin/mixin';

.m-l6 {
  position: relative;
  font-weight: 900;
  font-size: 3.3em;
}
// 文字閃耀
.shine-font {
  animation: change 1s ease-in infinite;
  font-size: 36px;
  color: #774023;
  font-weight: bold;
}
@keyframes change {
  0% {
    text-shadow: 0 0 4px #774023;
  }
  50% {
    text-shadow: 0 0 16px #774023;
  }
  100% {
    text-shadow: 0 0 4px #774023;
  }
}
.m-l6 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.m-l6 .letter {
  display: inline-block;
  line-height: 1em;
}
// 縮放
.scale {
  @include mobile {
    transform: scale(0.8);
  }
}
@keyframes ldio-1 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes ldio-2 {
  0% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(225deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
.ldio > div:nth-child(2) {
  transform: translate(-15px, 0);
}
.ldio > div:nth-child(2) div {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 120px;
  height: 60px;
  border-radius: 120px 120px 0 0;
  background: #774023;
  animation: ldio-1 1s linear infinite;
  transform-origin: 60px 60px;
}
.ldio > div:nth-child(2) div:nth-child(2) {
  animation: ldio-2 1s linear infinite;
}
.ldio > div:nth-child(2) div:nth-child(3) {
  transform: rotate(-90deg);
  animation: none;
}
@keyframes ldio-3 {
  0% {
    transform: translate(190px, 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translate(70px, 0);
    opacity: 1;
  }
}
.ldio > div:nth-child(1) {
  display: block;
}
.ldio > div:nth-child(1) div {
  position: absolute;
  top: 92px;
  left: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #d88c51;
  animation: ldio-3 1s linear infinite;
}
.ldio > div:nth-child(1) div:nth-child(1) {
  animation-delay: -0.67s;
}
.ldio > div:nth-child(1) div:nth-child(2) {
  animation-delay: -0.33s;
}
.ldio > div:nth-child(1) div:nth-child(3) {
  animation-delay: 0s;
}
.loading-spinner {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
}
.ldio {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio div {
  box-sizing: content-box;
}
</style>
