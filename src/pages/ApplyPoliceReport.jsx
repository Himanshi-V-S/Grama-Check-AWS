import React from 'react'
import '../css/ApplyPoliceReport.css'
import Header from "../components/Header"
import Footer from "../components/Footer"

function Apply() {
  return (
    <div>
        <div className='header'>
            <Header/>
        </div>
        <div className='formHeading'>
            Police clearance report application form
        </div>

        <div className='formbody'>
          <Form/>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
    </div>
  )
}

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='policeApplyFormContainer'>
      <form className="policeApplyForm">
        <label className='labels'>
          NIC:
          <input type="text" className='nicTxtBox'/>
        </label>

        <br/>

        <label  className='labels'>
          Criminal Report Status :
          <input type="text" disabled className='filebox'/>
        </label>

        <br/>

        <div className='btnPanel'>
          {/* Create and add a function when apply btn is clicked  */}
          <input type="submit" value="Apply" className='applyBtn btn'/>  
          <input type="reset" value="Reset" className='resetBtn btn'/>
        </div>
    
        </form>
      </div>
      
    );
  }
 }

export default Apply