<template>
  <div>
    <the-loader
      :condition="$store.state.authModule.isLoadingSignup"
    ></the-loader>

    <form
      v-if="!$store.state.authModule.isLoadingSignup"
      class="sign-up"
      action="#"
      @submit.prevent="submitForm"
      ref="signUpForm"
    >
      <div :class="[firstNameClass, 'sign-up__group']">
        <input
          class="sign-up__input first-name"
          type="text"
          placeholder="نام"
          v-model.trim="userFirstName"
          @blur="checkInput(userFirstName, 'firstName')"
        />
        <label class="sign-up__label">نام</label>
        <p>لطفا فیلد را پر کنید</p>
      </div>

      <div :class="[emailClass, 'sign-up__group']">
        <input
          class="sign-up__input last-name sign-up__input-email"
          type="text"
          placeholder="ایمیل"
          v-model.trim="userEmail"
          @blur="checkInput(userEmail, 'email')"
        />
        <label class="sign-up__label">ایمیل</label>
        <p>لطفا ایمیل معتبر وارد کنید</p>
      </div>

      <div :class="[PasswordClass, 'sign-up__group']">
        <input
          class="sign-up__input password"
          type="password"
          placeholder="رمزعبور"
          v-model.trim="userPassword"
          @blur="checkInput(userPassword, 'password')"
        />
        <label class="sign-up__label">رمزعبور</label>
        <p>
          رمزتان حداقل باید ۶ وحداکثر ۱۵ کاراکتر باشد
        </p>
      </div>

      <div :class="[password2Class, 'sign-up__group']">
        <input
          class="sign-up__input password2"
          type="password"
          placeholder="تکرار رمزعبور"
          v-model.trim="userPassword2"
          @blur="checkInput(userPassword2, 'password2')"
        />
        <label class="sign-up__label">تکرار رمزعبور</label>
        <p>لطفا رمز خود را صحیح وارد کنید</p>
      </div>
      <div :class="[numberClass, 'sign-up__group']">
        <input
          class="sign-up__input tel"
          type="text"
          placeholder="شماره همراه"
          v-model.trim="userNumber"
          @blur="checkInput(userNumber, 'number')"
        />
        <label class="sign-up__label">شماره همراه</label>
        <p>لطفا شماره همراه صحیح وارد کنید</p>
      </div>

      <div class="sign-up__group sign-up__group-radio">
        <label class="sign-up__gender">جنسیت:</label>
        
        <div class="sign-up__radio">
          <input
            type="radio"
            class="sign-up__radio-input"
            value="آقای "
            id="man"
            name="gender"
            v-model.trim="userGender"
          />
          <label for="man" class="sign-up__radio-label">
            <span class="sign-up__radio-button"></span>
            مرد
          </label>
        </div>
        <div class="sign-up__radio">
          <input
            type="radio"
            class="sign-up__radio-input"
            value="خانم"
            id="woman"
            name="gender"
            v-model.trim="userGender"
          />
          <label for="woman" class="sign-up__radio-label">
            <span class="sign-up__radio-button"></span>
            زن
          </label>
        </div>
      </div>

      <div :class="[addressClass, 'sign-up__group']">
        <input
          class="sign-up__input address"
          type="text"
          placeholder="آدرس"
          v-model.trim="userAddress"
          @blur="checkInput(userAddress, 'address')"
        />
        <label class="sign-up__label">آدرس</label>
        <p>لطفا آدرس معتبر وارد کنید</p>
      </div>

      <button class="sign-up__btn bass-btn" type="submit">ثبت نام</button>
    </form>
    <p class="log-in__isErrorLogin go-log-net" v-if="$store.state.authModule.signUpErrorInternet">اتصال شما به اینترنت قطع است</p>
    <p v-if="$store.state.authModule.signUpError && !$store.state.authModule.isLoadingSignup" class="go-log">
      شما قبلا ثبت نام کرده اید لطفا <strong @click="goToLogIn">وارد</strong> شوید
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userFirstName: "",
      userEmail: "",
      userNumber: null,
      userPassword: "",
      userPassword2: null,
      userGender: null,
      userAddress: "",
      validateFirstName: "pending",
      validateEmail: "pending",
      validatePassword: "pending",
      validatePassword2: "pending",
      validateNumber: "pending",
      validateAddress: "pending",
    };
  },
  methods: {
    goToLogIn() {
      this.$store.state.formType = "log-in";
      this.$store.state.formTitle = "ورود";
    },
    submitForm() {
      this.checkInput(this.userFirstName, "firstName");
      this.checkInput(this.userEmail, "email");
      this.checkInput(this.userPassword, "password");
      this.checkInput(this.userPassword2, "password2");
      this.checkInput(this.userNumber, "number");
      this.checkInput(this.userAddress, "address");
      let listValidate = [
        this.validateFirstName,
        this.validateEmail,
        this.validatePassword,
        this.validatePassword2,
        this.validateNumber,
        this.validateAddress,
      ];
      let isFormSubmit = listValidate.every((item) => {
        return item === "valid";
      });
      if (isFormSubmit) {
        // this.$refs.signUpForm.submit();
        this.$store.dispatch("signUp", {
          email: this.userEmail,
          password: this.userPassword,
          userInfo: {
            userName: this.userFirstName,
            userEmail: this.userEmail,
            userNumber: this.userNumber,
            userAddress: this.userAddress,
            userGender: this.userGender,
          },
        });
      }
    },
    checkInput(user, type) {
      if (type === "firstName") {
        if (user.length === 0) {
          this.validateFirstName = "invalid";
        } else {
          this.validateFirstName = "valid";
        }
      } else if (type === "email") {
        if (!this.isEmailValid(user)) {
          this.validateEmail = "invalid";
        } else {
          this.validateEmail = "valid";
        }
      } else if (type === "password") {
        if (user.length < 6 || user.length > 15) {
          this.validatePassword = "invalid";
        } else {
          this.validatePassword = "valid";
        }
      } else if (type === "password2") {
        if (user !== this.userPassword) {
          this.validatePassword2 = "invalid";
        } else {
          this.validatePassword2 = "valid";
        }
      } else if (type === "number") {
        let mobileReg = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
          junkReg = /[^\d]/gi,
          persinNum = [
            /۰/gi,
            /۱/gi,
            /۲/gi,
            /۳/gi,
            /۴/gi,
            /۵/gi,
            /۶/gi,
            /۷/gi,
            /۸/gi,
            /۹/gi,
          ],
          num2en = function(str) {
            for (let i = 0; i < 10; i++) {
              str = str.replace(persinNum[i], i);
            }
            return str;
          },
          getMobiles = function(str) {
            let mobiles = num2en(str + "").match(mobileReg) || [];
            mobiles.forEach(function(value, index, arr) {
              arr[index] = value.replace(junkReg, "");
              arr[index][0] === "0" || (arr[index] = "0" + arr[index]);
            });
            return mobiles;
          };
        let number = getMobiles(user);
        if ((user !== null || user !== "") && number.length !== 0) {
          this.validateNumber = "valid";
        } else {
          this.validateNumber = "invalid";
        }
      } else if (type === "address") {
        if (user.length < 10) {
          this.validateAddress = "invalid";
        } else {
          this.validateAddress = "valid";
        }
      }
    },
    isEmailValid(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
  computed: {
    firstNameClass() {
      return this.validateFirstName === "invalid"
        ? "error"
        : this.validateFirstName === "valid"
        ? "success"
        : "";
    },
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
    password2Class() {
      return this.validatePassword2 === "invalid"
        ? "error"
        : this.validatePassword2 === "valid"
        ? "success"
        : "";
    },
    numberClass() {
      return this.validateNumber === "invalid"
        ? "error"
        : this.validateNumber === "valid"
        ? "success"
        : "";
    },
    addressClass() {
      return this.validateAddress === "invalid"
        ? "error"
        : this.validateAddress === "valid"
        ? "success"
        : "";
    },
  },
};
</script>

<style></style>
