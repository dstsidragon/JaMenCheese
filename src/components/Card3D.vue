<template>

  <div class="section over-hide ">
    <div class="container">
      <div class="row full-height justify-content-center">
        <div class="col-12 text-center align-self-center py-5">
          <div class="section text-center py-5 py-md-0">
            <input
              class="pricing"
              type="checkbox"
              id="pricing"
              name="pricing"
            />
            <label for="pricing"
              ><span class="block-diff"
                >本店主打<span class="float-end">招牌飲品</span></span
              ></label
            >
            <div class="card-3d-wrap mx-auto">
              <div class="card-3d-wrapper">
                <div class="card-front">
                  <div class="pricing-wrap">
                    <h4 class="mb-5">呷面起士</h4>
                    <h2 class="mb-2"><sup>$</sup>65 / 1<sup>入</sup></h2>
                    <p class="mb-4 fz-1">經典麵包</p>
                    <p class="mb-4 fz-1">店內招牌商品</p>
                    <a href="#0" class="btn btn-info text-white fz-2"
                    @click.prevent="$router.push('/product/-Mek1km57DVyzSxtPuIj')">查看商品</a>
                    <div class="img-wrap img-2">
                      <img
                        src="@/assets/images/bgPon.png"
                        alt="bgPon"
                      />
                    </div>
                    <div class="img-wrap img-1">
                      <img
                        src="@/assets/images/pon4.png"
                        alt="pon4"
                      />
                    </div>
                    <div class="img-wrap img-3">
                      <img
                        src="@/assets/images/hotdog.png"
                        alt="hotdog"
                      />
                    </div>
                    <div class="img-wrap img-6">
                      <img
                        src="@/assets/images/cheese.png"
                        alt="cheese"
                      />
                    </div>
                  </div>
                </div>
                <div class="card-back">
                  <div class="pricing-wrap">
                    <h4 class="mb-5">真．鮮</h4>
                    <h2 class="mb-2"><sup>$</sup>3,000 / 1<sup>杯</sup></h2>
                    <p class="mb-4 fz-1">特調飲品</p>
                    <p class="mb-4 fz-1">請立即飲用，風味最佳</p>
                    <a href="#" class="btn btn-success fz-2"
                     @click.prevent="$router.push('/product/-MejU8d8FSlrkDjPrmQt')">查看商品</a>
                    <div class="img-wrap img-2">
                      <img
                        src="@/assets/images/grass.png"
                        alt="grass"
                      />
                    </div>
                    <div class="img-wrap img-4">
                      <img
                        src="@/assets/images/cow.png"
                        alt="cow"
                      />
                    </div>
                    <div class="img-wrap img-5">
                      <img
                        src="@/assets/images/Ivy.png"
                        alt="Ivy"
                      />
                    </div>
                    <div class="img-wrap img-7">
                      <img
                        src="@/assets/images/milk.png"
                        alt="milk"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/mixin/_mixin';

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

:root {
  font-size: 20px;
}
body {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.7;
  color: #102770;
  background-color: #ffeba7;
  overflow-x: hidden;
}
a {
  cursor: pointer;
  transition: all 200ms linear;
}
a:hover {
  text-decoration: none;
}
.link {
  color: #c4c3ca;
}
.link:hover {
  color: #ffeba7;
}
.over-hide {
  overflow: hidden;
}
.size-22 {
  font-size: 22px;
}
.section {
  position: relative;
  width: 100%;
  z-index: 1;
  display: block;
}
.full-height {
  min-height: 100vh;
}
[type='checkbox']:checked,
[type='checkbox']:not(:checked) {
  position: absolute;
  left: -9999px;
}
.pricing:checked + label,
.pricing:not(:checked) + label {
  position: relative;
  display: block;
  text-align: center;
  width: 260px;
  height: 44px;
  border-radius: 4px;
  padding: 0;
  margin: 0 auto;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 44px;
  padding: 0 25px;
  padding-right: 27px;
  overflow: hidden;
  color: #fff;
  text-align: left;
  border:1px solid #102770;
}
.pricing:checked + label:before,
.pricing:not(:checked) + label:before {
  position: absolute;
  content: '';
  z-index: -2;
  background-color: #ffeba7  ;
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
}
.pricing:checked + label:after,
.pricing:not(:checked) + label:after {
  position: absolute;
  content: '';
  z-index: -1;
  background-color: #102770;
  width: 128px;
  height: 40px;
  display: block;
  top: 2px;
  left: 2px;
  border-radius: 2px;
  transition: left 300ms linear;
}
.pricing:checked + label:after {
  left: 130px;
}
.block-diff {
  display: block;
  mix-blend-mode: difference;
}

