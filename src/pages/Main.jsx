import React, {useState} from 'react';
import '../css/Main.css';
import {useNavigate} from 'react-router-dom';
import Header from "../components/Header"
import Footer from '../components/Footer';

function Main() {
  const navigate = useNavigate();

  const routeToApply = () => {
    navigate('/apply')
  }

  const routeToPoliceReport = () => {
    navigate('/applyPoliceReport')
  }

  //To show and hide status
  const [show,setShow] = useState(false);

  const statuses =["Pending", "Processing", "More information required", "Completed"]

  const statusMessage = statuses[0];    //Add a nested if to switch message depending on status obtained from backend

  const showStatus = () => {
    setShow(!show)
  }

    return (
      <div>
        <div className='header'>
            <Header/>
          </div>
        <Heading/>

        <div className='menu'>
            <button className='gramabtn' onClick={routeToApply}>Apply for Grama Certificate</button>
            <br/>
            <button className='policebtn' onClick={routeToPoliceReport}>Apply for Police Clearance Report</button>
            <br/>
            <hr className='divider'/>
            <button className='statusbtn' onClick={showStatus}>Check Status</button>
        </div>

        {
          show?<p className='status'>Status: {statusMessage}</p>:null
        }

          <div className='footer'>
                <Footer/>
          </div>
      </div>
    );
  }

  

  function Heading(){
    return(
      <h1 className = 'mainHeading'>Welcome to Grama Check</h1>
    );
  }
  
export default Main;