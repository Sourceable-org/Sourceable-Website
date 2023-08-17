import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { size } from "underscore";
import Sup0 from "../../images/sup_1.png";
/*import Sup3 from '../../images/sup_3.png';*/
import Sup4 from "../../images/sup_2.png";
import Sup2 from "../../images/sup_4.png";
import support1 from "../../images/support_image1.jpeg";
import support2 from "../../images/support_image2.jpeg";
import support3 from "../../images/support_image3.jpeg";
import support4 from "../../images/support_image4.jpeg";
import dummyimage from "../../images/dummyimage.png";
import Newyork from "../../images/New-York-Times-logo.webp";
import buisness from "../../images/buisness.webp";
import abc from "../../images/abcnews.webp";
import tele from "../../images/thetelegraph.webp";
import guardian from "../../images/guardian.webp";
import "./testCards.css";
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import bg from "../../assets/img/revamp/bg_help.png";
import tesi1 from "../../assets/img/revamp/Group 173.png";
import tesi2 from "../../assets/img/revamp/Group 174.png";

// import ReactGA from "react-ga";
import ReactGA from "react-ga4";
import { Telegram } from "@material-ui/icons";
const TRACTING_ID = "G-T2J1RSTLG9";
ReactGA.initialize(TRACTING_ID);

const Features = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  const useAnalyticsEventTracker = (category = "Blog category") => {
    const eventTracker = (action = "test action", label = "test label") => {
      ReactGA.event({ category, action, label });
    };
    return eventTracker;
  };

  const gaEventTracker = useAnalyticsEventTracker("Supporrt Us");

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="above">
        <div>
          <div className="extra">
            <div className="extra_1">
              <div
                style={{
                  display: "flex",
                }}
              >
                <div style={{}}>
                  <div>
                    <h1
                      style={{
                        textAlign: "left",
                        fofontFamily: "sans-serif",
                        color: "#3A76F0",
                        fontSize: "30px",
                        fontWeight: "normal",
                        paddingLeft: "5%",
                        paddingTop: "5%",
                      }}
                    >
                      Upload Content
                    </h1>
                    <h1
                      style={{
                        textAlign: "left",
                        fontFamily: "sans-serif",
                        color: "black",
                        fontSize: "50px",
                        fontWeight: "bolder",
                        paddingLeft: "5%",
                        paddingTop: "5%",
                        lineHeight: "50px",
                      }}
                    >
                      Grow as a citizen
                      <br /> journalist
                    </h1>
                    <p
                      style={{
                        textAlign: "left",
                        fontFamily: "sans-serif",
                        color: "black",
                        paddingLeft: "5%",
                        paddingTop: "5%",

                        fontSize: "17px",
                      }}
                    >
                      Join Sourceable’s growing network of local reporters
                      spanning the globe. Our platform empowers you to unveil
                      the truth, validate and safeguard your work, while also
                      facilitating direct connections with international media
                      outlets and NGOs.
                    </p>
                    <p
                      style={{
                        textAlign: "left",
                        fontFamily: "Roboto",
                        color: "#3A76F0",
                        paddingLeft: "5%",
                        fontWeight: "bolder",
                        textDecoration: "underline",
                        fontSize: "17px",
                      }}
                    >
                      <Link to="/join">Sign-in</Link>
                      
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    paddingTop: "0%",
                    paddingRight: "0%",
                    height: "40%",
                    width: "100%",
                    borderBottomRightRadius: "10%",
                    borderBottomLeftRadius: "10%",
                    background:
                      "linear-gradient(190deg, rgba(58, 118, 240, 0.1) 0% , rgba(51, 204, 204, 0.1) 100%)",
                  }}
                >
                  <img
                    src={tesi1}
                    style={{
                      width: "85%",
                      height: "75%",
                      marginLeft: "8%",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    paddingTop: "0%",
                    paddingRight: "0%",
                    height: "40%",
                    width: "100%",
                    borderTopRightRadius: "10%",
                    borderTopLeftRadius: "10%",
                    background:
                      "linear-gradient(190deg, rgba(58, 118, 240, 0.1) 0% , rgba(51, 204, 204, 0.1) 100%)",
                  }}
                >
                  <img
                    src={tesi2}
                    style={{
                      width: "85%",
                      height: "75%",
                      marginLeft: "8%",
                    }}
                  />
                </div>
                <div style={{}}>
                  <div>
                    <h1
                      style={{
                        textAlign: "left",
                        fontFamily: "sans-serif",
                        color: "#3A76F0",
                        fontSize: "30px",
                        fontWeight: "normal",
                        paddingLeft: "5%",
                        paddingTop: "5%",
                      }}
                    >
                      Hire A Journalist
                    </h1>
                    <h1
                      style={{
                        textAlign: "left",
                        fontFamily: "sans-serif",
                        color: "black",
                        fontSize: "50px",
                        fontWeight: "bolder",
                        paddingLeft: "5%",
                        paddingTop: "5%",
                        lineHeight: "50px",
                      }}
                    >
                      Get access to real-
                      <br />
                      time events
                    </h1>
                    <p
                      style={{
                        textAlign: "left",
                        fontFamily: "sans-serif",
                        color: "black",
                        paddingLeft: "5%",
                        paddingTop: "5%",

                        fontSize: "17px",
                      }}
                    >
                      Connect with skilled local journalists who offer an
                      in-depth understanding of their communities, ensuring
                      authenticity and nuance in their reporting. By hiring a
                      local journalist, you are investing in trusted,
                      boots-on-the-ground reporting, which brings invaluable
                      insights from remote corners of the world.
                    </p>
                    <p
                      style={{
                        textAlign: "left",
                        fontFamily: "sans-serif",
                        color: "#3A76F0",
                        paddingLeft: "5%",
                        fontWeight: "bolder",
                        textDecoration: "underline",
                        fontSize: "17px",
                      }}
                    >
                      Explore our journalists
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
