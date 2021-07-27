<template>
  <div
    class="modal fade"
    ref="createOrderModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title css_wordInput_13 fz-2 fz-sm-3">請輸入詳細資訊~ ~ (・ω・)</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          
        </div>
      </div>
    </div>
  </div>
<!-- Alert元件 start -->
<Alert class=" alert-position"  v-if="alertMessage" :message="alertMessage"
:status="alertStatus" />
<!-- Alert元件 end -->
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
// Alert元件
import Alert from '@/components/Alert.vue';

export default {
  emits: ['re-get-cart-list'],
  components: {
    // Alert元件
    Alert,
  },
  data() {
    return {
      // alert元件參數
      alertMessage: '',
      alertStatus: false,
      user: {},
      Modal: '',
      userData: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    // 開啟modal
    openModal() {
      // 開啟modal
      this.Modal.show();
    },
    // 隱藏modal
    closeModal() {
      // 隱藏modal
      this.Modal.hide();

      const data = {
        data: this.userData,
      };

      // 送出訂單
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, data)
        .then((res) => {
          if (res.data.success) {
            this.alertMessage = res.data.message;
            this.alertStatus = true;
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );
            this.reGetCartList();
          } else {
            this.alertMessage = res.data.message;
            this.alertStatus = false;
            setTimeout(
              () => {
                this.alertMessage = '';
                this.alertStatus = false;
              }, 2000,
            );
          }
        })
        .catch((err) => {
          this.alertMessage = err.data.message;
          this.alertStatus = false;
          setTimeout(
            () => {
              this.alertMessage = '';
              this.alertStatus = false;
            }, 2000,
          );
        });
    },
    // 刷新購物車列表
    reGetCartList() {
      this.$emit('re-get-cart-list');
    },
    // 驗證號碼格式
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要輸入正確的手機號碼';
    },
    // 驗證信箱格式
    isEmail(value) {
      const mail = /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return mail.test(value) ? true : '需要輸入正確的信箱';
    },
  },
  mounted() {
    this.Modal = new Modal(this.$refs.createOrderModal);
  },
};
</script>
