import React from 'react'
import '../css/Apply.css'

function Apply() {
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
  }
  
  render() {
    return (
      <form>
        <label>
          NIC:
          <input type="text" className='nicTxtBox'/>
        </label>

        <br/>

        <label>
          Address:
          <textarea className='addressTxtBox'/>
        </label>

        <br/>

        <label >
          Proof of Residence:
          <input type="file" className='filebox'/>
        </label>

        <br/>

        <div className='btnPanel'>
          {/* Create and add a function when apply btn is clicked  */}
          <input type="submit" value="Apply" className='applyBtn btn'/>  
          <input type="reset" value="Reset" className='resetBtn btn'/>
        </div>
    
        </form>
    );
  }
 }

export default Apply