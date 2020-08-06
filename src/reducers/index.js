import {combineReducers} from 'redux'
import userList from './users'
import user  from './user'

export default combineReducers({
    userList,
    user
})
