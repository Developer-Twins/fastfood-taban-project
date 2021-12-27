export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
    localStorage.setItem("userToken", JSON.stringify(payload.token));
    state.localStorageToken = localStorage.getItem("userToken");
  },
  changeLoadigOfSignup(state, payload) {
    state.isLoadingSignup = payload;
  },
  changeLoadigOfLogIn(state, payload) {
    state.isLoadingLogIn = payload;
  },
  setUserInfo(state) {
    let userInfo = JSON.parse(localStorage.getItem("userInfo")) || ['',null,null,''];
    state.userName = userInfo[0];
    state.userNumber = userInfo[1];
    state.userGender = userInfo[2];
    state.userAddress = userInfo[3];
  },
  deleteUserInfo(){
    localStorage.removeItem("userInfo")
  }
};
