import home from './home/index'
import login from "./login/index"
import my from "./my/index"
import show from "./show/index"
import {combineReducers} from 'redux'

export default combineReducers({
    home,
    login,
    my,
    show
})