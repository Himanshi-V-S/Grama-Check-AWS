import React from "react";
import "../css/Home.css";
import homeImage from "../Images/homePhoto.jpg";
import logo from "../Images/Logo.png"
import Footer from "../components/Footer";

import Header from "../components/Header";

import { useAuthContext } from "@asgardeo/auth-react";
import { render } from "@testing-library/react";




function Home() {


    return (
        <div className="homeBody">
            <div className='header'><Header /></div>
            <div className="homeMainContainer">
                <div className="homeImageContainer">
                    <img className="homeImage" src={homeImage} alt="Logo" />
                </div>
                <div className="loginContainer">
                    <div className="logoContainer">
                        <h1 className="greeting">Welcome to GramaCheck!</h1>
                        <img className="logoImage" src={logo} alt="Logo" />
                    </div>
                    <div className="buttons">


                        <h6 className="textOne">Don't have an account?</h6>
                        <a className="signupLink" href={"https://accounts.asgardeo.io/t/awsgramacheck/accountrecoveryendpoint/register.do?client_id=rgfykPFL3gb_U3sJL1jIzKJbfRMa&code_challenge=AvtUGsul-IfhmZAowA8ohxgZA6Vv4j7aXIVF9HwkEcY&code_challenge_method=S256&commonAuthCallerPath=%2Ft%2Fawsgramacheck%2Foauth2%2Fauthorize&forceAuth=false&passiveAuth=false&redirect_uri=https%3A%2F%2Fd1lidqfrgb5glk.cloudfront.net%2Fmain&response_mode=query&response_type=code&scope=openid+profile&state=request_0&sessionDataKey=a18b57bc-f725-4955-b02d-c23b54c7bf94&relyi"}><h6 className="signupText" >Sign Up </h6></a>
                    </div>
                </div>



            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )

}
export default Home