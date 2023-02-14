import React, { Fragment } from "react";
import AboutUs from "../AboutUs/AboutUs.js";
//Components
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>CoderGuides | Home</title>
      </Helmet>
      <Banner />
      <Features />
      <Testimonial />
      <AboutUs />
    </Fragment>
  );
};

export default Home;
