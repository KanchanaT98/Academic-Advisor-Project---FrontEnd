import React, { useState } from "react";
import "./StudentSignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs-react';
import salt from '../Security';


function SignUp() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [usertype, setUsertype] = useState("Select"); // State for user type
  const [password, setPassword] = useState("");
  const [confirmpassword, setConPassword] = useState("");
  const [combinationNo, setCombinationNo] = useState(""); // State for combination number
  const [subjectArea, setSubjectArea] = useState(""); // State for subject area
  const [educationQualification, setEducationQualification] = useState("");
  const nav = useNavigate();

  
  const hashPassword = (password) => {
      // Hash the password using the provided salt
      return bcrypt.hashSync(password, salt);
    }

  async function save(event) {
    event.preventDefault();
    if (firstname === "") {
      alert("First Name cannot be empty");
    } else if (lastname === "") {
      alert("Last Name cannot be empty");
    } else if (email === "") {
      alert("email cannot be empty");
    } else if (password === "") {
      alert("password cannot be empty");
    } else if (password !== confirmpassword) {
      alert("Confirm password does not match");
    } else if (usertype === "STUDENT" && combinationNo === "") {
      alert("Combination Number cannot be empty for Student");
    } else if (
      usertype === "ADVISOR" &&
      (subjectArea === "" || educationQualification === "")
    ) {
      alert(
        "Subject Area and Education Qualification cannot be empty for Advisor"
      );
    } else {
      try {
        const res = await axios
          .post("http://localhost:8080/api/users/register", {
            firstName: firstname,
            lastName: lastname,
            role: usertype,
            email: email,
            password: hashPassword(password),
            combinationNo: usertype === "STUDENT" ? combinationNo : null,
            subjectArea: usertype === "ADVISOR" ? subjectArea : null,
            educationQualification:
              usertype === "ADVISOR" ? educationQualification : null,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data === "User Registration Successfull...!") {
              alert("Registation Successfull...");
              alert("Please Login");
              nav("/Login");
            } else if (res.data === "Email is Already Taken") {
              alert("Email Already Exists");
            }
          });
      } catch (err) {
        alert(err);
      }
    }
  }

  async function Login(Event) {
    Event.preventDefault();
    try {
      nav("/Login");
    } catch (err) {
      alert(err);
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
        <select name="userType" className="userRoleInput" value={usertype}  onChange={(event) => setUsertype(event.target.value)}>
          <option value="Select">- Select -</option>
          <option value="ADVISOR">Advisor</option>
          <option value="STUDENT">Student</option>
        </select>
        {usertype === "STUDENT" && (
          <>
            <label className="combinationNoLabel">
              Combination Number&emsp;
            </label>

            <input
              type="text"
              className="combinationNoInput"
              value={combinationNo}
              onChange={(event) => {
                setCombinationNo(event.target.value);
              }}
            />
          </>
        )}

        {usertype === "ADVISOR" && (
          <>
            <label className="subjectAreaLabel">Subject Area&emsp;</label>

            <input
              type="text"
              className="subjectAreaInput"
              value={subjectArea}
              onChange={(event) => {
                setSubjectArea(event.target.value);
              }}
            />

            <label className="educationQualificationLabel">
              Education Qualification&emsp;
            </label>

            <input
              type="text"
              className="educationQualificationInput"
              value={educationQualification}
              onChange={(event) => {
                setEducationQualification(event.target.value);
              }}
            />
          </>
        )}

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
            setConPassword(event.target.value);
          }}
        />

        <button class="StudentSignUpButton" type="submit" onClick={save}>
          <b>Sign Up</b>
        </button>
      </div>

      <div className="signup-RightHalf">
        <h3 className="signup-LoginText">
          <b>Already have an account ?</b>
        </h3>
        <h4 className="signup-LoginText2">Sign in Here</h4>
        <button className="signup-LoginButton" onClick={Login}>
          <b>Sign in</b>
        </button>
      </div>
    </div>
  );
}

export default SignUp;

