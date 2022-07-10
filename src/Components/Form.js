import React, { useState } from 'react';
import Table from './Table.js'
import '../styles.css'

const Form = () => {

    const [studentDetails, setStudentDetails] = useState([]);

    
    const handleSubmit = (e) => {
        console.log("...inside handleSubmit");
        e.preventDefault();
        console.log(e.target.elements.name.value + " " + e.target.elements.dept.value + " " + e.target.elements.clg.value);
        setStudentDetails([
            ...studentDetails, 
            {
                name : e.target.elements.name.value,
                dept : e.target.elements.dept.value,
                clg : e.target.elements.clg.value
            }
        ]) 
    }

    return(
        <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                   <tr>
                    <td><label htmlFor='name'>Name </label></td>
                    <td><input type='text' id='name'/></td>
                   </tr> 
                   <tr>
                    <td><label htmlFor='dept'>Department </label></td>
                    <td>
                        <select id='dept'>
                            <option>CSC</option>
                            <option>IT</option>
                            <option>ECE</option>
                            <option>EEE</option>
                            <option>Mechatronics</option>
                            <option>Mechanical</option>
                            <option>Civil</option>
                        </select>
                    </td>
                   </tr>
                   <tr>
                    <td><label htmlFor='clg'>College/University Name</label></td>
                    <td><input type='text' id='clg'/></td>
                   </tr>
                   <tr>
                    <td><input type='submit' value='Save' /></td>
                   </tr>
                </tbody>
            </table>
            </form>
            <br /> <hr />
            <h2>Student Details</h2>
            {studentDetails.length === 0 ? (
                    <p>No details found</p> 
                ) :
                (
                    <>
                        <p>Count : {studentDetails.length}</p>
                        <tr>
                            <th>Name</th>
                            <th>Department</th>
                            <th>College/University Name</th>
                        </tr>
                        {
                            studentDetails.map( (studentDetail) => {
                                console.log(studentDetail);
                                return <Table studentDetail={studentDetail} />
                            }
                            )
                        }
                    </>
                )
            }   
        </>
    )
}

export default Form;