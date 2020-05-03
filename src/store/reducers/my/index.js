import myForm from "../../state/my/my"
import myType from '../../actionType/my'

export default function (state = myForm, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    if (localStorage.token) {
        if (type === myType.UP_USER) {
            state.set = payload.set;
            state.userName = payload.userName;
            state.phoneCode = payload.phoneCode;
        }
    }
    localStorage.phoneCode = JSON.parse(JSON.stringify(state.phoneCode))
    return state
}