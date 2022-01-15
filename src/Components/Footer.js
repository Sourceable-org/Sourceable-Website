import React from 'react'
import './Footer.css'


import APPSTORE from '../images/app store.png'
import PLAYSTORE from '../images/play store.png'

const Footer = () => {
    return (
        <div className='footerPage'>
          <div className="footer1">
                <div className="content">
                    <h1>PROTECT YOUR WORLD.</h1>
                    <b>DOWNLOAD FOR FREE</b>
                    <div>
                        <img src={APPSTORE} alt="APP" />
                        <img src={PLAYSTORE} alt="PLAY" />
                    </div>
                </div>
          </div>
          <div className="footer2">
            Copyright © 2022 Sourceable.com
          </div>
        </div>
    )
}

export default Footer
