import React from 'react'
import '../css/ApplyPoliceReport.css'
import Header from "../components/Header"
import Footer from "../components/Footer"

function Apply() {
  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='formHeading'>
        Police Clearance Report Application Form
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
      policeReportApplicant: {
        nic: props.nic
      },

      gramaValidation: props.gramaValidation,
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

  handleBtnClicked() {
    console.log(this.state.policeReportApplicant);

    var nic = this.state.policeReportApplicant.nic;

    this.invokePoliceCheckApi(nic);
  }
  handleReset = e => {
    this.setState({
      policeReportApplicant: {
        nic: ""
      },
      gramaValidation: "",
      policeClearance: ""
    })
  }
  invokePoliceCheckApi(nic) {
    // var testNic = '970852414V';

    //const requestURL = "https://repu51rywd.execute-api.us-east-1.amazonaws.com/prod/check?nic=" + nic + "&client_id=K3BShTFHYa4AFUNI9Abna7a5S6bXWW2352OdXflI";

    const requestURL = "https://nrelaqz9e3.execute-api.us-east-1.amazonaws.com/default/info?nic=" + nic

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
      <div className='policeApplyFormContainer'>
        <form className="policeApplyForm">
          <div className='policeFirstRaw'>
            <div className='policeNicLabelDiv'>
              <label className='policeNicLabel'>
                NIC:
              </label>
            </div>
            <div className='policeNicInputDiv'>
              <input type="text" className='policeNicInput' value={this.state.policeReportApplicant.nic} onChange={this.handleNicChanged.bind(this)} />
            </div>
          </div>
          <div className='policeSecondRaw'>
            <div className='policeCriminalLabelDiv'>
              <label className='policeCriminalLabel'>
                Criminal Report Status :
              </label>
            </div>
            <div className='policeCriminalOutputDiv'>
              <input type="text" disabled className='filebox' value={this.state.policeClearance} />

            </div>
          </div>
          <div className='policeThirdRaw'>
            <input type="button" value="Verify" className='verifyButton button' onClick={this.handleBtnClicked.bind(this)} />
            <input type="button" value="Reset" className='resetButton button' onClick={this.handleReset} />
            <input type="button" value="Apply" className='applyPRBtn button' />
          </div>

          {/* <label className='validationtxt'>{this.state.gramaValidation}</label> */}

        </form>
      </div>

    );
  }
}

export default Apply