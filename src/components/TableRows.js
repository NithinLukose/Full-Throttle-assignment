import React from 'react'


const TableRows = ({activity_periods}) => {

    return(
        <>
            {activity_periods.map(range=>                                                              
                <tr key={range.start_time}>
                    <td>
                        {range.start_time.toLocaleString()}
                    </td>
                    <td>
                        {range.end_time.toLocaleString()}
                    </td>
                    <td>
                        {(range.end_time.getTime() - range.start_time.getTime())%86400000%3600000/60000}
                    </td>
                </tr>
            )}  
        </>
    )

}

export default TableRows