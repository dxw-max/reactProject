import showInit from "../../state/show/show"
import showActionType from "../../actionType/show/index"

export default function(state=showInit,{type,payload}){
     //console.log(222222,payload)
    state = JSON.parse(JSON.stringify(state))
    if(type===showActionType.UP_SHOW_TYPE){
        state.showTypeList = payload
    }
    if(type===showActionType.UP_SHOW){
        state.showList = payload
    }
    if(type===showActionType.UP_CITY_LIST){
        state.cityList = payload
    }
    return state
}