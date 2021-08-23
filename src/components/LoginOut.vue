<template>
  <div
    class="modal fade"
    ref="signOutUser"
    tabindex="-1"
    aria-labelledby="signOutUserLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center" id="signOutUserLabel">
            確定登出?
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            讓我想想
          </button>
          <button
            id="signOut"
            @click="signOutAdmin"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            非常低肯定!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';
import emitter from '@/assets/js/emitter';

export default {
  emits: ['sign-out-admin'],
  data() {
    return {
      Modal: '',
    };
  },
  methods: {
    signOutAdmin() {
      this.$emit('sign-out-admin');
      emitter.emit('login-out');
    },
    openModal() {
      this.Modal.show();
    },
  },
  mounted() {
    this.Modal = new Modal(this.$refs.signOutUser);
  },
};
</script>
