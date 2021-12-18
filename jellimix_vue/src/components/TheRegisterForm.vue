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
                  v-model="usernameInput"
                  @keyup.enter="registerUser"
                />
                <span class="form_icon">
                  <i class="fa_icon form-user" aria-hidden="true"></i>
                </span>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  placeholder="Enter Password"
                  class="form-control"
                  v-model="passwordInput"
                  @keyup.enter="registerUser"
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
                  v-model="passwordReInput"
                  @keyup.enter="registerUser"
                />
                <span class="form_icon">
                  <i class="fa_icon form-lock" aria-hidden="true"></i>
                </span>
              </div>
              <a class="ms_btn" @click="registerUser">register now</a>
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
import AuthenticationServices from "../common/AuthenticationServices"
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isOpenModal: false,
      usernameInput: "",
      passwordInput: "",
      passwordReInput: "",
    };
  },
  mixins: [AuthenticationServices],
  methods: {
    ...mapMutations(["setTokenAuth", "setUserId"]),
    closeForm() {
      this.$emit("close-form");
    },
    switchToLoginForm() {
      this.closeForm();
      this.$emit("switch-login");
    },
    registerUser() {
      this.usernameInput = this.usernameInput.trim();
      if (this.usernameInput.length == 0 || this.passwordInput.length == 0 || this.passwordReInput.length==0) {
        this.$toast.error("empty username or password")
        return
      }
      if (this.passwordInput !== this.passwordReInput) {
        this.$toast.error("password does not match")
        return 
      }
      this.registerService([this.usernameInput, this.passwordInput])
      .then(() => {
        // auto login for the user
        this.loginService([this.usernameInput, this.passwordInput])
        .then((resLogin) => {
          // store token authentication
          this.setTokenAuth(resLogin.data.AccessToken);
          // store user id
          this.setUserId(resLogin.data.SessionInfo.UserId);
          this.$toast.success("Welcome my fren, " + resLogin.data.User.Name + "!");
          this.closeForm();
        })
        .catch((err) => {
          console.log("error when login: ", err.message)
          this.$toast.error(err.message)
          return 
        });

      })
      .catch((err) => {
        if (err.message.includes("Request failed with status code 400")) {
            err.message = "username existed"
          }
        console.log("error when registering: ", err.message)
        this.$toast.error(err.message)
      });
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