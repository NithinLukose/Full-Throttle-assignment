import {connect} from 'react-redux'
import {unSetModal,setDate} from '../actions'
import Modal from '../components/Modal'

//modal container component

const mapStateToprops = (state) => {
    return{
        set:state.user.set,
        user:state.user.user,
        startDate: state.user.startDate,
        endDate : state.user.endDate
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        close: () => { 
            dispatch(unSetModal())
            dispatch(setDate([null,null]))
        },
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(Modal)