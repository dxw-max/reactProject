import React, { Component } from 'react'
import { connect } from "react-redux"
import loginCreator from "../store/actionCreator/login/index"
import {
    bindActionCreators //可以绑定actionCreate对象下面的函数
} from "redux"
import style from "../assets/style/login/login.module.css"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            codeBtn: "获取验证码",
            codeBtnNum: 60
        }
    }
    render() {
        return (
            <div className={style.box}>
                <header>
                    <div className={style.go} onClick={() => {
                        this.props.history.go(-1)
                    }}>
                        <svg className={style.icon} aria-hidden="true">
                            <use xlinkHref="#iconicon4"></use>
                        </svg>
                    </div>
                </header>
                <section>
                    <div className={style.logo}>
                        <img src={require("../assets/image/login/logo.png")} alt="" />
                    </div>
                    <div className={style.form}>
                        <div className={style.input}>
                            <div className={style.input_form}>
                                <span>+86</span>
                                <input type="text" placeholder="请输入手机号" ref={e => this.phoneCode = e} onBlur={this.tel.bind(this)} />
                            </div>
                            <div className={style.input_form}>
                                <input type="text" placeholder="请输入验证码" ref={e => this.code = e} />
                                <span value={this.props.code} onClick={this.props.getCode.bind(this)} >{this.code ? this.state.codeBtnNum : this.state.codeBtn}</span>
                            </div>
                            <p>未注册的手机号将自动创建会员账号</p>
                        </div>
                        <div className={style.buttom} onClick={this.props.login.bind(this)}>
                            <div className={this.code ? style.btns : style.btn}>点击登录</div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className={style.register}>
                        <p><span>其他登录方式</span></p>
                        <div className={style.method}>
                            <svg className={style.icon} aria-hidden="true">
                                <use xlinkHref="#iconqq"></use>
                            </svg>
                            <svg className={style.icon} aria-hidden="true">
                                <use xlinkHref="#iconweibo"></use>
                            </svg>
                        </div>
                    </div>
                </footer>
            </div >
        )
    }
    tel() {
        if (!/^1[345789]\d{9}$/.test(this.phoneCode.value)) {
            this.phoneCode.value = "";
            alert("请输入正确的手机号")
            // return;
        }
    }
    //我们不能在组件销毁后设置state，防止出现内存泄漏的情况
    componentWillUnmount() {
        //我们应该在组件销毁的时候将异步方法撤销
        this.setState = (state, callback) => {
            return;
        };
    }
}

function mapStateToProps(state) {
    return {
        phoneCode: state.login.phoneCode,
        code: state.login.code
    }
}
function mapDispatchToProps(dispatch) {
    // return{
    //    async getCode(){
    //        dispatch(loginCreator.getCode.call(this))
    //    },
    //    async login(){
    //        dispatch(loginCreator.login.call(this))
    //    }
    // }
    return bindActionCreators(loginCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)