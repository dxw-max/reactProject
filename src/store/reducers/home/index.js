import homeInit from '../../state/home/home'
import homeType from '../../actionType/home/index'
export default function(state = homeInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === homeType.CHANGE_LABEL_ITEM){
        state.labelItemList = payload;
    }
    if(type === homeType.ADD_FALL_LIST){
        state.fallList = payload
    }
    return state;
}