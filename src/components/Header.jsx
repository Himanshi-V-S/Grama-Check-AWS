import React from 'react'
import '../css/Header.css'
import logo from "../Images/whiteLogo.png"
import { useAuthContext } from "@asgardeo/auth-react";


function Header() {

  const {state, signIn, signOut } = useAuthContext();
  

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
            <div>
              {/* <ul>
                <li>{state.username}</li>
              </ul> */}

              <button className='navButton' onClick={() => signOut()}>Logout</button>
            </div>
          )
          : <button className='navButton' onClick={() => signIn()}>Login</button>
      }
        </div>
      </div>






    </div>
  )


}

export default Header