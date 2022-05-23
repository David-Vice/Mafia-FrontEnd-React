import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text button">{props.about_us}</span>
      <span className="navigation-links-text1 button">{props.rules}</span>
      <span className="navigation-links-text2 button">{props.attitude}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  attitude: 'Attitude',
  about_us: 'About Us',
  rootClassName: '',
  rules: 'Rules',
}

NavigationLinks.propTypes = {
  attitude: PropTypes.string,
  about_us: PropTypes.string,
  rootClassName: PropTypes.string,
  rules: PropTypes.string,
}

export default NavigationLinks
