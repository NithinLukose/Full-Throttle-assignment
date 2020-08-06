import React from 'react'
import User from './User'
import CircularProgress from '@material-ui/core/CircularProgress' //circular progress from material UI framework
import Pagination from '../containers/paginationContainer'

//User list component
const Users = ({users,isFetching}) => {

    if(!isFetching){
        
        return(
            <div className="user-list">
                {
                    users.map(user=><User key={user.id} user={user} />)
                }
                <div className="df jcfe">
                    <Pagination name="Previous" />
                    <Pagination name="Next" />
                </div>
            </div>
        )
    }
    else{
        return(
            <div><CircularProgress /></div>
        )
    }

}

export default Users