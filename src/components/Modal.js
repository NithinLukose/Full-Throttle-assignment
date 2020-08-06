import React from 'react'
import {useDispatch} from 'react-redux'
import DateRangePicker from '@wojtekmaj/react-daterange-picker' //react library for date range picker
import Table from '../containers/tableContainer' //table container componnet
import {setDate} from '../actions' 

//Modal Component
const Modal = ({set,user,close,startDate,endDate}) => {

    const dispatch = useDispatch()
    const handleDateChange = (e) => {
        console.log(e)
        dispatch(setDate(e))
        
    }
    //console.log(set)
    if(set){
        

        return(
            <div id="myModal" className="modal">

                
                <div className="modal-content">
                    <div className="df jcsb aic">
                        <div>
                        <span className="ctext">{user.real_name}</span>
                        </div>
                        <div className="close df aic jcsb">
                            <div><DateRangePicker value={[startDate,endDate]} onChange={handleDateChange} /></div>
                            <div onClick={close}>
                            <span className="closebtn">&times;</span>
                            </div>
                            
                        </div>                                       
                    </div>
                    <div className="df ">
                        <span className="active-history-text ctext">Active History</span>
                    </div>
                    <div>
                        <Table  />
                    </div>
                </div>
                
                

            </div>
        )



    }
    return null;
}

export default Modal