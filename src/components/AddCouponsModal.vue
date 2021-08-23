<template>
  <div
    ref="addCouponModal"
    class="modal fade"
    id="addCoupon"
    tabindex="-1"
    aria-labelledby="addCouponModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="addCouponModal">新增優惠券</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body fs-2">
          <Form
            ref="addOrderForm"
            v-slot="{ errors }"
            @submit="addCouponData"
          >
            <div class="card card-body">
              <div class="d-flex flex-wrap justify-content-around mb-2">
                <div class="form-group">
                  <label for="title">標題</label>
                  <Field
                    type="text"
                    id="title"
                    name="標題"
                    placeholder="請輸入標題"
                    :class="{ 'is-invalid': errors['標題'] }"
                    rules="required"
                    class="form-control"
                    required
                    v-model="addCoupon.title"
                  />
                  <ErrorMessage name="標題" class="invalid-feedback" />
                </div>

                <div class="form-group">
                  <label for="percent">折扣</label>
                  <Field
                    type="number"
                    style="width: 202px"
                    id="percent"
                    name="折扣"
                    :class="{ 'is-invalid': errors['折扣'] }"
                    rules="required"
                    min="0"
                    max="100"
                    oninput="value=value.replace('-', '')"
                    placeholder="請輸入折扣"
                    class="form-control"
                    v-model="addCoupon.percent"
                  />
                  <ErrorMessage name="折扣" class="invalid-feedback" />
                </div>
              </div>
              <div class="d-flex flex-wrap justify-content-around mb-2">
                <div class="form-group">
                  <label for="due_date">到期日</label>
                  <Field
                    style="width: 202px"
                    type="date"
                    id="due_date"
                    name="到期日"
                    :class="{ 'is-invalid': errors['到期日'] }"
                    rules="required"
                    class="form-control"
                    v-model="addCoupon.due_date"
                  />
                  <ErrorMessage name="到期日" class="invalid-feedback" />
                </div>

                <div class="form-group col-md-5" style="width: 202px">
                  <label for="code">折扣碼</label>
                  <Field
                    type="text"
                    id="code"
                    name="折扣碼"
                    :class="{ 'is-invalid': errors['折扣碼'] }"
                    :rules="isCode"
                    placeholder="請輸入折扣碼"
                    class="form-control"
                    v-model="addCoupon.code"
                  />
                  <ErrorMessage name="折扣碼" class="invalid-feedback" />
                </div>
              </div>
              <hr class="mt-5" />
              <div class="form-group">
                <div class="form-check">
                  <input
                    type="checkbox"
                    true-value="1"
                    false-value="0"
                    id="is_enabled"
                    class="form-check-input"
                    v-model="addCoupon.is_enabled"
                  />
                  <label for="is_enabled" class="form-check-label">
                    是否使用
                  </label>
                </div>
              </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-around pt-1">
              <button
                type="button"
                class="btn btn-secondary fs-2"
                data-bs-dismiss="modal"
              >
                取消建立
              </button>
              <button type="submit" class="btn btn-primary fs-2">
                建立優惠券
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  emits: ['send'],
  data() {
    return {
      user: {},
      message: '',
      modal: '',
      addCoupon: {
        is_enabled: 0,
      },
    };
  },
  methods: {
    addCouponData() {
      const product = {
        title: this.addCoupon.title,
        is_enabled: Number(this.addCoupon.is_enabled),
        percent: this.addCoupon.percent,
        due_date: this.$toTimestamp(this.addCoupon.due_date),
        code: this.addCoupon.code,
      };
      this.$emit('send', product);
    },
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    // 驗證折扣碼格式
    isCode(value) {
      const dcode = /^([a-zA-Z0-9]{4,8})$/;
      return dcode.test(value) ? true : '需要輸入4~8碼英數組合';
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.addCouponModal);
  },
};
</script>