// import React, { useState } from "react";
// import './StudentSignUp.css'
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function StudentSignUp() {
  
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const usertype = null;
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmpassword] = useState("");
//   const nav = useNavigate();

//   async function save(event) {
//     event.preventDefault();
//     if(firstname === ""){
//       alert("First Name cannot be empty");
//     }else if(lastname === ""){
//       alert("Last Name cannot be empty");
//     }else if(email === ""){
//       alert("email cannot be empty");
//     }else if(password === ""){
//       alert("password cannot be empty");
//     }else if(password !== confirmpassword){
//       alert("Confirm password does not match");
//     }else{
//       try {
//         const res = await axios.post("http://localhost:8080/api/users/register/student", {
//           firstName: firstname,
//           lastName:lastname,
//           // userType:usertype,
//           email: email,
//           password: password,
//           role: "STUDENT",
//         }).then((res) =>
//           {
//             console.log(res.data);
//         if(res.data === "User Registration Successfull...!"){
//           alert("Registration Successfull");
//           nav('/Login');
//         }else if(res.data === "Email is Already Taken"){
//           alert("Email Already Exists");
//         }
//       }
//       );
//       } catch (err) {
//         alert(err);
//       }
//     }
//   }

//   async function Login(Event)  {
//     Event.preventDefault();
//     try{
//         nav('/Login');
//     }catch(err){
//         alert(err)

//     }

//   }



//   return (
//     <div class="container">
//         <div class="LeftSideContainer">
//               <p className="text-start-large-text">
//                 <b>Create Account</b>
//               </p>
          
//               <label for="firstnameController" className="firstNameLabel">
//                 First Name&emsp;
//               </label>
//               <input
//                 type="text"
//                 className="firstnameInput"
//                 value={firstname}
//                 onChange={(event) => {
//                   setFirstname(event.target.value);
//                 }}
//               />
          
          
//               <label for="lastnameController" class="lastNameLabel">
//                 Last Name&emsp;
//               </label>
//               <input
//                 type="text"
//                 className="lastnameInput"
//                 value={lastname}
//                 onChange={(event) => {
//                   setLastname(event.target.value);
//                 }}
//               />
          
//             <label for="exampleFormControlInput1" className="emailLabel">
//               Email address&emsp;
//             </label>
//             <input
//               type="email"
//               className="emailInput"
//               placeholder="&emsp;name@example.com"
//               value={email}
//               onChange={(event) => {
//                 setEmail(event.target.value);
//               }}
//             />
          
          
//             <label className="chooseLabel">Choose the User Type: &emsp;</label>
//             <select name="userType" className="userRole" value={usertype} >
//                 <option value="Select">- Select -</option>
//                 <option value="advisor">Advisor</option>
//                 <option value="student">Student</option>
//             </select>
          
          
//             <label for="passwordInput" className="passwordLabel">
//               Password&emsp;
//             </label>
//             <input
//               type="password"
//               className="passwordInput"
//               value={password}
//               onChange={(event) => {
//                 setPassword(event.target.value);
//               }}
//             />
        
          
//             <label for="confirmPasswordController" className="confirmPasswordLabel">
//               Confirm Password&emsp;
//             </label>
//             <input
//               type="password"
//               className="confirmPasswordInput"
//               value={confirmpassword}
//               onChange={(event) => {
//                 setConfirmpassword(event.target.value);
//               }}
//             />
          
        
//             <button
//               class="StudentSignUpButton"
//               type="submit"
//               onClick={save}
//             >
//               <b>Sign Up</b>
//             </button>
//           </div>
        
      
//           <div className="signup-RightHalf">
//               <h3 className="signup-LoginText">
//                   <b>Already have an account ?</b>
//               </h3>
//               <h4 className="signup-LoginText2">
//                   Sign in Here
//               </h4>
//               <button className="signup-LoginButton" onClick={Login}>
//                   <b>Sign in</b>
//               </button>
//           </div>
        
//     </div>
//   );
// }

// export default StudentSignUp;