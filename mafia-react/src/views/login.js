import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Mafia</title>
        <meta property="og:title" content="Login - Mafia" />
      </Helmet>
      <header data-role="Header" className="login-header">
        <nav className="login-nav">
          <span className="login-attitude">Attitude</span>
          <span className="login-rules">Rules</span>
          <span className="login-abous-us">About us</span>
        </nav>
        <div className="login-home">
          <Link to="/" className="login-home1 button">
            Home
          </Link>
        </div>
      </header>
      <div className="login-main">
        <img
          alt="image"
          src="/playground_assets/mafia__4_-removebg-preview-300w.png"
          className="login-image"
        />
        <form name="submit" method="post" className="login-form">
          <ul className="login-ul list">
            <li className="list-item">
              <label className="login-text">Username</label>
            </li>
            <li className="list-item">
              <input
                type="text"
                placeholder="Username"
                className="login-textinput input"
              />
            </li>
            <li className="list-item">
              <label className="login-label">
                <span>Password</span>
              </label>
            </li>
            <li className="list-item">
              <input
                type="password"
                placeholder="Password"
                className="login-textinput1 input"
              />
            </li>
            <li className="login-li2 list-item">
              <span className="login-text2">Forgot Password?</span>
            </li>
            <li className="login-li3 list-item"></li>
          </ul>
          <input
            type="submit"
            value="Login"
            className="login-textinput2 input"
          />
        </form>
        <div className="login-container1">
          <span className="login-text3">
            Don&apos;t have an account?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <Link to="/sign-up" className="login-navlink">
            Sign Up
          </Link>
        </div>
        <div className="login-container2">
          <div className="login-container3">
            <img
              alt="image"
              src="/playground_assets/800px-google__g__logo.svg-removebg-preview-1500w.png"
              className="login-image1"
            />
          </div>
          <div className="login-container4">
            <img
              alt="image"
              src="/playground_assets/1024px-facebook_logo__2019_-removebg-preview-1500w.png"
              className="login-image2"
            />
          </div>
          <div className="login-container5">
            <img
              alt="image"
              src="/playground_assets/microsoft_logo-removebg-preview-1500w.png"
              className="login-image3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
