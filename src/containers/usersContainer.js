import {connect} from 'react-redux'
import Users from '../components/Users'

//Users container component

const MapStateToProps = (state) => {
    //console.log(state)
    //pagination
    const indexOfLastUser = state.userList.currentPage*state.userList.usersPerPage
    const indexOfFirstUser = indexOfLastUser - state.userList.usersPerPage
    const currentUsers = state.userList.users.slice(indexOfFirstUser,indexOfLastUser)
    return{
        users: currentUsers,
        isFetching: state.userList.isFetching
    }

}

export default connect(MapStateToProps)(Users)