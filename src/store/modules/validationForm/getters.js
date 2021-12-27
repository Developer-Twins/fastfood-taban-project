export default{
 submitForm(state){
    return {
        userName:state.userFirstName,
        userNumber:state.userNumber,
        userAddress:state.userAddress,
        userGender:state.userGender,
    }
 }
}