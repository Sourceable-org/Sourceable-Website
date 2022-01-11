import React, { Fragment } from 'react'

//Components

import Banner from './Banner'
import LifeSave from './LifeSave'
import City from './City'
import Features from './Features'
import Line from './Line'
import Testimonial from './Testimonial.js'
import MoreFeature from './MoreFeature'
const Home = () => {
    return (
        <Fragment>
            <Banner />
            <LifeSave />
            <City />
            <Features />
            <Line />
            <Testimonial />
            <MoreFeature />

        </Fragment>
    )
}

export default Home
