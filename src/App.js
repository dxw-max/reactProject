import React from 'react';
import './App.css';
import {
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import Login from './views/Login'
import Search from './views/search'
import Index from './views/Index'
import Show from "./views/show"

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={'/show'} component={Show}></Route>
                <Route path={'/login'} component={Login}></Route>
                <Route path={'/search'} component={Search}></Route>
                <Route path={'/'} component={Index}></Route>
            </Switch>
        </div>
    );
}

export default App;
