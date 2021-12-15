<template>
  <div
      id="myModal"
      class="modal centered-modal show"
      role="dialog"
      style="padding-right: 16px; display: block"
    >
      <div class="modal-dialog register_dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            @click="closeForm"
          >
            <i class="fa_icon form_close"></i>
          </button>
          <div class="modal-body">
            <div class="ms_register_img">
              <img src="images/register_img.png" alt="" class="img-fluid" />
            </div>
            <div class="ms_register_form">
              <h2>Register</h2>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  class="form-control"
                />
                <span class="form_icon">
                  <i class="fa_icon form-user" aria-hidden="true"></i>
                </span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  class="form-control"
                />
                <span class="form_icon">
                  <i class="fa_icon form-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  placeholder="Enter Password"
                  class="form-control"
                />
                <span class="form_icon">
                  <i class="fa_icon form-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  class="form-control"
                />
                <span class="form_icon">
                  <i class="fa_icon form-lock" aria-hidden="true"></i>
                </span>
              </div>
              <a href="#" class="ms_btn">register now</a>
              <p>
                Already Have An Account?
                <a
                @click="switchToLoginForm"
                  >login here</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenModal: false,
    };
  },
  methods: {
    closeForm() {
      this.$emit("close-form");
    },
    switchToLoginForm() {
      this.closeForm();
      this.$emit("switch-login");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  outline: 0;
}
</style>