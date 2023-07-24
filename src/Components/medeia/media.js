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
import "./media.css";

import media_imp from "../../assets/img/revamp/Mask Group 23.png";
import bgS1 from "../../assets/img/revamp/Group 244.png";
import bgS2 from "../../assets/img/revamp/Group 245.png";
import bgS3 from "../../assets/img/revamp/Group 246.png";
import bgS4 from "../../assets/img/revamp/Group 247.png";

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
    <div style={{ backgroundColor: "#F4F4F4" }}>
      <div className="above">
        <div>
          <div className="extra">
            <div className="extra_1">
              <div style={{ paddingTop: "3%" }}>
                <h1
                  style={{
                    textAlign: "center",
                    fontFamily: "sans-serif",
                    fontWeight: "bolder",
                    fontSize: "220%",
                  }}
                >
                  Bringing Change in Media
                </h1>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingLeft: "70px"
                }}
              >
                <div style={{}}>
                  <div style={{ display: "flex", marginLeft:"12%" }}>
                    <div
                      style={{
                        backgroundImage: `url(${bgS1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "15px",
                        height: "70px",
                        width: "500px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "500%",
                      }}
                    >
                      {" "}
                      <h1
                        style={{
                          color: "#3A76F0",
                          fontSize: "100%",
                          marginLeft: "4%",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Revolutionizing Media Landscape
                      </h1>
                      <p></p>
                    </div>
                  </div>
                   <div style={{ display: "flex", paddingTop: "5%" ,marginLeft:"12%"}}>
                    <div
                      style={{
                        backgroundImage: `url(${bgS2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "15px",
                        height: "70px",
                        width: "100px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "100%",
                      }}
                    >
                      {" "}
                      <h1
                        style={{
                          color: "#3A76F0",
                          fontSize: "100%",
                          marginLeft: "4%",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Verified Content
                      </h1>
                      <p
                        style={{
                          color: "black",
                          fontSize: "100%",
                          marginLeft: "4%",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Local journalists document and verify newsworthy events.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", paddingTop: "5%" , marginLeft:"12%"}}>
                    <div
                      style={{
                        backgroundImage: `url(${bgS3})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "15px",
                        height: "70px",
                        width: "100px",
                        fontFamily: "sans-serif",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "100%",
                      }}
                    >
                      {" "}
                      <h1
                        style={{
                          color: "#3A76F0",
                          fontSize: "100%",
                          marginLeft: "4%",
                          fontFamily: "sans-serif",
                        }}
                      >
                        We're Global
                      </h1>
                      <p
                        style={{
                          color: "black",
                          fontSize: "100%",
                          marginLeft: "4%",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Global media coverage and exposure for local issues and
                        amplified local voices.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", paddingTop: "5%",marginLeft:"12%" }}>
                    <div
                      style={{
                        backgroundImage: `url(${bgS4})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "15px",
                        height: "70px",
                        width: "100px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "100%",
                      }}
                    >
                      {" "}
                      <h1
                        style={{
                          color: "#3A76F0",
                          fontSize: "100%",
                          marginLeft: "4%",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Restoring Trust in Media
                      </h1>
                      <p
                        style={{
                          color: "black",
                          fontSize: "100%",
                          marginLeft: "4%",
                          fontFamily: "sans-serif",
                        }}
                      >
                        More accountability, justice, and equity globally, while
                        restoring trust and transparency in media.
                      </p>
                    </div>
                  </div> 
                </div>

                <div
                  style={{
                    flex:2,
                    // paddingTop: "2%",
                    marginRight: "-33%",
                    marginBottom: "-25%",
                    // marginLeft:"100px"
                  }}
                >
                  <img
                    src={media_imp}
                    style={{
                      height: "50%",
                      // marginRight: "-30%",
                      // marginLeft:"100px"
                    }}
                  />
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
