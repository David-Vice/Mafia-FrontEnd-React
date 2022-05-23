import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './sign-up.css'

const SignUp = (props) => {
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
            <form name="submit" method="post" className="sign-up-form">
              <ul className="sign-up-ul list">
                <li className="list-item">
                  <label className="sign-up-label">
                    <span>Username</span>
                  </label>
                </li>
                <li className="list-item">
                  <input
                    type="text"
                    placeholder="Username"
                    className="sign-up-textinput input"
                  />
                </li>
                <li className="list-item">
                  <label className="sign-up-text1">Password</label>
                </li>
                <li className="list-item">
                  <input
                    type="password"
                    placeholder="Password"
                    className="sign-up-textinput1 input"
                  />
                </li>
                <li className="sign-up-li2 list-item"></li>
                <li className="sign-up-li3 list-item"></li>
              </ul>
              <input
                type="submit"
                value="Sign Up"
                className="sign-up-textinput2 input"
              />
            </form>
            <div className="sign-up-container06">
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
            <div className="sign-up-container07">
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
