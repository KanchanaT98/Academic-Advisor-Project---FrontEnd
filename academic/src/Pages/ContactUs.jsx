import React, { useRef } from 'react';
import './ContactUs.css'; 
import NavBar from '../Component/NavBar';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


function ContactUs(){

    const form = useRef();
    const nav = useNavigate();

    const sendEmail = (e) => {
      e.preventDefault();
      try{
        emailjs
          .sendForm('service_nsrymvm', 'template_sujuxeb', form.current, {
            publicKey: '03ipzIz8Ys47YHjTv',
          })

          emailjs
          .sendForm('service_m3o6wcp', 'template_rdmv38i', form.current, {
            publicKey: '03ipzIz8Ys47YHjTv',
          })
          .then(
            () => {
              alert('SUCCESS!');
              
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        }catch(err){
          alert(err);
        }
    };

    return(
        <div>
            <NavBar/>
            <div className='ContactOwnerComponent'>
                <h1><b>Contact Us</b></h1>
                    
                    <form className='sendBox' ref={form}>
                        <input type="text" id="senderEmail" placeholder="  Enter Your Email Here"
                        name="user_email"/>

                        <input id='receiverEmail'readOnly placeholder="  AcademicAdvisor@gmail.com"></input>

                        <input type="text" id="emailBody" placeholder="  Type Your message" 
                        name="message"/>
                            
                        <button className="contactSubmitBtn" type="Submit" onClick={sendEmail}>
                            <b>Send</b>
                        </button>
                    </form>
            </div>
        </div>
    
    )

}

export default ContactUs;