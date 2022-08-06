import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from '../components/Footer'
import "../css/signup.css"
function Signup(){
    const navigate = useNavigate();
    const navigateToSignin = () =>{navigate('/signin');};
    return (
        <div className="mainContainer">
            <h1 className="heading">Sign Up For Grama Check</h1>

            <form className="signupForm">
                <div className="formMainContainer">
                    <div className="line"> 
                        <div className="cell">
                            <label for="firstname" className="labels"> First Name:</label>         
                            <input className="textInputs" type="text" name="firstname" />
                        </div>
                        <div className="cell">
                            <label for="lastname" className="labels"> Last Name: </label>         
                            <input className="textInputs" type="text" name="lastname" />
                        </div>
                        
                    </div>
                    <div className="line"> 
                        <div className="cell">
                            <label for="psw" className="labels"> Password: </label>         
                            <input className="textInputs" type="password" name="psw" />
                        </div>
                        <div className="cell">
                            <label for="pswRepeat" className="labels"> Confirm Password: </label>         
                            <input className="textInputs" type="password" name="pswRepeat" />
                        </div>
                    </div>
                    <div className="line">
                        <div className="cell">
                            <label className="labels"> Birthday: </label>         
                            <div className="birthdayContainer">
                                <input className="monthInput" type="number" placeholder="Month" name="month" />
                                <input className="dayInput" type="number" placeholder="Day" name="day" />
                               
                                
                                <input className="yearInput" type="number" placeholder="Year" name="year" />
                            </div>
                        </div>
                        <div className="cell">
                            <label for="gender" className="labels"> Gender: </label>
                            <div className="genderContainer">
                                <input type="radio" name="gender" value="male" /> Male
                                <input type="radio" name="gender" value="female" /> Female
                                <input type="radio" name="gender" value="other" /> Other
                            </div>
                                     
                            
                        </div>
                    </div>
                    <div className="line"> 
                        <div className="cell">
                            <label for="mobileNo" className="labels"> Mobile Number: </label>         
                            <input className="textInputs" type="text" name="mobileNo" />
                        </div>
                        <div className="cell">
                            <label for="email" className="labels"> Email Address: </label>         
                            <input className="textInputs" type="email" name="email" />
                        </div>
                    </div>
                    <div className="line"> 
                        <div className="cell">
                            <label for="nic" className="labels"> NIC/Passport Number: </label>         
                            <input className="textInputs" type="text" name="nic" />
                        </div>
                        <div className="cell">
                            <label for="address" className="labels"> Address: </label>         
                            <input className="textInputs" type="text" name="address" />
                        </div>
                    </div>

                </div>
                <div>
                    <button type="submit" className="signupBtn">Sign Up</button>
                    <h6 className="text">Have already an account?</h6>
                    <h6 className="loginText" onClick={navigateToSignin}>Login Here</h6>
                </div>
                
            </form>
            
        </div>
    )
}
export default Signup