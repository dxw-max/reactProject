import React, { Component } from 'react'
import style from '../../assets/style/Wallet/Wallet.module.css'
import img from '../../assets/image/Wallet/1.png'

export default class Wallet extends Component {
    render() {
        return (
            <div>
                <div className={style.app}>
                        <svg className={style.icon} aria-hidden="true" onClick={()=>{
                            this.props.history.go(-1)
                        }}>
                            <use xlinkHref="#iconicon4"></use>
                        </svg>
                    <div className={style.title__text}>票夹</div>
                    <img src={img} className={style.img} />
                    <div className={style.ticket}>暂无电子票</div>
                </div>
            </div>
        )
    }
}
