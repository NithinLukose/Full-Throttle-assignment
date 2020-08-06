import React from 'react'
import TableRows from './TableRows'

//Table Component
const Table = ({activity_periods}) => {

    //console.log(activity_periods)
    if(activity_periods.length>0){
        return(
            <table className="modal-table">
                <thead>
                    <tr>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Duration in minutes</th>
                    </tr>
                </thead>
                <tbody className="">
                    <TableRows activity_periods={activity_periods} />
                </tbody>
            </table>
        )
    }
    return(
        <div className="df jcc pad1 fs17 ctext op"><h1>No activity</h1></div>
    )
    

}

export default Table