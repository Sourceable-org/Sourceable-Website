import React from 'react'
import './About.css'


import APPSTORE from '../images/app store.png'
import PLAYSTORE from '../images/play store.png'

const About = () => {
    return (
        <div className='aboutPage'>
            <div className='firstBanner'>
                <div>
                    <h1>Making your world a safer place.</h1>
                    <p>
                        Sourceable, an online platform and mobile application, empowers, connects, and supports those in areas of conflict and crisis. Through strategic partnerships, Sourceable serves citizen journalists, human rights professionals, and legal advocates by providing verified documentation in the forms of photos, videos, texts, and audio recordings. Leveraging cutting-edge verification technology, Sourceable will address the challenge of documenting, verifying, storing, and sharing newsworthy stories, focused on human rights violations, humanitarian crises, and human-interest stories, all in real-time to a global audience.
                    </p>
                </div>
            </div>


            <div className='mission'>
                <div> Sourceable is on a mission to make your world a safer place. </div>
                <div>
                    <h4>We believe in public information for the good of the public.</h4>
                    <p>In being able to act on safety alerts in real time. In transparency that bonds and that empowers everyone in a community, from city council to residents.</p>
                    <p>We believe in giving people a way to use their phones to protect a neighbor, to prevent a tragedy, and to count on one another.</p>
                    <p>And to create a safer world for each other, with each other.</p>
                </div>
            </div>

            <div className="save">
                <div>
                    <h6> SOURCEABLE </h6>
                    <h1> Build the future of public safety together. </h1>
                    <b> DOWNLOAD FOR FREE</b>
                    <div>
                        <img src={APPSTORE} alt="APP STORE" />
                        <img src={PLAYSTORE} alt="PLAY STORE" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
