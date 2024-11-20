import React from "react";
import './Login.css';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    let nav = useNavigate();

    async function SignUp(event) {
        event.preventDefault();
        try{
            nav('/SignUp')
        }catch(err){
            alert(err);
        }
    }


    return(
        <div className="Login-container">
            <div className="Login-container-body">
                <h1 id="Login-header">Login</h1>
                <div className="form-container">

                </div>
                <div className="signUp-container">
                    <p id="login-signup-text">Don't Have an Account yet?</p>
                    <button id="login-signUp-btn" onClick={SignUp} />Sign Up

                </div>
            </div>
            
        </div>
    )
}
export default Login