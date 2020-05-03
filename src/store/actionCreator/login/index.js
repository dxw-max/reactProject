import loginType from "../../actionType/login"

import axios from "axios"

export function register(payload) {
    return {
        type: loginType.LOGIN,
        payload
    }
}
export default {
    //获取验证码
    getCode(phoneCode) {
        return async (dispatch) => {
            if (this.phoneCode.value) {
                const { data } = await axios.post("/api/sendCode", {
                    phoneCode: this.phoneCode.value,
                });
                dispatch(register(data.code))
                if (data.ok === 1) {
                    this.code.value = data.code
                    setInterval(() => {
                        if(this.state.codeBtnNum>=1){
                            this.setState({
                                codeBtnNum:this.state.codeBtnNum-1
                             })
                        }
                        else{
                              this.setState({
                                codeBtnNum:this.state.codeBtn
                            })
                            clearInterval(this.state.codeBtnNum)
                        }
                    }, 1000)
                } else {
                    alert(data.msg)
                }
            }else {
                alert("请输入正确的手机号")
            }

        }
    },
    //登录
    login(phoneCode, code) {
        return async (dispatch) => {
            if (this.phoneCode.value && this.code.value) {
                const { data } = await axios.post("/api/login", {
                    phoneCode: this.phoneCode.value,
                    code: this.code.value
                })
                dispatch(register(data.phoneCode, data.code))
                if (data.ok === 1) {
                    localStorage.token = data.token;
                    localStorage.phoneCode = data.phoneCode;

                    this.props.history.go(-1)
                }
                //console.log(data)
            } else {
                alert("请输入正确的手机号")
            }

        }
    }
}