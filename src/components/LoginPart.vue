<template>
  <Form
    class="form-signin"
    ref="loginForm"
    v-slot="{ errors }"
    @submit="sendData"
  >
    <div class="form-floating mb-3">
      <div v-if="showStatus" class="text-center fs-3">{{ statusPrompt }}</div>
      <div
        v-else
        class="text-center"
        :class="statuBool ? 'alert alert-success' : 'alert alert-danger'"
      >
        {{ statusprompt }}
      </div>
    </div>
    <div class="form-floating mb-3">
      <Field
        type="email"
        class="form-control"
        id="login-username"
        placeholder="name@example.com"
        name="信箱"
        :class="{ 'is-invalid': errors['信箱'] }"
        :rules="isEmail"
        v-model="username"
      />
      <ErrorMessage name="信箱" class="invalid-feedback" />
      <label for="login-username">Email address</label>
    </div>
    <div class="form-floating">
      <Field
        type="password"
        class="form-control"
        id="login-password"
        placeholder="Password"
        name="密碼"
        :class="{ 'is-invalid': errors['密碼'] }"
        rules="required"
        v-model="password"
      />
      <ErrorMessage name="密碼" class="invalid-feedback" />
      <label for="login-password">Password</label>
    </div>
    <button
      class="btn btn-lg btn-success w-100 mt-90"
      id="btn-form"
      type="submit"
    >
      登入
    </button>
  </Form>
</template>

<script>
export default {
  emits: ['login-emit'],
  props: ['statusprompt', 'statuBool', 'loginInFallOrSuccess'],
  data() {
    return {
      user: {},
      statusPrompt: '帳號登入',
      showStatus: true,
      username: '',
      password: '',
    };
  },
  methods: {
    //   送出資料
    sendData() {
      this.showStatus = true;
      const admin = {
        username: this.username,
        password: this.password,
      };
      this.$emit('login-emit', admin);
    },
    // 驗證信箱格式
    isEmail(value) {
      const mail = /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return mail.test(value) ? true : '需要輸入正確的信箱';
    },
  },
  watch: {
    // 收到回傳登入成功失敗資料 改變showStatus
    loginInFallOrSuccess() {
      this.showStatus = this.statuBool;
    },
  },
};
</script>
