import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md"
import '../css/Header.css'
import logo from "../Images/whiteLogo.png"
import { useAuthContext } from "@asgardeo/auth-react";


function Header() {

  const { isLoading, state, signIn, signOut } = useAuthContext();

  return (
    <div>
      <div className='navBar'>
        <div className='navBarLogo'>
          <img className="appName" src={logo} alt="Logo" />
        </div>
        <div className='naveBarButtons'>
          {
            state.isAuthenticated
              ? (
                <button type="submit" className="navButton" onClick={() => signOut()}>Sign Out</button>
              ) :
              <button type="submit" className="navButton" onClick={() => signIn()}>Sign In</button>

          }
        </div>
      </div>






    </div>
  )


}

export default Header