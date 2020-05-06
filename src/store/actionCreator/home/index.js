import axios from 'axios'
import homeType from '../../actionType/home/index'

export function changeLabelItem(payload){
    return {
        type:homeType.CHANGE_LABEL_ITEM,
        payload
    }
}
export function addFallList(payload){
    return {
        type:homeType.ADD_FALL_LIST,
        payload
    }
}

export function addVipHomeSchedular(payload){
    return {
        type:homeType.ADD_VIP_HOME_CHEDULAR,
        payload
    }
}

export function addHotsShowList(payload){
    return {
        type:homeType.ADD_HOSTS_SHOW_LIST,
        payload
    }
}

export function addHomeBanner(payload){
    return {
        type:homeType.ADD_HOME_BANNER,
        payload
    }
}

export function addPostponeShow(payload){
    return {
        type:homeType.ADD_POSTPONE_SHOW,
        payload
    }
}

export default {
    getLabelItem(){
        return async (dispatch)=>{
            //https://api.juooo.com/home/index/getClassifyHome
            const {data} = await axios.get('/jc/home/index/getClassifyHome');
            dispatch(changeLabelItem(data.data.classify_list))
        }
    },
    setFalls(){
        return async (dispatch)=>{
            //https://api.juooo.com/Show/Search/getShowList?page=1
            const {data} = await axios.get('/jc/Show/Search/getShowList?page=1');
            dispatch(addFallList(data.data.list))
        }
    },
    //https://api.juooo.com/vip/index/getVipHomeSchedular
    getVipHomeSchedular(){
        return async(dispatch)=>{
            const {data} = await axios.get('/jc/vip/index/getVipHomeSchedular');
            dispatch(addVipHomeSchedular(data.data.allList));
        }
    },
    //https://api.juooo.com/home/index/getClassifyHome
    getHomeBanner(){
        return async(dispatch)=>{
            const {data} = await axios.get('/jc/home/index/getClassifyHome');
            dispatch(addHomeBanner(data.data.slide_list));
        }
    },
    //https://api.juooo.com/home/index/getHotsRecommendList
    getHotsShowList(){
        return async(dispatch)=>{
            const {data} = await axios.get('/jc/home/index/getHotsRecommendList');
            dispatch(addHotsShowList(data.data.hots_show_list));
        }
    },
    //https://api.juooo.com/home/index/getFloorShow
    getPostponeShow(){
        return async(dispatch)=>{
            const {data} = await axios.get('/jc/home/index/getFloorShow');
            dispatch(addPostponeShow(data.data[2].list));
        }
    }
}