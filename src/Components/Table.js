import React from 'react';
import '../styles.css'

const Table = ({studentDetail}) => {

    return(
        <>
        {console.log("... inside table comp")}
        <tr>
            <td>{studentDetail.name}</td>
            <td>{studentDetail.dept}</td>
            <td>{studentDetail.clg}</td>
        </tr>
        </>
    )
}

export default Table;