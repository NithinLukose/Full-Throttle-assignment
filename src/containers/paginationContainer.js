import {connect} from 'react-redux'
import { previousPage, nextPage } from '../actions'
import Button  from '../components/Button'

//pagination container component

const mapStateToProps = (state,ownProps) => {
    
    return{
        name:ownProps.name
    }

}

const mapDispatchToProps = (dispatch,ownProps) => {
    return{
        onClick:ownProps.name==='Previous'? () => dispatch(previousPage()) : () => dispatch(nextPage())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Button)