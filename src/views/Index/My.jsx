import React, { Component } from 'react'
import style from "../../assets/style/my/my.module.css"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {changeUser} from "../../store/actionCreator/my/index"

class My extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={style.box}>
                <div className={style.bg_img}>
                    <div className={style.set} onClick={this.outLogin.bind(this)}>
                        <svg className={style.icon} aria-hidden="true" >
                            <use xlinkHref="#iconshezhi"></use>
                        </svg>
                        <span>{this.props.set}</span>
                    </div>
                    <div className={style.information}>
                        <div className={style.information_head}>
                            <div className={style.information_portrait}>
                                <img src={require("../../assets/image/my/head_portrait.png")} alt="" />
                            </div>
                            <span>{this.props.userName}</span>
                            <span onClick={() => {
                                this.props.history.push("/Login")
                            }}>{this.props.phoneCode}
                                <svg className={style.icon} aria-hidden="true">
                                    <use xlinkHref="#iconyou"></use>
                                </svg>
                            </span>
                        </div>
                        <div className={style.information_vip}>
                            <p>普通会员</p>
                        </div>
                        <div className={style.information_account}>
                            <div className={style.account_information}>
                                <p>0</p>
                                <p>账户余额</p>
                                <div className={style.account_wire}></div>
                            </div>
                            <div className={style.account_information}>
                                <p>0</p>
                                <p>积分</p>
                                <div className={style.account_wire}></div>
                            </div>
                            <div className={style.account_information}>
                                <p>0</p>
                                <p>优惠券</p>
                                <div className={style.account_wire}></div>
                            </div>
                            <div className={style.account_information}>
                                <p>立即开通</p>
                                <p>橙PLIS卡</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.vip}>
                    <img src={require("../../assets/image/my/vip.png")} alt="" />
                </div>
                <div className={style.myinfo}>
                    <ul className={style.setting}>
                        <li>
                            <div>
                                <svg className={style.icon} aria-hidden="true" >
                                    <use xlinkHref="#icondingdan"></use>
                                </svg>
                                <p>我的订单</p>
                            </div>
                        </li>
                        <li>
                            <div onClick={()=>{
                                this.props.history.push("/Wallet")
                            }}>
                                <svg className={style.icon} aria-hidden="true" >
                                    <use xlinkHref="#iconyouhui-copy"></use>
                                </svg>
                                <p>我的票夹</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <svg className={style.icon} aria-hidden="true" >
                                    <use xlinkHref="#iconkabao"></use>
                                </svg>
                                <p>我的卡包</p>
                            </div>
                        </li>
                    </ul>
                    <ul className={style.setting}>
                        <li>
                            <div>
                                <svg className={style.icon} aria-hidden="true" >
                                    <use xlinkHref="#iconcontacts"></use>
                                </svg>
                                <p>实名购票人</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <svg className={style.icon} aria-hidden="true" >
                                    <use xlinkHref="#iconshouhuodizhi"></use>
                                </svg>
                                <p>收货地址</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <svg className={style.icon} aria-hidden="true" >
                                    <use xlinkHref="#iconyijianfankui"></use>
                                </svg>
                                <p>意见反馈</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <svg className={style.icon} aria-hidden="true" >
                                    <use xlinkHref="#iconkefu2"></use>
                                </svg>
                                <p>客服帮助</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
     outLogin(){
            localStorage.clear();
            this.props.history.push("/login")
    
        }
    componentDidMount(){
       
    }
}
function mapStateToProps(state) {
    return {
        set: state.my.set,
        userName: state.my.userName,
        phoneCode: state.my.phoneCode
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(changeUser, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(My)
