import React, { Component } from 'react'
import {
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import Home from './Index/Home'
import Theater from './Index/Theater'
import Wallet from './Index/Wallet'
import My from './Index/My'
import style from '../assets/style/Index/index.module.css'

export default class Index extends Component {
    render() {
        return (
            <div className={style.index}>
                <footer className={style.footer}>
                    <nav className={style.nav}>
                        <NavLink to={'/'}>
                            <svg className={style.icon} aria-hidden={true}>
                                <use xlinkHref="#iconshouye"></use>
                            </svg>
                            <span>首页</span>
                        </NavLink>
                        <NavLink to={'/theater'}>
                            <svg className={style.icon} aria-hidden={true}>
                                <use xlinkHref="#iconxinigejuyuan-copy"></use>
                            </svg>
                            <span>剧院</span>
                        </NavLink>
                        <NavLink to={'/wallet'}>
                            <svg className={style.icon} aria-hidden={true}>
                                <use xlinkHref="#iconyouhui"></use>
                            </svg>
                            <span>票夹</span>
                        </NavLink>
                        <NavLink to={'/my'}>
                            <svg className={style.icon} aria-hidden={true}>
                                <use xlinkHref="#iconwode"></use>
                            </svg>
                            <span>我的</span>
                        </NavLink>
                    </nav>
                </footer>
                <Route exact path={'/'} component={Home}></Route>
                <Route path={'/theater'} component={Theater}></Route>
                <Route path={'/wallet'} component={Wallet}></Route>
                <Route path={'/my'} component={My}></Route>
            </div>
        )
    }
}
