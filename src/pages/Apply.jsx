import React from 'react'
import '../css/Apply.css'
import Header from "../components/Header"
import { useState } from 'react';
import Footer from "../components/Footer"

const Apply = () => {
  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='formHeading'>
        Grama Certificate Application Form
      </div>

      <div className='formbody'>
        <Form />
      </div>
      <div className='footer'>
        <Footer />
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


  handleBtnClicked() {
    console.log(this.state.gramaApplicant);

    var nic = this.state.gramaApplicant.nic;
    var address = this.state.gramaApplicant.address;

    this.invokeIdentityApi(nic);
    this.invokeAddressCheckApi(nic, address);
  }

  handleApplyBtnClicked() {

  }


  invokeIdentityApi(nic) {
    // var testNic = '970852414V';

    //const requestURL = "https://3m8ljy3y4h.execute-api.us-east-1.amazonaws.com/dev/applicantinfo?nic=" + nic + "&client_id=ASI3DoYAWS6HCEiZypwYt3StLwUnFs366Ga5Jvfm";

    const requestURL = "https://ppbz12ezl9.execute-api.us-east-1.amazonaws.com/default/info?nic=" + nic
    
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

  invokeAddressCheckApi(nic, address) {
    // var testNic = '970852414V';
    // var testAddress = 'No 12, nawala road, kotte';

    //const requestURL = "https://tnk36i6qb1.execute-api.us-east-1.amazonaws.com/addresscheckStage/addresscheck?nic=" + nic + "&address=" + address + "&client_id=JZbsreUvgdagqagyrv10i6blT27DacpW2PLeGuA0";

    const requestURL = "https://0r0cdb7lsg.execute-api.us-east-1.amazonaws.com/default/info?address=" + address
 
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
  handleReset = e => {
    this.setState({
      gramaApplicant: {
        nic: "",
        address: ""
      },
      nicValidation: "",
      addressValidation: ""
    })
  }

  render() {
    return (
      <div className='gramaApplyFormContainer'>
        <form className='gramaApplyForm'>
          <div className='firstRaw'>
            <div className='nicLabelDiv'>
              <label className='nicLabel'>
                NIC:
              </label>
            </div>
            <div className='nicTextDiv'>
              <input className='nicInput' type="text" value={this.state.gramaApplicant.nic} onChange={this.handleNicChanged.bind(this)} />
              
            </div>
          </div>
          <label className='validationtxt'>{this.state.nicValidation}</label>
          <div className='secondRaw'>
            <div className='addressLabelDiv'>
              <label className='addressLabel'>
                Address:
              </label>
            </div>
            <div className='addressInputDiv'>
              <input className='addressInput' value={this.state.gramaApplicant.address} onChange={this.handleAddressChanged.bind(this)} />
            </div>
          </div>
          <label className='validationtxt'>{this.state.addressValidation}</label>
          <div className='thirdRaw'>
          <input type="button" value="Verify" className='verifyButton button' onClick={this.handleBtnClicked.bind(this)} />
            <input type="button" value="Reset" className='resetButton button' onClick={this.handleReset} />
            <input type="button" value="Apply" className='applyGramaButton button' onClick={this.handleApplyBtnClicked.bind(this)} />
         
          </div>

          {/* 
          <label className='labels'>
            NIC:
            <input type="text" className='nicTxtBox' value={this.state.gramaApplicant.nic} onChange={this.handleNicChanged.bind(this)} />
          </label>

          <br />
          

          <br />

          

          <br />
          

          <br /> */}

          {/* <label >
          Proof of Residence:
          <input type="file" className='filebox'/>
        </label> */}



          {/* <div className='btnPanel'>
            
          </div>

         

          <div className='applySection'>
             </div> */}

        </form>
      </div>

    );
  }
}




export default Apply