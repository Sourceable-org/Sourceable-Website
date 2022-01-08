import React from 'react'
import './Banner.css'


import APPSTORE from '../images/app store.png'
import PLAYSTORE from '../images/play store.png'
const Banner = () => {
    return (
        <div className='homePage'>
            <div className='first'>
                <div className="part1-left">
                    <h1>Where people protect each other.</h1>
                    <p>Connect and live more safely. Citizen is a personal safety network that empowers you to protect yourself and the people and places you care about. Download for access to real-time 911 alerts, instant help from crisis responders, and safety tracking for friends and families.</p>
                    <b> DOWNLOAD SECURITY</b>
                    <div>
                        <img src={APPSTORE} alt="APP STORE" />
                        <img src={PLAYSTORE} alt="PLAY STORE" />
                    </div>
                </div>
                <div className="part1-right">

                </div>
            </div>
        </div>
    )
}

export default Banner
