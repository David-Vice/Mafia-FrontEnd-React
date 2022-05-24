import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './sign-up.css'
import RegisterForm from '../components/RegisterForm'
import { Redirect } from 'react-router-dom'
import { getCookie } from '../components/Helpers'
const SignUp = (props) => {
  if (getCookie("token")) {
    return  <Redirect  to="/" />
  }
  else
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>Sign Up - Mafia</title>
        <meta property="og:title" content="Sign Up - Mafia" />
      </Helmet>
      <header data-role="Header" className="sign-up-header">
        <nav className="sign-up-nav">
          <span className="sign-up-attitude">Attitude</span>
          <span className="sign-up-rules">Rules</span>
          <span className="sign-up-abous-us">About us</span>
        </nav>
        <div className="sign-up-home">
          <Link to="/" className="sign-up-home1 button">
            Home
          </Link>
        </div>
      </header>
      <div className="sign-up-container01">
        <div className="sign-up-container02"></div>
        <div className="sign-up-container03">
          <div className="sign-up-container04">
            <img
              alt="image"
              src="/playground_assets/mafia__3_-removebg-preview-600w.png"
              className="sign-up-image"
            />
          </div>
          <div className="sign-up-container05">
           <RegisterForm></RegisterForm>
            <div className="sign-up-container06" style={{marginTop:   '100px'}}  >
              <span className="sign-up-text2">
                Already have an account?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link to="/login" className="sign-up-navlink">
                Log in
              </Link>
            </div>
            <div className="sign-up-container07" style={{marginTop:  '100px'}} >
              <div className="sign-up-container08">
                <img
                  alt="image"
                  src="/playground_assets/800px-google__g__logo.svg-removebg-preview-1500w.png"
                  className="sign-up-image1"
                />
              </div>
              <div className="sign-up-container09">
                <img
                  alt="image"
                  src="/playground_assets/1024px-facebook_logo__2019_-removebg-preview-1500w.png"
                  className="sign-up-image2"
                />
              </div>
              <div className="sign-up-container10">
                <img
                  alt="image"
                  src="/playground_assets/microsoft_logo-removebg-preview-1500w.png"
                  className="sign-up-image3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
