import React, { Fragment, useEffect } from "react";
import AboutUs from "../AboutUs/AboutUs.js";
//Components
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

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
      <Features />
      <Testimonial />
      <AboutUs />
    </Fragment>
  );
};

export default Home;
