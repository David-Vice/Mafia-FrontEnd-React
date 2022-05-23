import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Mafia</title>
        <meta property="og:title" content="Profile - Mafia" />
      </Helmet>
      <header data-role="Header" className="profile-header">
        <nav className="profile-nav">
          <Link to="/" className="profile-navlink">
            <img
              alt="image"
              src="/playground_assets/1-removebg-preview-200h.png"
              className="profile-image"
            />
          </Link>
          <span className="profile-attitude">Attitude</span>
          <span className="profile-rules">Rules</span>
          <span className="profile-about-us">About us</span>
        </nav>
      </header>
      <div className="profile-main">
        <div className="profile-container01">
          <div className="profile-container02">
            <img
              alt="image"
              src="/playground_assets/3576937-400w.png"
              className="profile-image1"
            />
          </div>
          <div className="profile-container03"></div>
          <div className="profile-container04">
            <form className="profile-form">
              <div className="profile-container05">
                <div className="profile-container06">
                  <label className="profile-text">Username</label>
                  <input
                    type="text"
                    placeholder="username"
                    className="profile-textinput input"
                  />
                </div>
                <div className="profile-container07"></div>
                <div className="profile-container08">
                  <label className="profile-text01">
                    <span>Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="profile-textinput1 input"
                  />
                </div>
                <div className="profile-container09"></div>
                <div className="profile-container10">
                  <input
                    type="submit"
                    value="Save Changes"
                    placeholder="placeholder"
                    className="profile-textinput2 input"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="profile-container11">
        <div className="profile-container12">
          <div className="profile-container13">
            <h1 className="profile-text03">
              <span>Rating</span>
            </h1>
          </div>
          <div className="profile-container14">
            <h1 className="profile-text05">
              <span>XX</span>
            </h1>
          </div>
        </div>
        <div className="profile-container15">
          <ul className="profile-ul list">
            <li className="profile-list-item list-item">
              <span className="profile-text07">Text</span>
            </li>
            <li className="profile-list-item1 list-item">
              <span className="profile-text08">Text</span>
            </li>
            <li className="profile-list-item2 list-item">
              <span className="profile-text09">Text</span>
            </li>
            <li className="profile-list-item3 list-item">
              <span className="profile-text10">Text</span>
            </li>
            <li className="profile-list-item4 list-item">
              <span className="profile-text11">Text</span>
            </li>
            <li className="profile-list-item5 list-item">
              <span className="profile-text12">Text</span>
            </li>
            <li className="profile-list-item6 list-item">
              <span className="profile-text13">Text</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile
