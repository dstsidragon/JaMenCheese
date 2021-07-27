<template>
  <div
    class="banner mt_navbar d-flex justify-content-center align-items-center"
  >
    <div class="text-white bg-img-transparent rounded p-2">
      <h2 class="text-center fz-2 fz-md-4">會員登入</h2>
      <p class="fz-0 fz-md-1">人生須知負責任的苦處，才能知道盡責任的樂趣。</p>
    </div>
  </div>

  <div class="mt-5">
    <div class="container rounded bg-light">
      <!-- 頁籤 -->
      <div class="row">
        <img
          class="col-6 d-none d-md-block"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627379482361.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=k4X8vbeMvFFpSiehNH6tYQVcTHx6m2%2B5V%2FA45OXAzAiN5K7HP8ol8Bch9COURdKQhPXRtNOL9%2FSAOvHfBrrvVWTs0gpb8WF2cdcuQWInmadjJGhcUZdr70krygrBEWThLlznLAsM35L4xaVoRGB242l7s%2BDZnNuQvtNaWt3j8YGfc9VRtySLbtrI1uPRXGxgF8KwMN9ZZoTNLYfTXVd1SLQvkrx%2FC%2Fzb3JFla7QVynfaQoU4pl26agIhvZZhUmxhY5WXpZeQmaQZ1gKNSQYyVr%2BtXXJRnvXVabJVP14OF366jBZ6kKbDg81wrsI6GbjRBFMC23d9CkIPf3WQ4Ndo4Q%3D%3D"
          alt="login-img"
        />
        <div class="col-md-6">
                <!-- 登入元件 -->
                <Login
                  ref="Login"
                  @login-emit="getLoginEmitData"
                  :statusprompt="statusPromptLogin"
                  :statu-bool="statuBoolLogin"
                  :login-in-fall-or-success="loginInFallOrSuccess"
                  :chk-menu="chkMenu"
                />
        </div>
      </div>
      <p class="mt-5 pb-3 text-muted text-center">&copy; {{ footer }}</p>
    </div>
  </div>
</template>
<script>
import Login from '@/components/LoginPart.vue';

