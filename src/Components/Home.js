import React, { Fragment } from 'react'

//Components

import Banner from './Banner'

import Features from './Features'

import Testimonial from './Testimonial.js'
import AboutUs from './AboutUs.js'
const Home = () => {
    return (
        <Fragment>
            <Banner />
            <Features />
            <Testimonial />
            <AboutUs/> 
        </Fragment>
    )
}

export default Home
