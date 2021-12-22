<template>
    <!----Login Popup Start---->
    <div id="LoginModal" class="modal centered-modal" role="dialog"
    style="padding-right: 16px; display: block"
    @keyup.enter="loginUser"
    @keyup.esc="closeForm"
    >
      <div class="modal-dialog login_dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal"
          @click="closeForm">
            <i class="fa_icon form_close"></i>
          </button>
          <div class="modal-body">
            <div class="ms_register_img">
              <img src="images/register_img.png" alt="" class="img-fluid" />
            </div>
            <div class="ms_register_form">
              <h2>Login</h2>
              <div class="form-group">
                <input
                  ref="username_input"
                  type="text"
                  placeholder="Enter Your Username"
                  class="form-control"
                  v-model="usernameInput"
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
                />
                <span class="form_icon">
                  <i class="fa_icon form-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div class="remember_checkbox">
                <label
                  >Keep me signed in
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <a @click="loginUser" class="ms_btn" target="_blank"
                >login now</a
              >
              <div class="popup_forgot">
                <a href="#">Forgot Password ?</a>
              </div>
              <p>
                Don't Have An Account?
                <a
                  @click="switchToRegisterForm"
                  >register here</a
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
  mixins: [AuthenticationServices],
  data() {
    return {
      isOpenModal: false,
      usernameInput: "",
      passwordInput: "",
    };
  },
  mounted() {
    this.$refs.username_input.focus();
    // console.log(this.$refs.username_input);
  },
  methods: {
    ...mapMutations(["setTokenAuth", "setUserId"]),
    closeForm() {
      this.$emit("close-form");
    },
    switchToRegisterForm() {
      this.closeForm();
      this.$emit("switch-register");
    },
    loginUser() {
      if (this.usernameInput.length == 0 || this.passwordInput.length == 0) {
        this.$toast.error("empty username or password")
        return
      }
      this.loginService([this.usernameInput, this.passwordInput])
      .then((res) => {
        // store token authentication
        this.setTokenAuth(res.data.AccessToken);
        // store user id
        this.setUserId(res.data.SessionInfo.UserId);
        this.$toast.success("Welcome back, " + res.data.User.Name + "!");
        this.closeForm();
      })
      .catch((err) => {
        console.log("error when login: ", err.message)
        this.$toast.error(err.message)
      });
    }

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