import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='teamName'>
        ©2022 AWS Team
      </div>
      <a className="helpLink" href='https://join.slack.com/t/gramacheckdev/shared_invite/zt-1egan99h3-bgkHecV0L5JilpMYgnmtpw'>
        <div className='helpContainer' >
          Help
        </div>
      </a>
    </div>
  )
}

export default Footer