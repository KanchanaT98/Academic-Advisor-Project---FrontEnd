import React from "react";
import './Welcome.css';
import Footer from "../Component/Footer";
import { useNavigate } from 'react-router-dom';
import NavBar from "../Component/NavBar";

function Welcome () {

    const nav = useNavigate();

    async function handleClick() {
        nav('/UserSelection');
    }

    return(
        <div className="Welcome_Container">
            <NavBar/>
            <div className="Content">
                <img id="welcomeImage" src={require('../Media/WelcomeImage2.jpeg')}></img> 
                <div className="welcomeTextBox">
                    <h1 className="welcomeText">Welcome to Academic Advisor Management System</h1>
                </div>
                <div className="signUpTextBox">
                    <p className="signUpText"><b>Your one-stop solution for academic guidance.<br/>
                    Effortlessly manage schedules, connect with advisors, and unlock your full potential.</b></p>
                    <button id="welcomePagesignUpButton" onClick={handleClick}><b>Sign Up</b></button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Welcome;