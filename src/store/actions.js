export default {
  changeLoading(context,payload){
    context.commit('changeLoading',payload)
  },  
  changeError(context,payload){
    context.commit('changeError',payload)
  }  
}