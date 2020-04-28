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

export default class Index extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink exact className={'App-link'} activeClassName={'App-active'} to={'/'}>Home</NavLink>
                    <NavLink className={'App-link'} activeClassName={'App-active'} to={'/theater'}>theater</NavLink>
                    <NavLink className={'App-link'} activeClassName={'App-active'} to={'/wallet'}>wallet</NavLink>
                    <NavLink className={'App-link'} activeClassName={'App-active'} to={'/my'}>my</NavLink>
                </nav>
                <Route exact path={'/'} component={Home}></Route>
                <Route path={'/theater'} component={Theater}></Route>
                <Route path={'/wallet'} component={Wallet}></Route>
                <Route path={'/my'} component={My}></Route>
            </div>
        )
    }
}
