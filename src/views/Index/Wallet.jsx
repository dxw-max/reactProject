import React, { Component } from 'react'
import style from '../../assets/style/Wallet/Wallet.module.css'
import img from '../../assets/image/Wallet/1.png'

export default class Wallet extends Component {
    render() {
        return (
            <div>
                <div className={style.app}>
                    <h3 className={style.title__text}>票夹</h3>
                    <img src={img} className={style.img} />
                    <div className={style.ticket}>暂无电子票</div>
                </div>
            </div>
        )
    }
}
