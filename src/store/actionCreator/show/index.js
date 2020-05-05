import showActionType from "../../actionType/show/index"
import axios from "axios"

export function changShowType(payload){
    return{
        type:showActionType.UP_SHOW_TYPE,
        payload
    }
}
export function changeShow(payload){
    return {
        type:showActionType.UP_SHOW,
        payload
    }
}

export default{
    getShowType(){
        return async(dispatch)=>{
            //api.juooo.com/Show/Index/getShowCategoryList?version=6.1.1&referer=2
            const {data} = await axios.get("/jc/Show/Index/getShowCategoryList");
            dispatch(changShowType(data.data))
            // console.log(data.data)
        }
    },
    getShow(){
        return async(dispatch)=>{
            const {data} = await axios.get("/jc/Show/Search/getShowList");
            dispatch(changeShow(data.data.list))
            //console.log(data.data.list)
        }
    }
}