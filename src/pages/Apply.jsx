import React from 'react'
import '../css/Apply.css'
import Header from "../components/Header"
import {useState} from 'react';
import Footer from "../components/Footer"

const Apply = () => {
    return (
    <div>
        <div className='header'>
            <Header/>
        </div>
        <div className='formHeading'>
            Grama certificate application form
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

    this.state = {
      gramaApplicant: {
        nic: props.nic,
        address: props.address
      },

      nicValidation: props.nicValidation,
      addressValidation: props.addressValidation,

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
    this.invokeAddressCheckApi(nic, address);
  }

  handleApplyBtnClicked(){
    
  }


  invokeIdentityApi(nic){
    // var testNic = '970852414V';
    
    const requestURL = "https://3m8ljy3y4h.execute-api.us-east-1.amazonaws.com/dev/applicantinfo?nic=" + nic + "&client_id=ASI3DoYAWS6HCEiZypwYt3StLwUnFs366Ga5Jvfm";

    fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.status);
      
      this.setState({
        nicValidation: data.status
      });
    })

  }

  invokeAddressCheckApi(nic, address){
    // var testNic = '970852414V';
    // var testAddress = 'No 12, nawala road, kotte';
    
    const requestURL = "https://tnk36i6qb1.execute-api.us-east-1.amazonaws.com/addresscheckStage/addresscheck?nic=" + nic + "&address=" + address + "&client_id=JZbsreUvgdagqagyrv10i6blT27DacpW2PLeGuA0";

    fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.status);
      
      this.setState({
        addressValidation: data.status
      });

    })

  }


  render() {
    return (
      <div className='gramaApplyFormContainer'>
        <form  className='gramaApplyForm'>
          
        <label className='labels'>
          NIC:
          <input type="text" className='nicTxtBox' value={this.state.gramaApplicant.nic} onChange={this.handleNicChanged.bind(this)}/>
        </label>

        <br/>
        <label className='validationtxt'>{this.state.nicValidation}</label>

        <br/>

        <label className='labels'>
          Address:
          <textarea className='addressTxtBox' value={this.state.gramaApplicant.address} onChange={this.handleAddressChanged.bind(this)}/>
        </label>

        <br/>
        <label className='validationtxt'>{this.state.addressValidation}</label>

        <br/>

        {/* <label >
          Proof of Residence:
          <input type="file" className='filebox'/>
        </label> */}

        <br/>

        <div className='btnPanel'>
          <input type="button" value="Verify" className='verifyBtn btn' onClick={this.handleBtnClicked.bind(this)}/>  
          <input type="reset" value="Reset" className='resetBtn btn'/>
        </div>

        <br/>

        <div className='applySection'>
          <input type="button" value="Apply" className='applyGramaBtn btn' onClick={this.handleApplyBtnClicked.bind(this)}/>
        </div>

        </form>
      </div>
      
    );
  }
 }


 

export default Apply