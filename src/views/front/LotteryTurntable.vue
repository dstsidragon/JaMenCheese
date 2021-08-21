<template>
  <div class="mt-navbar">
    <Marquee />
  </div>
  <header class="banner d-flex justify-content-center align-items-center">
    <div class="text-white bg-img-transparent rounded p-2">
      <h2 class="text-center fz-2 fz-md-4">限時活動</h2>
      <p class="fz-0 fz-md-1">少許的主動就可以使你生活中的運氣大增</p>
    </div>
  </header>
  <div >
    <div class="g-0 g-md-2 container-md py-5">
      <div
        class="
          d-flex
          justify-content-center justify-content-md-between
          row
          g-0 g-md-2
        "
      >
        <LuckyWheel
          ref="LuckyWheel"
          class="cursor-pointer col-md-6 g-0"
          width="300px"
          height="300px"
          :prizes="prizes"
          :default-style="defaultStyle"
          :blocks="blocks"
          :buttons="buttons"
          @start="startCallBack"
          @end="endCallBack"
        />
        <div class="col-md-6 mt-2 mt-md-0">
          <div class="border bg-white">
            <h2 class="bg-primary text-white py-1">獎項資訊</h2>
            <p class="fz-2 text-primary">{{ prizeName }}</p>
          </div>
          <table class="table table-dark table-hover mt-2">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">獎項紀錄</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in prizeAry" :key="i">
                <th scope="row">{{ i + 1 }}</th>
                <td>{{ item }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Marquee from '@/components/Marquee.vue';

export default {
  components: {
    Marquee,
  },
  data() {
    return {
      prizeName: '祝你中獎',
      prizeAry: [],
      width: 300,
      height: 300,
      blocks: [
        {
          padding: '13px',
          background: 'rgba(127, 86, 37, 1)',
        },
      ],
      prizes: [
        {
          name: '再接再厲!',
          background: '#f9e3bb',
          fonts: [
            {
              text: '銘謝惠顧',
              top: '13%',
            },
          ],
          imgs: [
            {
              width: '30%',
              src: 'https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627383780992.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jwuFze1F6awE%2Fwg0C2Cfbt%2F01c%2BS%2Btdi14TtXVDQggpgnDA4PPCeZULZb8CJoiqBFTH%2Fdn6Ps85UJEaPHZyLr1Kmmckj3XxHF3a1s8sm%2FPHg8nb8TkxEmUpDEIgSVyhXdj%2BTeipTHbMoSF38PPgoZ%2B8OHT6oFQm5L5uHI%2BFNInUbcmp2fiNDPngxIQ2EAe%2Fj1lD2RR7mlEiYWeuEE3AozNWrhvs7j3MxwYLDQJqnz4XFrS94L11VAlOs8lDlQvrBUOJeNFwy2rLekoU5z4WRXaWI%2Fo5ekZNSrZqqXcQJVIfYRJR4ZH0feSveNSO8L%2BwwjYDu4gRFIl5pA1Mp9hubEw%3D%3D',
              top: '35%',
            },
          ],
        },
        {
          name: '恭喜你獲得7折優惠碼[papapa7]',
          background: '#f8d384',
          fonts: [
            {
              text: '狂打7折',
              top: '13%',
            },
          ],
          imgs: [
            {
              width: '30%',
              src: 'https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627383820144.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P4lE9Wb2bOCrvIOGH8IS1UK4YDySfOt0nj3g9Z%2Fc80ijQZIxKwSPE6OtGVuocvF2nMCfjzNt47iAQaICEuyxcQR4T%2FkfP2onuFjiHAybH1EY87geo%2B8p%2Fc8cYTqWXHqKvmiBaz3bDJrOPSAmISX0pvw8X4oyrsVSBsiBydTP%2FFQ0I1XleMCGmKxHCxJsxp2cYDILgrxUq2hab0l%2B5v4MDDSfJzc1EdjbzBrK55ateaCwmuy%2BYUmBCrKPvWrDHUMyNDODMH5a3zON9qmkBZV9NTVOIwNK6shLG88dYhKgHl1KU8zMZV%2F8avJIutJRcWPbB4tHHdL9fKLjb90gN9ZWbg%3D%3D',
              top: '35%',
            },
          ],
        },
        {
          name: '恭喜你獲得87折優惠碼[pa87la]',
          background: '#f9e3bb',
          fonts: [
            {
              text: '打87折',
              top: '13%',
            },
          ],
          imgs: [
            {
              width: '30%',
              src: 'https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627383820144.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P4lE9Wb2bOCrvIOGH8IS1UK4YDySfOt0nj3g9Z%2Fc80ijQZIxKwSPE6OtGVuocvF2nMCfjzNt47iAQaICEuyxcQR4T%2FkfP2onuFjiHAybH1EY87geo%2B8p%2Fc8cYTqWXHqKvmiBaz3bDJrOPSAmISX0pvw8X4oyrsVSBsiBydTP%2FFQ0I1XleMCGmKxHCxJsxp2cYDILgrxUq2hab0l%2B5v4MDDSfJzc1EdjbzBrK55ateaCwmuy%2BYUmBCrKPvWrDHUMyNDODMH5a3zON9qmkBZV9NTVOIwNK6shLG88dYhKgHl1KU8zMZV%2F8avJIutJRcWPbB4tHHdL9fKLjb90gN9ZWbg%3D%3D',
              top: '35%',
            },
          ],
        },
        {
          name: '哭哭喔~',
          background: '#f8d384',
          fonts: [
            {
              text: '別想打折',
              top: '13%',
            },
          ],
          imgs: [
            {
              width: '30%',
              src: 'https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627383780992.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jwuFze1F6awE%2Fwg0C2Cfbt%2F01c%2BS%2Btdi14TtXVDQggpgnDA4PPCeZULZb8CJoiqBFTH%2Fdn6Ps85UJEaPHZyLr1Kmmckj3XxHF3a1s8sm%2FPHg8nb8TkxEmUpDEIgSVyhXdj%2BTeipTHbMoSF38PPgoZ%2B8OHT6oFQm5L5uHI%2BFNInUbcmp2fiNDPngxIQ2EAe%2Fj1lD2RR7mlEiYWeuEE3AozNWrhvs7j3MxwYLDQJqnz4XFrS94L11VAlOs8lDlQvrBUOJeNFwy2rLekoU5z4WRXaWI%2Fo5ekZNSrZqqXcQJVIfYRJR4ZH0feSveNSO8L%2BwwjYDu4gRFIl5pA1Mp9hubEw%3D%3D',
              top: '35%',
            },
          ],
        },
        {
          name: '恭喜你獲得67折優惠碼[67happy]',
          background: '#f9e3bb',
          fonts: [
            {
              text: '打67折',
              top: '13%',
            },
          ],
          imgs: [
            {
              width: '30%',
              src: 'https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627383758821.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qkQWPOjk88LJdK3ACJf8H1%2BLP3MkAiREVyJ6xsDlauebv7rI7Xd17ijlXaePl57LkaPJczwsObnk6gA3U6GsRJ6Pilfsi1Q6fym5brZWaM%2BuhgtLqMAdBpqQSsBu%2Bc7DS1wW3sE8e8ascoxHKv7jpyo5NnpnrgQUzEdBe8Xl4xWFcrwunZ18N1eFwhGh%2BUB6TATo2XVE27RwTO%2F0E9D%2F%2B1gbgGZOUNKWOLyVcXroHV%2FFTehfV4QCWJtZhKX%2B5lo1suiJQvEwyTseoMt6BiJNpesL%2FgoLq4GAdUHDkNCSak6uSfg%2BsYHpoxz73oZgpj1Q6LDXnG2cfTlUP5KtH57QUg%3D%3D',
              top: '35%',
            },
          ],
        },
        {
          name: '恭喜你獲得5折優惠碼[ohmygod]',
          background: '#f8d384',
          fonts: [
            {
              text: '全館半價',
              top: '13%',
            },
          ],
          imgs: [
            {
              width: '30%',
              src: 'https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627383729947.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eAYNHp2kO4gdGdPnTPjuJOY%2BHOdLFQ8AD6u3zMVDBs4ZGU1CJ7XeYWxlbv6Xw4mbm1Whr1n5kODtOunvGsT6ygunmAbhpJqpz15TR4w3eFPEhqJnRut0mapA922YvpCRPb6QXX1eRyVIusQl0qe%2BL3EDHSGumX5AMp%2BJw3SNGiKgdzQ7Gdl0YloagOeNsYYK%2FVmL0X8XfnGMeHs0O7PRmJ7gZdN5o0%2FdwSt3Wamk5PHGZiGH6d0khR0WR0iFjNTPtElPmb2xNo1YHZElzqu4HcjqjgBAWqHxyUFc7iV3iSJQnCNl%2BggzOgY%2BfgEvewCkcf5xkpzJV34WJ0e9xCllrw%3D%3D',
              top: '35%',
            },
          ],
        },
      ],
      buttons: [
        {
          radius: '50px',
          background: '#d64737',
          pointer: true,
        },
        {
          radius: '45px',
          background: '#fff',
        },
        {
          radius: '41px',
          background: '#f6c66f',
          pointer: true,
        },
        {
          radius: '35px',
          background: '#ffdea0',
        },
        {
          radius: '35px',
          background: '#ffdea0',
          fonts: [
            {
              text: '開始\n抽獎',
              top: '-20px',
              fontColor: '#7f5625 ',
              fontSize: '20px',
              fontWeight: '700',
              fontStyle: 'Arial, Helvetica, sans-serif',
            },
          ],
        },
      ],
      defaultStyle: {
        fontColor: '#7f5625 ',
        fontSize: '18px',
        fontWeight: '700',
        fontStyle: 'Arial, Helvetica, sans-serif',
      },
    };
  },
  methods: {
    startCallBack() {
      this.prizeName = '祝你中獎';
      this.$refs.LuckyWheel.play();
      setTimeout(() => {
        this.$refs.LuckyWheel.stop(Math.random() * 8 > 0);
      }, 3000);
    },
    endCallBack(prize) {
      this.prizeName = prize.name;
      this.refushPrizeName();
    },
    refushPrizeName() {
      if (this.prizeAry.length < 5) {
        this.prizeAry.push(this.prizeName);
      } else {
        this.prizeAry.shift();
        this.prizeAry.push(this.prizeName);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin/_mixin';

.banner {
  background: center center no-repeat
    url('https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627383685067.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Z2yPuKZcgVIt9P0L77ro0mGj2iJFrY%2FyqH0uKuRhYw93XD%2Ft3w8p0jZhA9PMUCd0mMDZNIqcoSMamOSbbMRkkqT%2F20XNtmRrLy1qN3RnE8A9u1WfPWlnV8H00VH8gB0rx754n0kLw%2F0c84k3Q7W0uFlGYOduxnScNyN9owOuHbvCpciA97mGRhQbKhwPybhZ1uXowMmtCPkOIvl%2BtMMdrFOEwfY0JERaOcghqiDZ3U2jHML0E87lucJ286tf0cdCH21U2Xsun3D5Tu6YLcLSmwRKYdrXTil2uCZI9%2BelcKNX5TiwxQ5da0oFckF3CDLAFpzjZWWV5oCSKKUpMMLHgw%3D%3D');
  height: 340px;
  background-size: cover;
  background-attachment: fixed;
  @include pad {
    height: 170px;
  }
}
</style>
