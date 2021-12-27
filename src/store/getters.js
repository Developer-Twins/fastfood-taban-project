export default {
  getIsLoading(state){
    return state.isLoading
  },
  getError(state){
    return state.fetchError
  },
  getOurMenu(state) {
    return state.ourMenu;
  },
  updateLocalStorage(state) {
    localStorage.setItem("listCart", JSON.stringify(state.myStore));
  },
  totalQuantity(state) {
    return state.totalQuantity;
  },
  totalPrice(state) {
    return state.totalPrice;
  },
  getFormTitle(state) {
    return state.formTitle;
  },
}
