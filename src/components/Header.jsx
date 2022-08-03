import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import {MdOutlineNotificationsNone} from "react-icons/md"
import '../css/Header.css'


function Header() {
  return (
    <div>
        <span className='appName'>Grama Check</span>
       <FaRegUserCircle className='userIcon'/>
       <MdOutlineNotificationsNone className='notifyIcon'/>
    </div>
  )
}

export default Header