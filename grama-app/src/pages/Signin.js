import React from "react";
import "../css/Signin.css";
import { useNavigate } from "react-router-dom";
function Signin(){
    const navigate = useNavigate();
    const navigateToSignup = () =>{navigate('/signup');};
    return (
        <div>
            <form className="signinForm">
                <div className="cell">
                    <label for="email" className="label">Email Address </label>
                    <input className="inputs" type="text" name="email" placeholder="Please enter your email address"/>
                </div>
                <div className="cell">
                    <label for="psw" className="label"> Password  </label>         
                    <input className="inputs" type="password" name="psw" placeholder="Enter your password"/>
                </div>
                <div>
                    <button type="submit" className="signinBtn">Sign In</button>
                    <h6 className="textOne">Don't have an account?</h6>
                    <h6 className="signupText" onClick={navigateToSignup}>Sign Up </h6>
                </div>
            </form>
        </div>
    )
}
export default Signin