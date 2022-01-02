<template>
  <div>
    <the-loader
      :condition="$store.state.authModule.isLoadingLogIn"
    ></the-loader>
    <form
      v-if="!$store.state.authModule.isLoadingLogIn"
      class="log-in"
      action="#"
      @submit.prevent="submitForm"
      ref="logInForm"
    >
      <div :class="[emailClass, 'log-in__group']">
        <input
          class="log-in__input log-in__input-email tel"
          type="text"
          placeholder="ایمیل"
          v-model.trim="userEmail"
          @blur="checkInput(userEmail, 'email')"
        />
        <label class="log-in__label">ایمیل</label>
        <p>لطفا ایمیل معتبر وارد کنید</p>
      </div>

      <div :class="[PasswordClass, 'log-in__group','log-in__group-password']">
        <input
          class="log-in__input password"
          type="password"
          placeholder="رمزعبور"
          v-model.trim="userPassword"
          @blur="checkInput(userPassword, 'password')"
        />
        <label class="log-in__label">رمزعبور</label>
        <p>
          رمزتان حداقل باید ۶ وحداکثر ۱۵ کاراکتر باشد
        </p>
      </div>

      <div class="log-in__link">
        <p class="log-in__isErrorLogin" v-if="$store.state.authModule.isErrorLogin">کاربری با این مشخصات یافت نشد</p>
        <p class="log-in__isErrorLogin" v-if="$store.state.authModule.signUpErrorInternet">اتصال شما به اینترنت قطع است</p>
        <p>رمز خودرا فراموش کرده ام</p>
        <p @click="goToSignUp">هنوز <strong> ثبت نام </strong>نکرده ام</p>
      </div>

      <button class="log-in__btn bass-btn">ورود</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userEmail: "",
      userPassword: "",

      validateEmail: "pending",
      validatePassword: "pending",
    };
  },
  methods: {
    submitForm() {
      this.checkInput(this.userEmail, "email");
      this.checkInput(this.userPassword, "password");

      let listValidate = [this.validatePassword, this.validateEmail];
      let isFormSubmit = listValidate.every((item) => {
        return item === "valid";
      });
      console.log(isFormSubmit);

      if (isFormSubmit) {
        console.log("fffffff");

        // this.$refs.logInForm.submit();
        this.$store.dispatch("logIn", {
          email: this.userEmail,
          password: this.userPassword,
        });
      }
    },
    checkInput(user, type) {
      if (type === "password") {
        if (user.length < 6 || user.length > 15) {
          this.validatePassword = "invalid";
        } else {
          this.validatePassword = "valid";
        }
      } else if (type === "email") {
        if (!this.isEmailValid(user)) {
          this.validateEmail = "invalid";
        } else {
          this.validateEmail = "valid";
        }
      }
    },
    goToSignUp() {
      this.$store.state.formType = "sign-up";
      this.$store.state.formTitle = "ثبت نام";
    },
    isEmailValid(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
  computed: {
    emailClass() {
      return this.validateEmail === "invalid"
        ? "error"
        : this.validateEmail === "valid"
        ? "success"
        : "";
    },
    PasswordClass() {
      return this.validatePassword === "invalid"
        ? "error"
        : this.validatePassword === "valid"
        ? "success"
        : "";
    },
  },
};
</script>

<style></style>
