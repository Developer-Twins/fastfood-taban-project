import authMutations from "./mutations";
import authActions from "./actions";
import authGetters from "./getters";

export default {
  state() {
    return {
      token: null,
      userId: null,
      tokenExpiration: null,
      localStorageToken:localStorage.getItem('userToken'),
      isLoadingSignup:false,
      isLoadingLogIn:false,
      isErrorSignup:false,
      isErrorLogin:false,
      signUpError:false,
      signUpErrorInternet:false,
      userName: "",
      userNumber: null,
      userGender: null,
      userAddress: "",
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters:authGetters
};
