export default {
  changeLoading(state ,payload){
    state.isLoading = payload
  },
  changeError(state ,payload){
    state.fetchError = payload
  },
  updatetotalQuantity(state) {
    state.totalQuantity = state.myStore.reduce((container, cardQuantity) => {
      return container + cardQuantity.quantity;
    }, 0);
  },
  updatetotalPrice(state) {
    state.totalPrice = state.myStore.reduce((container, cardPrice) => {
      return container + cardPrice.subTotal;
    }, 0);
  },

  addToStore(state, card) {
    state.myStore.push(card);
  },
  updatePopup(state, payload) {
    if (payload.mode === "open") {
      if(payload.name === 'popupContactUs'){
        state.popupContactUs = true;
      }
      else if(payload.name === 'popupFetchError'){
        state.popupFetchError = true
      }
    }else if(payload.mode === 'close'){
      if(payload.name === 'popupContactUs'){
        state.popupContactUs = false
      }
      else if(payload.name === 'popupFetchError'){
        state.popupFetchError = false
      }
    }
  },
};
