import React from 'react'
import '../css/Footer.css'
import {useNavigate} from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const routeToHelp = () => {
    navigate('/help')
  }
  return (
    <div className='footer'>
        <div className='teamName'>
          ©2022 AWS Team
        </div>
        <div className='helpContainer' onClick={routeToHelp}>
          Help
        </div>
    </div>
  )
}

export default Footer
