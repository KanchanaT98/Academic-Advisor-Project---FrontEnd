import React, { useState } from "react";
import './SignUp.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const usertype = null;
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  let nav = useNavigate()

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/register/account", {
        firstName: firstname,
        lastName:lastname,
        userType:usertype,
        email: email,
        password: password,
        confirmPassword: confirmpassword,
      }).then((res) =>
        {
          console.log(res.data);
      if(res.data === "Registration Successful"){
        alert("Registation Successfully");
      }
    }
    );
    } catch (err) {
      alert(err);
    }
  }

  async function Login(Event)  {
    Event.preventDefault();
    try{
        nav('./Login');
    }catch(err){
        alert(err)

    }

  }

  return (
    <div class="container">
        <div class="LeftSideContainer">
              <p className="text-start-large-text">
                <b>Create Account</b>
              </p>
          
              <label for="firstnameController" className="firstNameLabel">
                First Name&emsp;
              </label>
              <input
                type="text"
                className="firstnameInput"
                value={firstname}
                onChange={(event) => {
                  setFirstname(event.target.value);
                }}
              />
          
          
              <label for="lastnameController" class="lastNameLabel">
                Last Name&emsp;
              </label>
              <input
                type="text"
                className="lastnameInput"
                value={lastname}
                onChange={(event) => {
                  setLastname(event.target.value);
                }}
              />
          
            <label for="exampleFormControlInput1" className="emailLabel">
              Email address&emsp;
            </label>
            <input
              type="email"
              className="emailInput"
              placeholder="&emsp;name@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          
          
            <label className="chooseLabel">Choose the User Type: &emsp;</label>
            <select name="userType" className="userRole" value={usertype} >
                <option value="Select">- Select -</option>
                <option value="advisor">Advisor</option>
                <option value="student">Student</option>
            </select>
          
          
            <label for="passwordInput" className="passwordLabel">
              Password&emsp;
            </label>
            <input
              type="password"
              className="passwordInput"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
        
          
            <label for="confirmPasswordController" className="confirmPasswordLabel">
              Confirm Password&emsp;
            </label>
            <input
              type="password"
              className="confirmPasswordInput"
              value={confirmpassword}
              onChange={(event) => {
                setConfirmpassword(event.target.value);
              }}
            />
          
        
            <button
              class="signUpButton"
              type="submit"
              onClick={save}
            >
              <b>Sign Up</b>
            </button>
          </div>
        
      
          <div className="signup-RightHalf">
              <h3 className="signup-LoginText">
                  <b>Already have an account ?</b>
              </h3>
              <h4 className="signup-LoginText2">
                  Sign in Here
              </h4>
              <button className="signup-LoginButton" onClick={Login}>
                  <b>Sign in</b>
              </button>
          </div>
        
    </div>
  );
}

export default SignUp;