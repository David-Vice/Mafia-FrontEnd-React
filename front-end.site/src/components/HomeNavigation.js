import React from 'react'
import { getCookie } from './Helpers'
import { Link } from 'react-router-dom'
export default function HomeNavigation() {
if (getCookie('token')==null) {    

  return (
    <div className="home-logreg">
    <Link to="/login" className="home-login button">
            Login
          </Link>
          <Link to="/sign-up" className="home-sign-up button">
            Sign Up
          </Link>
  </div>
    
  )
}else{
    return (
        <div className="home-logreg">
        <Link to="/profile" className="home-login button">
                Profile
              </Link>
              <Link to="/logout" className="home-sign-up button">
                Logout
              </Link>
      </div>
        
      )
}
}