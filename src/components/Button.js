import React from 'react'

//Button Componnet for pagination
const Button = ({name,onClick}) => {
    return(
        <div className="mar1">
            <button className="pagination" onClick={onClick}>{name==="Previous"?<i className="material-icons clb">chevron_left</i>:<i className="material-icons clb">chevron_right</i>}</button>
        </div>
    )
}

export default Button