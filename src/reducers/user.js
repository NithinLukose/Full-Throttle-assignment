import {SET_MODAL,UNSET_MODAL,SET_DATE} from '../actions'

//reducer to handle actions
const user = (state={
    set:false,
    user:{},
    startDate : null,
    endDate : null,

},action) => {

    switch(action.type){
        case SET_MODAL:
            return{...state,set:true,user:action.payload}

        case UNSET_MODAL:
            return{...state,set:false,user:{}}
        case SET_DATE:
            console.log(action.payload)
            return{...state,startDate:action.payload[0],endDate:action.payload[1]}
        default:
            return state
    }

}

export default user