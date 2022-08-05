import React from "react";
import "../css/Home.css"
function Home(){
    
    return(
        <div>
            <div className="buttons">
                <button type="submit" className="signinBtn">Sign In</button>
                <h6 className="textOne">Don't have an account?</h6>
                <h6 className="signupText" >Sign Up </h6>
            </div>
        </div>
    )
}
export default Home