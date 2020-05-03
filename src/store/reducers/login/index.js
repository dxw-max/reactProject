import loginForm from "../../state/login/login"
import loginType from "../../actionType/login/index"

export default function(state=loginForm,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type===loginType.LOGIN){
       state.phoneCode = payload.phoneCode;
       state.code = payload.code;
    }
    localStorage.phoneCode = JSON.stringify(state.phoneCode)
    return state
}