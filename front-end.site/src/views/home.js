import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mafia</title>
        <meta property="og:title" content="Mafia" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <nav className="home-nav">
          <span className="home-attitude">Attitude</span>
          <span className="home-rules">Rules</span>
          <span className="home-about-us">About us</span>
        </nav>
        <div className="home-logreg">
          <Link to="/login" className="home-login button">
            Login
          </Link>
          <Link to="/sign-up" className="home-sign-up button">
            Sign Up
          </Link>
        </div>
      </header>
      <div className="home-main">
        <div className="home-container1"></div>
        <div className="home-container2">
          <div className="home-container3">
            {<img
              alt="image"
              src="/playground_assets/1-removebg-preview-500w.png"
              className="home-image"
            />}
          </div>
          <div className="home-container4">
            <img
              alt="image"
              src="/playground_assets/mafia-removebg-preview-500w.png"
              className="home-image1"
            />
          </div>
          <div className="home-container5">
            <button className="home-button button">
              <span className="home-text">
                <span>Play</span>
                <span className="home-text2"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
