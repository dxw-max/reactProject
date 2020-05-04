import myType from "../../actionType/my"

export function changeUser(payload) {
    return {
        type: myType.UP_USER,
        payload: {
            set: "退出登录",
            userName: "橙子",
            phoneCode:localStorage.phoneCode
        }
    }
}
