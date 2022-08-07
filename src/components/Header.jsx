import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import {MdOutlineNotificationsNone} from "react-icons/md"
import '../css/Header.css'
import logo from "../Images/whiteLogo.png"


function Header() {
  return (
    <div>
        <img className="appName" src={logo} alt="Logo" />
        
       <FaRegUserCircle className='userIcon'/>
       <MdOutlineNotificationsNone className='notifyIcon'/>
    </div>
  )
}

export default Header