import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Mafia</title>
        <meta property="og:title" content="Page - Mafia" />
      </Helmet>
    </div>
  )
}

export default Page
