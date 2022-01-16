import React from 'react'
import './Footer.css'


import APPSTORE from '../images/app store.png'
import PLAYSTORE from '../images/play store.png'

const Footer = () => {
    return (
        <div className='footerPage'>
          <div className="footer1">
                <div className="content">
                    <h5>EMPOWERING, SUPPORTING, AND CONNECTING CITIZEN JOURNALISTS TO SHARE AND PROTECT THEIR STORIES.</h5>
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
