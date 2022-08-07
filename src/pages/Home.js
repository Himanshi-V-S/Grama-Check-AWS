import React from "react";
import "../css/Home.css";
import homeImage from "../Images/homePhoto.jpg";
import logo from "../Images/Logo.png"
import Footer from "../components/Footer";
function Home(){
    
    return(
        <div className="homeBody">
            <div className="homeMainContainer">
                 <div className="homeImageContainer">
                    <img className="homeImage" src={homeImage} alt="Logo" />
                </div>
                <div className="loginContainer">
                    <div className="logoContainer">
                        <img className="logoImage" src={logo} alt="Logo" />
                    </div>
                    <div className="buttons">
                        <button type="submit" className="signinBtn">Sign In</button>
                        <h6 className="textOne">Don't have an account?</h6>
                        <h6 className="signupText" >Sign Up </h6>
                    </div>
                </div>
                
                

            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}
export default Home