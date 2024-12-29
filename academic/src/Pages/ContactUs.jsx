import React from 'react';
import './ContactUs.css';
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";
import { useState } from "react";
import NavBar from '../Component/NavBar';


function ContactUs(){

    const [senderEmail, setSenderEmail] = useState("");
    const [emailBody, setEmailBody] = useState("");
    const nav= useNavigate();

    async function submit(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/contactUs", {
            senderEmail: senderEmail,
            emailBody: emailBody,
          }).then((res) =>
          {
            console.log(res.data);
            if(res.data === "Incorrect Sender Email")
            {
              alert("Incorrect Sender Email");
            }
            else if(res.data === "Email Successfully Sent!...")
            {
              alert("Email Successfully Sent!...");
              nav('/Home');
            }
            else{
              alert("Empty Message");
            }
          }, 
          );
    
        } catch (err) {
          alert(err);
        }
    
      }

    return(
        <div>
            <NavBar/>
            <div className='ContactOwnerComponent'>
                <h1><b>Contact Us</b></h1>
                    
                    <div className='sendBox'>
                        <input type="text" id="senderEmail" placeholder="  Enter Your Email Here"
                        value={senderEmail} onChange={(event) => 
                            setSenderEmail(event.target.value)}/>

                        <input id='receiverEmail'readOnly placeholder="  AcademicAdvisor@gmail.com"></input>

                        <input type="text" id="emailBody" placeholder="  Type Your message" 
                        value={emailBody} onChange={(event) => 
                            setEmailBody(event.target.value)}/>
                            
                        <button className="contactSubmitBtn" type="Submit" onClick={submit}>
                            <b>Submit</b>
                        </button>
                    </div>
            </div>
        </div>
    
    )

}

export default ContactUs;