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
      },

      nicValidation: props.nicValidation
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

    this.invokeIdentityApi(nic);
  }


  invokeIdentityApi(nic){
    // var testNic = '123456789V';
    // const requestURL = "https://3m8ljy3y4h.execute-api.us-east-1.amazonaws.com/dev/submittedinfo?nic=$testNic&client_id=ASI3DoYAWS6HCEiZypwYt3StLwUnFs366Ga5Jvfm";

    //Test invoke url
    const requestURL = "https://3m8ljy3y4h.execute-api.us-east-1.amazonaws.com/dev/submittedinfo?nic=1234&client_id=ASI3DoYAWS6HCEiZypwYt3StLwUnFs366Ga5Jvfm";

    fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.validation);
      
      this.setState({
        nicValidation: data.validation
      });
    })

  }


  render() {
    return (
      <form>
        <label>
          NIC:
          <input type="text" className='nicTxtBox' value={this.state.gramaApplicant.nic} onChange={this.handleNicChanged.bind(this)}/>
        </label>

        <br/>
        <label className='nicValidation'>{this.state.nicValidation}</label>

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


 

export default Apply