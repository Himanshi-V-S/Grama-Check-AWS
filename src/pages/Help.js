import React from "react";
import "../css/Help.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
function Help(){
    
    return(
        <div>
            <div className='header'><Header/></div>
            <div className="helpFormContainer">
                <form>
                    
                </form>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}
export default Help