.card-3d-wrap {
  position: relative;
  width: 340px;
  max-width: calc(100% - 20px);
  height: 510px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 1000px;
  margin-top: 90px;
}
.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: transform 700ms 400ms ease-out;
}
.card-front,
.card-back {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0 12px 35px 0 rgba(16, 39, 112, 0.07);
}
.card-back {
  transform: rotateY(180deg);
}
.pricing:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
  transition: transform 700ms 400ms ease-out;
}
.pricing-wrap {
  position: relative;
  padding-top: 160px;
  width: 100%;
  display: block;
  z-index: 1;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.pricing-wrap h4 {
  position: relative;
  width: 100%;
  display: block;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 22px;
  line-height: 1.7;
  color: #102770;
  transform: translate3d(0, 0, 35px) perspective(100px);
}
.pricing-wrap h4:before {
  position: absolute;
  content: '';
  z-index: -1;
  background: linear-gradient(217deg, #448ad5, #b8eaf9);
  width: 70px;
  height: 70px;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 6px 20px 0 rgba(16, 39, 112, 0.3);
  animation: border-transform 6s linear infinite;
}
.card-back .pricing-wrap h4:before {
  background: linear-gradient(217deg, #648946, #a3c984);
}
@keyframes border-transform {
  0%,
  100% {
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  }
  14% {
    border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
  }
  28% {
    border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
  }
  42% {
    border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
  }
  56% {
    border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
  }
  70% {
    border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
  }
  84% {
    border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
  }
}
.pricing-wrap h2 {
  position: relative;
  width: 100%;
  display: block;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 36px;
  line-height: 1.1;
  color: #102770;
  transform: translate3d(0, 0, 30px) perspective(100px);
}
.pricing-wrap h2 sup {
  font-size: 20px;
}
.pricing-wrap p {
  position: relative;
  width: 100%;
  display: block;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: #102770;
  transform: translate3d(0, 0, 30px) perspective(100px);
}
.card-back h2,
.card-back p,
.card-back h4 {
  color: #0c1c00;
}
.link {
  position: relative;
  padding: 10px 20px;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
  color: #ffeba7;
  background-color: #102770;
  transition: all 200ms linear;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  transform: translate3d(0, 0, 30px) perspective(100px);
}
.link:hover {
  color: #102770;
  background-color: #ffeba7;
}
.card-back .link {
  background-color: #0c1c00;
}
.card-back .link:hover {
  color: #0c1c00;
  background-color: #ffeba7;
}
.img-wrap img {
  width: 100%;
  height: auto;
  display: block;
}
.img-1 {
  position: absolute;
  display: block;
  left: -152px;
  top: -78px;
  z-index: 5;
  width: calc(50% + 100px);
  transform: translate3d(0, 0, 45px) perspective(100px);
  opacity: 1;
  pointer-events: auto;
  transition: transform 400ms 1200ms ease, opacity 400ms 1200ms ease;
  @include pad{
  left: -107px;
  top: -75px;
  width: calc(45% + 100px);
  }
  @include mobile{
  left: -27px;
  top: -55px;
  width: calc(45% + 50px);
  }
  @include plusMobile{
  left: -14px;
  top: -71px;
  width: calc(50% + 50px);
  }
}
.pricing:checked ~ .card-3d-wrap .card-3d-wrapper .img-1 {
  opacity: 0;
  transform: translate3d(-50px, 25px, 45px) perspective(100px);
  pointer-events: none;
  transition: transform 400ms ease, opacity 200ms 150ms ease;
}
.img-2 {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  z-index: 1;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
  width: 100%;
  transform: translate3d(0, 0, 15px) perspective(100px);
}
.img-3 {
  position: absolute;
  display: block;
  right: -65px;
  top: -48px;
  z-index: 5;
  width: calc(70% + 20px);
  transform: translate3d(0, 0, 55px) perspective(100px) scale(1);
  opacity: 1;
  pointer-events: auto;
  transition: transform 300ms 1300ms ease, opacity 200ms 1300ms ease;
  @include smallmobile{
  right: -18px;
  top: -7px;
  width: calc(50% + 20px);
  }
}
.pricing:checked ~ .card-3d-wrap .card-3d-wrapper .img-3 {
  opacity: 0;
  transform: translate3d(-50px, 5px, 55px) perspective(100px) scale(0.4);
  pointer-events: none;
  transition: transform 400ms ease, opacity 200ms 150ms ease;
}
.img-6 {
  position: absolute;
  display: block;
  right: -36px;
  bottom: -55px;
  z-index: 5;
  width: calc(30% + 30px);
  transform: translate3d(0, 0, 25px) perspective(100px) scale(1);
  opacity: 1;
  pointer-events: auto;
  transition: transform 300ms 1300ms ease, opacity 200ms 1300ms ease;
  @include plusMobile{
  right: -17px;
  bottom: -63px;
  width: calc(25% + 30px);
  }
}
.pricing:checked ~ .card-3d-wrap .card-3d-wrapper .img-6 {
  opacity: 0;
  transform: translate3d(0, 0, 25px) perspective(100px) scale(0.4);
  pointer-events: none;
  transition: transform 400ms ease, opacity 200ms 150ms ease;
}

.img-4 {
  position: absolute;
  display: block;
  left: -62px;
  top: -66px;
  z-index: 5;
  width: calc(40% + 60px);
  transform: translate3d(0, 0, 45px) perspective(100px) scale(0.5);
  opacity: 0;
  pointer-events: none;
  transition: transform 400ms ease, opacity 200ms 150ms ease;
  @include smallmobile{
    left: -13px;
        width: calc(30% + 60px);
    }
  @include  miniMobile{
    left: -19px;
    top: -49px;
  }
}
.pricing:checked ~ .card-3d-wrap .card-3d-wrapper .img-4 {
  opacity: 1;
  pointer-events: auto;
  transform: translate3d(0, 0, 45px) perspective(100px) scale(1);
  transition: transform 400ms 1200ms ease, opacity 300ms 1200ms ease;
}
.img-5 {
  position: absolute;
  display: block;
  right: -70px;
  top: -50px;
  z-index: 6;
  width: calc(60% + 70px);
  transform: translate3d(0, 0, 35px) perspective(100px) scale(0.5) rotate(0deg);
  opacity: 0;
  pointer-events: none;
  transition: transform 400ms 100ms ease, opacity 200ms 250ms ease;
  @include smallmobile{
        }
  @include  miniMobile{
  right: -52px;
  top: -50px;
  width: calc(55% + 70px);
  }
}
.pricing:checked ~ .card-3d-wrap .card-3d-wrapper .img-5 {
  opacity: 1;
  pointer-events: auto;
  transform: translate3d(0, 0, 35px) perspective(100px) scale(1) rotate(10deg);
  transition: transform 400ms 1300ms ease, opacity 300ms 1300ms ease;
}
.img-7 {
  position: absolute;
  display: block;
  right: -30px;
  bottom: -65px;
  z-index: 6;
  width: calc(25% + 30px);
  transform: translate3d(0, 0, 35px) perspective(100px) scale(0.5);
  opacity: 0;
  pointer-events: none;
  transition: transform 400ms 100ms ease, opacity 200ms 250ms ease;
  @include smallmobile{
  right: -20px;
        }
  @include  miniMobile{
  }
}
.pricing:checked ~ .card-3d-wrap .card-3d-wrapper .img-7 {
  opacity: 1;
  pointer-events: auto;
  transform: translate3d(0, 0, 35px) perspective(100px) scale(1);
  transition: transform 400ms 1300ms ease, opacity 300ms 1300ms ease;
}

</style>
