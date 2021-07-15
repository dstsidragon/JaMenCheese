<template>
  <div class="mt_navbar">
          <!-- 跑馬燈元件  start-->
          <Marquee />
          <!-- 跑馬燈元件  end-->
          </div>
              <div class="banner   d-flex justify-content-center align-items-center">
        <div class="text-white  bg-img-transparent rounded p-2 ">
          <h2 class="text-center fz-2 fz-md-4">限時活動</h2>
          <p class="fz-0 fz-md-1">少許的主動就可以使你生活中的運氣大增</p>
        </div>
         </div>
  <div class="bg-lightPrimary">
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
// 跑馬燈元件
import Marquee from '@/components/Marquee.vue';

export default {
  components: {
    // 跑馬燈元件
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
              src: 'https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__22-128.png',
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
              src: 'https://cdn3.iconfinder.com/data/icons/emoji-1-4/64/_happy_smiley-128.png',
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
              src: 'https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__3-128.png',
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
              src: 'https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__22-128.png',
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
              src: 'https://cdn4.iconfinder.com/data/icons/emoji-18/61/2-128.png',
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
              src: 'https://cdn4.iconfinder.com/data/icons/emoji-18/61/3-128.png',
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
  mounted() {},
  methods: {
    startCallBack() {
      this.prizeName = '祝你中獎';
      this.$refs.LuckyWheel.play();
      setTimeout(() => {
        // eslint-disable-next-line no-bitwise
        this.$refs.LuckyWheel.stop((Math.random() * 8) >> 0);
      }, 3000);
    },
    endCallBack(prize) {
      this.prizeName = prize.name;
      // 刷新獎項紀錄
      this.refushPrizeName();
    },
    refushPrizeName() {
      // console.log(this.prizeName);
      // console.log(this.prizeAry);
      if (this.prizeAry.length < 5) {
        this.prizeAry.push(this.prizeName);
      } else {
        this.prizeAry.shift();
        this.prizeAry.push(this.prizeName);
      }
      // console.log(this.prizeAry);
    },
  },
};
</script>

<style lang="scss" scoped>

.banner{
  background: center center   no-repeat
  url('https://images.unsplash.com/photo-1506224477000-07aa8a76be20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
  height: 340px;
  background-size: cover;
  background-attachment: fixed;
}

@media(max-width:768px){
  .banner{
  height: 170px;
}
}
</style>
