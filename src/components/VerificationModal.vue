<template>
  <div
    class="modal fade"
    id="verification"
    tabindex="-1"
    aria-labelledby="verificationLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="verificationLabel">輸入你的API_Path</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <label class="mr-2" for="API_Path">API_Path:</label>
          <input type="text" v-model="apipath" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            我忘記我的path碼，先饒過你
          </button>
          <button
            id="chkVerification"
            @click="chkPath"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            驗證
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  emits: ['emitchkPath'],
  data() {
    return {
      apipath: 'sim322on',
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    chkPath() {
      this.$emit('emitchkPath', this.apipath);
    },
  },
};
</script>
