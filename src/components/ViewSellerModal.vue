<template>
  <div class="modal fade" ref="modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h5 class="modal-title css_wordInput_4 text-white fs-3">
            {{ title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <img :src="url" :alt="title" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            我甚麼都不知道..
          </button>
          <button type="button" class="btn btn-primary" @click="closeModal">
            甚麼麻，原來是阿喵
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      url: 'https://storage.googleapis.com/vue-course-api.appspot.com/sim322on/1627384892475.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RD%2BGGlmDYSODZdtim2p2mkklhZLG3NK1%2B1Eo2UtlMl6XVDRZeUYAGdhP2bR6MKlML2DI6trN8UKICK4iGmyWSTKKxybBjNtY3qYqA%2FBrxbgjnqzRf4mZj60WMC0VunTSklIWihz8y7O41Sd6dcIJonG%2B%2FNDczINYczxfRJ8Uo83MJ1aGX9Cyvp0V%2B903J91B%2FNeB3wryB%2BTDohSOBR6pth61ZpgCVtQGYxAqAFFT37gEzUcy8B%2FGO0DwexAe5nxUShB55Jzhhd1n1neCyeLyLdXY9e9zKHdIIPigoDiN55mM9D13HWHU2G1V%2BeX7KAEKdb0CoC8loZ31h3FjtVwPcA%3D%3D',
      title: '阿喵賣菜:D',
      modal: '',
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
