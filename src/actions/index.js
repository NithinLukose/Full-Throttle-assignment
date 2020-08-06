
//Action types
export const REQUEST_USERS = "REQUEST_USERS" //to request users
export const RESPONSE_USERS = "RESPONSE_USERS" // action to dispatched when response is received
export const SET_MODAL = "SET_MODAL" //action to show modal
export const UNSET_MODAL = "UNSET_MODAL" //action to close modal
export const SET_DATE = "SET_DATE" //action to change date for filtering
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE' // action to move to previous page 
export const NEXT_PAGE = 'NEXT_PAGE' //action to move to next page


//action creators
const requestUsers = () => {

    return{
        type: REQUEST_USERS
    }

}

const responseUsers = (data) => {

    return{
        type: RESPONSE_USERS,
        payload: data
    }

}

//async action creator to fetch user list from API

export const fetchUsers = () => {

    return async (dispatch) => {

        dispatch(requestUsers())
        let res = await fetch('http://localhost:3001/members')
                    .then(res=>res.json())
        return dispatch(responseUsers(res))

    }

}

export const setModal = (data) => {

    return{
        type: SET_MODAL,
        payload:data
    }

}


export const unSetModal = () => {

    return{
        type: UNSET_MODAL,
        
    }

}

export const setDate = (data) => {

    if(data){
        return{
            type: SET_DATE,
            payload:data
        }
    }
    else{
        return{
            type: SET_DATE,
            payload:[null,null]
        }
    }
    

}

export const previousPage = () => ({
    type: PREVIOUS_PAGE
})

export const nextPage = () => ({
    type: NEXT_PAGE
})

