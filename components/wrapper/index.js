import React, { Component } from 'react'
// import ReactGA from 'react-ga'
import Head from 'next/head'

export default class App extends Component {
  componentDidMount () {
    // This is going to be used for google analytics later one
    // ReactGA.initialize(//ID)
    // ReactGA.pageview(document.location.pathname)
  }
  render () {
    return (
      <div className='wrapperHeight'>
        <Head>
          <title>TSD Trading Inc.</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width maximum-scale=1.0, user-scalable=no' />
          <meta name='apple-mobile-web-app-title' content='TSD Inc.' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='blue' />
          <meta name='theme-color' content='white' />
          <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
          <link rel='stylesheet' href='https://unpkg.com/leaflet@1.0.3/dist/leaflet.css' />
          <style>
            {`
            .leaflet-container {
              height: 100%;
              width: 100%;
            }
            .leaflet-container a {
              color: #2d517b;
              text-decoration: none;
              font-size: 15px;
              font-family: 'Montserrat', sans-serif;
            }
            .leaflet-control-attribution a {
              display:none;
            }
            body {
              background-color: white;
              width: 100%;
              height: 100%;
              overflow-x:hidden;
              font-family: Montserrat;
              
            }
            .container {
              height: 100vh;
              width: 100%;
            }
            #__next {
              height: 100vh;
            }
            `}
          </style>
        </Head>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
