import React from "react";
import './UserSelection.css';
import { useNavigate } from "react-router-dom";

function UserSelection () {

     const Navigate = useNavigate();
     
    async function handleStudentClick () {
        Navigate("/StudentSignUp");
    };

    async function handleAdvisorClick () {
        Navigate("/AdvisorSignUp");
    };

    return(
     <div className="selectionContainer">
        <p className="heading"> <b>Select User Type</b></p>

        <div className="StudentRole" onClick={handleStudentClick}>
            <img id="StudentIcon" src={require('../Assets/student.png')} 
            height="300px" width="300px" alt='StudentIcon'
            onClick={handleStudentClick}/>
            <h3 className="student" onClick={handleStudentClick}>Student</h3>  
        </div>

        <div className="advisorRole" onClick={handleAdvisorClick}>
            <img id="AdvisorIcon" src={require('../Assets/teacher.png')} 
            height="300px" width="300px" 
            alt='AdvisorIcon' onClick={handleAdvisorClick}/>
            <h3 className="advisor" onClick={handleAdvisorClick}>Advisor</h3>
        </div>

     </div>   
    )
}
export default UserSelection;