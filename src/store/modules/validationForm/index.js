import validateGetters from "./getters";

export default {
  namespaced: true,
  state() {
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
  getters: validateGetters,
};
