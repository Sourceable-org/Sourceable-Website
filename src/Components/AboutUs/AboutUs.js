import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="aboutuspage">
      <div>
        <h1>Trusted by citizen journalists, used by the world.</h1>
        <div id="forBorder"></div>
        <div>
          <p>
            Sourceable empowers citizen journalists to document, verify,
            archive, and share newsworthy data directly to paid subscribers.
            Leveraging innovative verification technology, Sourceable
            revolutionizes the media, journalism, and technology industries by
            providing verified data directly to media and human rights
            professionals in real-time from places of conflict and crisis.
            <br />
            <br />
            The visual, audio, and written data collected through Sourceable’s
            mobile application is automatically verified and achieved through an
            encryption process, as well as Provenance, a Blockchain solution,
            which permanently stamps the geolocation, time, and date to the
            data. Once processed, the data is published on Sourceable’s trusted
            platform where members can access the data in real-time.
          </p>
        </div>
        <div>
          <h3> Empowering. Supporting. Connecting.</h3>
          <p>
            Sourceable is the proud recipient of the 2022 Global Public Policy
            Network - Henrik Enderlin Award. In March 2022, Sourceable was
            awarded the first-prize title. For more information,{" "}
            <a
              target={"_blank"}
              href="https://www.gppnetwork.org/single-post/winners-of-gppn-annual-conference-2022"
            >
              click here.
            </a>
            <br />
            <br />
            Sourceable was awarded the first-prize in the Brown Institute’s
            Media, Journalism, and Technology competition, put on by Columbia
            University’s 2022 Venture Challenge Competitions. The competition
            granted the Sourceable team to participate in a 10-week summer
            incubator with the Brown Institute. For more information, <a
              target={"_blank"}
              href="https://brown.columbia.edu/the-brown-institute-announces-its-2022-venture-challenge-competition-winners/"
            >
              click here.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
