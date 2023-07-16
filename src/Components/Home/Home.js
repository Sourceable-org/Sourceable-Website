import React, { Fragment, useEffect } from "react";
import AboutUs from "../AboutUs/AboutUs.js";
//Components
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Testimonial from "../Testimonial/Testimonial";
import GetInTouch from "../GetInTouch/GetInTouch";
import Helpus from "../HelpUS/helpus.js"
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import VerifiedContent from '../VerifiedContent/Verified';
import OurServices from '../OurServices/Services.js';
import  Media from "../medeia/media.js"
import Hire from "../Hire/Hire.js"
import TestiCards from "../testCards/testCards.js"
import OurPartners from "../OurPartners/OurPartners.js"

const Home = () => {

  useEffect(()=>{
		// ReactGA.pageview("window.location.pathname + window.location.search")
		// ReactGA.send({ hitType: "pageview", page: "/explore" });
		ReactGA.event({
			category: "Sourceable | Home",
			action: "Sourceable | Home",
			// label: "your label", // optional
			// value: 99, // optional, must be a number
			nonInteraction: true, // optional, true/false
			// transport: "xhr", // optional, beacon/xhr/image
		  });

	},[]);
  return (
    
    <Fragment>
      <Helmet>
        <title>Sourceable | Home</title>
      </Helmet>
      <Banner />
      <VerifiedContent />
      <OurServices/>
      <TestiCards/>
      <OurPartners/>
      <Hire/>
      <Media/>
      <Helpus />

      {/* <GetInTouch /> */}
      {/* <Testimonial /> */}
      {/* <AboutUs /> */}
    </Fragment>
  );
};

export default Home;
