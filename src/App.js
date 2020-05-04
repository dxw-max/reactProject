import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import Login from './views/Login'
import Search from './views/search'
import Index from './views/Index'
import Detail from './views/Detail';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={'/login'} component={Login}></Route>
                <Route path={'/search'} component={Search}></Route>
                <Route path={'/Detail'} component={Detail}></Route>
                <Route path={'/'} component={Index}></Route>
            </Switch>
        </div>
    );
}

export default App;