export default {
  components: {
    Login,
  },
  data() {
    return {
      footer: '2021~∞ - 呷面起士',
      // 信箱
      username: '',
      // 密碼
      password: '',
      passwordRepit: '',
      // 註冊提示
      statusPromptSignup: '',
      // 登入提示
      statusPromptLogin: '',
      // 註冊狀態
      statuBoolSignup: '',
      // 登入狀態
      statuBoolLogin: '',
      // 註冊錯誤或成功
      signUpFallOrSuccess: '',
      // 登入錯誤或成功
      loginInFallOrSuccess: '',
      // 切換選單
      chkMenu: '',
    };
  },
  methods: {
    // 登入
    login() {
      // 信箱驗證
      const myreg = /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const adminInfo = {
        username: this.username,
        password: this.password,
      };

      if (
        this.username !== ''
        && myreg.test(this.username)
        && this.password !== ''
      ) {
        // 送出登入帳號資料做驗證
        this.$http
          .post(`${process.env.VUE_APP_API}/admin/signin`, adminInfo)
          .then((res) => {
            // 如果成功就執行
            if (res.data.success) {
              const [token, expired] = [res.data.token, res.data.expired];
              // res塞到data
              this.statusPromptLogin = `${res.data.message}!!`;
              this.statuBoolLogin = true;
              // 存到cookies
              document.cookie = `hexToken=${token}; expires=${new Date(
                expired,
              )};username=${this.username}`;
              document.cookie = `username=${
                this.username.split('@')[0]
              }; expires=${new Date(expired)};`;
              document.cookie = `email=${
                res.config.data.split('"')[3]
              }; expires=${new Date(expired)};`;
              // 跳轉頁面
              this.$router.push('/admin');
              // 傳入變化的時間 讓元件的watch監聽
              this.loginInFallOrSuccess = new Date();
            } else {
              // 密碼錯誤 清空密碼
              this.password = '';

              // res塞到data
              this.statusPromptLogin = `${res.data.message}!!請檢查帳號密碼!`;
              this.statuBoolLogin = false;
              // 傳入變化的時間 讓元件的watch監聽
              this.loginInFallOrSuccess = new Date();
            }
          })
          .catch((err) => {
            this.statusPromptLogin = `${err.data.message}!!請檢查帳號密碼!`;
            this.statuBoolLogin = false;
            // 傳入變化的時間 讓元件的watch監聽
            this.loginInFallOrSuccess = new Date();
          });
      } else {
        // 帳號密碼錯誤 清空帳號密碼錯誤
        this.username = '';
        this.password = '';

        // res塞到data
        this.statusPromptLogin = '帳號密碼錯誤!';
        this.statuBoolLogin = false;
        // 傳入變化的時間 讓元件的watch監聽
        this.loginInFallOrSuccess = new Date();
      }
    },
    // 取得loginEmit
    getLoginEmitData(e) {
      // 將取得的資料賦予到data
      this.username = e.username;
      this.password = e.password;

      // 登入
      this.login();
    },

    // 註冊
    signup() {
      // 信箱驗證
      const myreg = /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const adminInfo = {
        username: this.username,
        password: this.password,
        confirm_password: this.passwordRepit,
      };

      if (
        this.username !== ''
        && myreg.test(this.username)
        && this.password !== ''
        && this.passwordRepit !== ''
      ) {
        // 送出註冊帳號資料做驗證
        const url = `${process.env.VUE_APP_API}/signup`;
        this.$http
          .post(url, adminInfo)
          .then((res) => {
            // 如果成功就執行
            if (res.data.success) {
              // res塞到data
              this.statusPromptSignup = `${res.data.message}!!`;
              // 改變狀態顏色
              this.statuBoolSignup = true;

              // 傳入變化的時間 讓元件的watch監聽
              this.signUpFallOrSuccess = new Date();
            } else {
              // 密碼錯誤 清空密碼
              this.password = '';
              // res塞到data
              this.statusPromptSignup = `${res.data.message}!!請檢查帳號密碼!`;
              this.statuBoolSignup = false;
              // 傳入變化的時間 讓元件的watch監聽
              this.signUpFallOrSuccess = new Date();
            }
          })
          .catch((err) => {
            if (err.response.data.code === 'auth/weak-password') {
              // 帳號密碼錯誤 清空帳號密碼錯誤
              this.username = '';
              this.password = '';
              this.passwordRepit = '';
              // 把err塞到data
              this.statusPromptSignup = '密碼強度太弱!! 請填入6~20位英數字';
              this.statuBoolSignup = false;
              // 傳入變化的時間 讓元件的watch監聽
              this.signUpFallOrSuccess = new Date();
            } else if (err.response.data.code === 'auth/email-already-in-use') {
              // alert("帳號已經被使用!!")
              // 帳號密碼錯誤 清空帳號密碼錯誤
              this.username = '';
              this.password = '';
              this.passwordRepit = '';
              // 把err塞到data
              this.statusPromptSignup = '帳號已經被使用!!';
              this.statuBoolSignup = false;
              // 傳入變化的時間 讓元件的watch監聽
              this.signUpFallOrSuccess = new Date();
            }
          });
      } else {
        // alert("帳號格式錯誤!");
        // 帳號密碼錯誤 清空帳號密碼錯誤
        this.username = '';
        this.password = '';
        this.passwordRepit = '';
        // 把err塞到data
        this.statusPromptSignup = '輸入格式錯誤!!';
        this.statuBoolSignup = false;
        // 傳入變化的時間 讓元件的watch監聽
        this.signUpFallOrSuccess = new Date();
      }
    },
    // 取得signupEmit
    getSignupEmitData(e) {
      // 將取得的資料賦予到data
      this.username = e.username;
      this.password = e.password;
      this.passwordRepit = e.passwordRepit;

      // 註冊
      this.signup();
    },
    // 刷新表單
    chkMenuData() {
      // 刷新表單
      this.$refs.Login.$refs.loginForm.resetForm();
      this.$refs.Signup.$refs.signupForm.resetForm();
      this.$refs.ForgetPassword.$refs.forgetForm.resetForm();
    },
  },
};
</script>
<style lang="scss" scoped>
.banner {
  background: center center no-repeat
    url('https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627379580824.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=la0v1pP%2BJ1RInA9HHMzAzDwQW83AAm%2FVaQ4XRtLNOaZODjzYQpc5apcsCUcOYtHywfrhm1P0KxYNEtcTXiozIRX4JCTczDTiZhV%2BEYx1xFo0%2BuPYt4T3teAm%2BY6Ud42L3Bp56A75Zrc%2BmRYNSPNGJ%2FCYMVH3AjdXAlk%2FJLoSg7B1Uy%2FFTwpaX8yJyeXArSz%2BKoVFToRdsgfj3ccE6%2FK23Z70nvQZ0RO3pPrGRvgattju97%2B4mnz3LCLXG%2BpmYnpq1k4iNprFiDqWOYKAtwLgEwBslhXL7JGyHoWxiwjxwXrObdd30C7Qhtnd9Epd9w7QJpkcJLL%2FePKojePBJ67xNg%3D%3D');
  height: 340px;
  background-size: cover;
  background-attachment: fixed;
}

@media (max-width: 768px) {
  .banner {
    height: 170px;
  }
}
</style>
