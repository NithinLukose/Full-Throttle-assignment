import {REQUEST_USERS,RESPONSE_USERS,PREVIOUS_PAGE,NEXT_PAGE} from '../actions'


//reducer to handle actions
const userList = (state={
    isFetching:false,
    users:[],
    usersPerPage:3,
    currentPage:1,
    totalPage:1
},action) => {

    let newPage = 0;
    switch(action.type){
        case REQUEST_USERS:
            return {...state,isFetching:true}
        case RESPONSE_USERS:
            return {...state, isFetching:false,users:action.payload,totalPage:Math.ceil(action.payload.length/state.usersPerPage)}  
        
        case PREVIOUS_PAGE:
            console.log("previous")
            newPage = state.currentPage!==1?state.currentPage-1:state.currentPage
            return {...state,currentPage:newPage}
        
        case NEXT_PAGE:
            console.log("next")
            newPage = state.currentPage!==state.totalPage?state.currentPage+1:state.currentPage
            return {...state,currentPage:newPage}    
        
        default:
            return state      
    }    

}

export default userList