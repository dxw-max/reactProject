import homeInit from '../../state/home/home'
import homeType from '../../actionType/home/index'
export default function(state = homeInit.labelItemList,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === homeType.CHANGE_LABEL_ITEM){
        state = payload;
    }
    //console.log(state);
    return state;
}