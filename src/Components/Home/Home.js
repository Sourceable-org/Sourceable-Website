import React, { Fragment } from 'react';
import AboutUs from '../AboutUs/AboutUs.js';
//Components
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
	return (
		<Fragment>
			<Banner />
			<Features />
			<Testimonial />
			<AboutUs />
		</Fragment>
	);
};

export default Home;
