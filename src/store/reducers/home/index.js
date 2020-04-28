import homeInit from '../../state/home/home'
export default function(state = homeInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    return state;
}