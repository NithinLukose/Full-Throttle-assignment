import React from 'react'
import {useDispatch} from 'react-redux'
import {setModal} from '../actions'

//User component
const User = ({user}) => {
    const dispatch = useDispatch()
    const handleClick = (e) =>{
        dispatch(setModal(user))
    }
    return(
        <div className="user-container df jcsb mar2" >
            <div className="user"> 
                <div className="df" onClick={handleClick}>
                    <div><i className="material-icons clb">person</i></div>
                    <div className="cb"><span>{user.real_name}</span></div>
                </div>
                <div className="df">
                    <div><i className="material-icons clb">map</i></div>
                    <div className="ctext"><span>{user.tz}</span></div>
                </div>
            </div>
            <div>
                <span className="ctext">Last active - {user.activity_periods[user.activity_periods.length-1].end_time}</span>               
            </div>
                
        </div>
    )
}

export default User