import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import {MdOutlineNotificationsNone} from "react-icons/md"
import '../css/Header.css'
import logo from "../Images/whiteLogo.png"
import { useAuthContext } from "@asgardeo/auth-react";


function Header() {

  const { isLoading, state, signIn, signOut } = useAuthContext();
  
  return (
    <div>
        <img className="appName" src={logo} alt="Logo" />
        
       <FaRegUserCircle className='userIcon'/>
       {/* <MdOutlineNotificationsNone className='notifyIcon'/> */}
       {
                            state.isAuthenticated
                            ?(
                                <button type="submit" className="signinBtn" onClick={ () => signOut() }>Sign Out</button>
                            ):
                            <button type="submit" className="signinBtn" onClick={ () => signIn() }>Sign In</button>
                            
                        }

    </div>
  )

  
}

export default Header