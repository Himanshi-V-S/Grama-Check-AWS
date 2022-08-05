import React from 'react'
import '../css/Apply.css'
import {useState} from 'react';

const Apply = () => {
    return (
    <div>
        <div className='formHeading'>
            Grama certificate application form
        </div>

        <div className='formbody'>
          <Form/>
        </div>

    </div>
  )
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gramaApplicant: {
        nic: props.nic,
        address: props.address
      }
    }
  }

  handleNicChanged(event) {
    // Extract the current value of the gramaApplicant from state
    var gramaApplicant = this.state.gramaApplicant;
  
    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
  
    // Update the gramaApplicant object's  nic
    gramaApplicant.nic = modifiedValue;
  
  
    // Update the state object
    this.setState({
      gramaApplicant: gramaApplicant
    });
  }  

  handleAddressChanged(event) {
    // Extract the current value of the gramaApplicant from state
    var gramaApplicant = this.state.gramaApplicant;
  
    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
  
    // Update the gramaApplicant object's  address
    gramaApplicant.address = modifiedValue;
  
  
    // Update the state object
    this.setState({
      gramaApplicant: gramaApplicant
    });
  }  


  handleBtnClicked(){
    console.log(this.state.gramaApplicant);

    var nic = this.state.gramaApplicant.nic;
    var address = this.state.gramaApplicant.address;

    invokeIdentityApi(nic);
  }

  render() {
    return (
      <form>
        <label>
          NIC:
          <input type="text" className='nicTxtBox' value={this.state.gramaApplicant.nic} onChange={this.handleNicChanged.bind(this)}/>
        </label>

        <br/>

        <label>
          Address:
          <textarea className='addressTxtBox' value={this.state.gramaApplicant.address} onChange={this.handleAddressChanged.bind(this)}/>
        </label>

        <br/>

        <label >
          Proof of Residence:
          <input type="file" className='filebox'/>
        </label>

        <br/>

        <div className='btnPanel'>
          {/* Create and add a function when apply btn is clicked  */}
          <input type="button" value="Apply" className='applyBtn btn' onClick={this.handleBtnClicked.bind(this)}/>  
          <input type="reset" value="Reset" className='resetBtn btn'/>
        </div>
    
        </form>
    );
  }
 }


 function invokeIdentityApi(nic) {
  // const testNic = '12345678V';

  const testNic = nic;

  console.log("test:", nic);

  require('dotenv').config()
  console.log(process.env);

  const requestURL = "https://3m8ljy3y4h.execute-api.us-east-1.amazonaws.com/dev/submittedinfo?nic=testNic&client_id=process.env.IDENTITY_API";

  fetch(requestURL)
  .then((response) => {
    console.log(response);
    // const myObj = JSON.parse(response.json);
    // console.log(myObj.message);
  })
  .catch((error) => {
    console.log(error);
  })
  // .then( response => response.json())
 }

export default Apply