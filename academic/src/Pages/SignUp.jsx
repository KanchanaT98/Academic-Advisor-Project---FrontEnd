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
      <div class="row justify-content-md-center">
        <div class="col-col-lg-5">
          <p class="text-start large-text">
            <b>Create Account</b>
          </p>
          <div class="row">
            <div class="col">
              <label for="lastnameController" className="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="firstname"
                value={firstname}
                onChange={(event) => {
                  setFirstname(event.target.value);
                }}
              />
            </div>
            <div class="col">
              <label for="lastnameController" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="lastname"
                value={lastname}
                onChange={(event) => {
                  setLastname(event.target.value);
                }}
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label-email">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div class="selectUser">
          <label id="form-label-userType">Choose the User Type: &emsp;</label>
            <select name="userType" id="userType" value={usertype} >
                <option value="Select"></option>
                <option value="advisor">Advisor</option>
                <option value="student">Student</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="inputPassword5" class="form-label-password">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="confirmPasswordController" class="form-label-conPassword">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="confirmpassword"
              value={confirmpassword}
              onChange={(event) => {
                setConfirmpassword(event.target.value);
              }}
            />
          </div>

          <div class="col-12 d-flex justify-content-center">
            <button
              class="btn btn-primary btn-block"
              type="submit"
              onClick={save}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-auto">
            <div className="signup-RightHalf">
                <h3 className="signup-LoginText">
                    <b>Already have an account?</b>
                </h3>
                <h4 className="signup-LoginText2">
                    Sign in Here
                </h4>
                <button className="signup-LoginButton" onClick={Login}>
                    <b>Sign in</b>
                </button>
            </div>
        </div>
    </div>
  );
}

export default SignUp;