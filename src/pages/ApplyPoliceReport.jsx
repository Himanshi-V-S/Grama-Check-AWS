import React from 'react'
import '../css/ApplyPoliceReport.css'

function Apply() {
  return (
    <div>
        <div className='formHeading'>
            Police clearance report application form
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
      policeReportApplicant: {
        nic: props.nic
      },

      gramaValidation:props.gramaValidation,
      policeClearance: props.policeClearance
  }
}

  handleNicChanged(event) {
    // Extract the current value of the policeReportApplicant from state
    var policeReportApplicant = this.state.policeReportApplicant;
  
    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
  
    // Update the gramaApplicant object's  nic
    policeReportApplicant.nic = modifiedValue;
  
    // Update the state object
    this.setState({
      policeReportApplicant: policeReportApplicant
    });
  }
  
  handleBtnClicked(){
    console.log(this.state.policeReportApplicant);

    var nic = this.state.policeReportApplicant.nic;

    this.invokePoliceCheckApi(nic);
  }

  invokePoliceCheckApi(nic){
    // var testNic = '970852414V';
    
    const requestURL = "https://repu51rywd.execute-api.us-east-1.amazonaws.com/prod/check?nic=" + nic + "&client_id=K3BShTFHYa4AFUNI9Abna7a5S6bXWW2352OdXflI";

    fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.status);
      
      this.setState({
        gramaValidation: data.gramaStatus,
        policeClearance: data.policeClearanceStatus

      });
    })

  }
  
  render() {
    return (
      <form>
        <label>
          NIC:
          <input type="text" className='nicTxtBox' value={this.state.policeReportApplicant.nic} onChange={this.handleNicChanged.bind(this)}/>
        </label>

        <br/>
        <label className='validationtxt'>{this.state.policeClearance}</label>

        <br/>

        <label >
          Grama certificate:
          <input type="file" className='filebox'/>
        </label>

        <br/>
        <label className='validationtxt'>{this.state.gramaValidation}</label>

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