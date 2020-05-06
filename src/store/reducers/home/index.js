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
    if(type === homeType.ADD_VIP_HOME_CHEDULAR){
        state.vipHomeSchedular = payload
    }
    if(type === homeType.ADD_HOME_BANNER){
        state.homeBannerList = payload
    }
    if(type === homeType.ADD_HOSTS_SHOW_LIST){
        state.hostShowList = payload
    }
    if(type === homeType.ADD_POSTPONE_SHOW){
        state.postponeShowList = payload
    }
    return state;
}