import axios from 'axios'
import homeType from '../../actionType/home/index'

export function changeLabelItem(payload){
    return {
        type:homeType.CHANGE_LABEL_ITEM,
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
    }
}