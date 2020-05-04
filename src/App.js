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
<<<<<<< HEAD
import Detail from './views/Detail';
=======
import Show from "./views/show"
>>>>>>> d9014504b6b52c61338fd8bf9e4e1f6ffc0f9164

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={'/show'} component={Show}></Route>
                <Route path={'/login'} component={Login}></Route>
                <Route path={'/search'} component={Search}></Route>
                <Route path={'/Detail'} component={Detail}></Route>
                <Route path={'/'} component={Index}></Route>
            </Switch>
        </div>
    );
}

export default App;
