import React from 'react';
import './AboutUs.css';
import NavBar from '../Component/NavBar';



function AboutUs() {
    return (
      <div>
        <NavBar/>
        <div className='aboutUsContainer'>
          <div className="AboutUsTextBox">
            <h1 id='aboutUsTitle'><b>About Us</b></h1><br/>
            <p className='AboutUsText'>
          
            Welcome to AcademicAdvisor, an innovative web application designed to simplify and enhance academic advising and management.<br/>
            Our platform bridges the gap between students, advisors, and administrators, providing a seamless and user-friendly experience.

            AcademicAdvisor<br/> is built with a powerful
            combination of technologies: a robust backend developed using Spring Boot and a dynamic frontend powered by React.<br/>
            Together, they deliver a fast, secure, and responsive application designed to meet the needs of academic institutions and organizations.<br/><br/>
            <br/>
            <div className='featureListClass'>Our Features :
              <ul id='featuresList'>
                <li>User-Friendly Interface: A sleek, intuitive design that ensures effortless navigation for students, advisors, and admins.</li>
                <li>Comprehensive Management: Manage academic resources, user roles, and advising sessions with ease.</li>
                <li>Data Security & Reliability: Built on a secure and scalable architecture to ensure your data is safe and always accessible.</li>
                <li>Seamless Integration: Our application is designed to adapt to your institution’s workflows, making academic processes smoother and more efficient.</li>
              </ul>
              </div>

            Whether you’re a student looking for guidance or an advisor managing your tasks, AcademicAdvisor is here to simplify your academic journey.
            <br/>We are committed to providing a platform that fosters better communication, improves decision-making, and supports academic success
            <br/>for everyone involved.

            <br/><br/><br/><b>Our Team :</b>
            <div className='classTeamList'>
              <ul id='teamList'>
                <li>S/18/461 - D.M.L.Edirisooriya</li>
                <li>S/18/517 - H.D.N.H.Silva</li>
                <li>S/18/124 - P.A.K.Shalinda</li>
                <li>S/18/404 - M.P.S.B.Jayasundara</li>
                <li>S/18/530 - T.M.K.S.Thennakoon</li>
                <li>S/18/444 - R.S.Meegamuwage</li>
                <li>S/18/553 - C.S.Weerasinghe</li>
                <li>S/18/438 - M.P.I.Madushani</li>
                <li>S/18/402 - K.D.A.A.P.Jayasinghe</li>
                <li>S/18/452 - K.P.Nelushan</li>
                <li>S/18/179 - W.K.P.K.Weerakoon</li>
                <li>S/18/555 - S.M.P.Weerawardena</li>
              </ul>
              </div>
          </p>
          </div>
        </div>
      </div>
      
    )
  }
  
  export default AboutUs