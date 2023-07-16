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
import "./Feature.css";

import bg from "../../assets/img/revamp/bg_help.png";
import helpus_imp from "../../assets/img/revamp/helpus_im.png";

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
    <div className="containerFeature">
      <div className="above">
        <div>
          <div className="extra">
            <div className="extra_1">
              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      flex: 1,
                      fontSize: "40px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#2a67e3",
                    }}
                  >
                    2k+
                  </h2>
                  <h5
                    style={{
                      flex: 1,
                      fontSize: "20px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Media Files{" "}
                  </h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      flex: 1,
                      fontSize: "40px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#2a67e3",
                    }}
                  >
                    68.3M
                  </h2>
                  <h5
                    style={{
                      flex: 1,
                      fontSize: "20px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Media Impressions
                  </h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      flex: 1,
                      fontSize: "40px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#2a67e3",
                    }}
                  >
                    20+
                  </h2>
                  <h5
                    style={{
                      flex: 1,
                      fontSize: "20px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Citizen Journalists
                  </h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      flex: 1,
                      fontSize: "40px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#2a67e3",
                    }}
                  >
                    300+
                  </h2>
                  <h5
                    style={{
                      flex: 1,
                      fontSize: "20px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Active Users
                  </h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      flex: 1,
                      fontSize: "40px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#2a67e3",
                    }}
                  >
                    10+
                  </h2>
                  <h5
                    style={{
                      flex: 1,
                      fontSize: "20px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Countries
                  </h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      flex: 1,
                      fontSize: "40px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#2a67e3",
                    }}
                  >
                    2
                  </h2>
                  <h5
                    style={{
                      flex: 1,
                      fontSize: "20px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Pilot Projects{" "}
                  </h5>
                </div>
              </div> */}

              <br></br>
              <br></br>

              <div
                style={{
              
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{}}>
                  <div>
                    <h1
                      style={{
                        textAlign: "left",
                        fontFamily: "FuturaBT-BoldCondensed",
                        color: "black",
                        fontSize: "40px",
                        fontWeight: "bolder",
                        paddingLeft: "5%",
                        paddingTop: "35%",
                      }}
                    >
                      Help Us, Help Them!
                    </h1>
                    <p
                      style={{
                        textAlign: "left",
                        fontFamily: "Roboto",
                        color: "black",
                        paddingLeft: "5%",
                        fontSize: "17px",
                      }}
                    >
                      Sourceable has launched a fundraising campaign to aid our
                      dedicated journalists in Turkey and Syria whose lives have
                      been drastically affected by the devastating earthquake in
                      February 2023.
                    </p>
                  </div>
                  <div style={{ paddingLeft: "5%", display: "flex" }}>
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "15px",
                        height: "30px",
                        width: "30%",
                      }}
                    >
                      <h1
                        style={{
                          color: "#3A76F0",
                          fontSize: "80%",
                          marginTop: "5%",
                          textAlign: "center",
                        }}
                      >
                        DONATE NOW
                      </h1>
                    </div>

                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "15px",
                        height: "30px",
                        width: "30%",
                        marginLeft: "10%",
                      }}
                    >
                      <h1
                        style={{
                          color: "#3A76F0",
                          fontSize: "80%",
                          marginTop: "5%",
                          textAlign: "center",
                        }}
                      >
                        FUNDRAISERS{" "}
                      </h1>
                    </div>
                  </div>
                </div>

                <div
                  style={{  paddingTop: "15%", paddingRight: "5%" }}
                >
                  <img
                    src={helpus_imp}
                    style={{
                      height: "65%",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* <div>
              <h1 style={{ color: "#2a67e3", textAlign: "center" }}>
                AS FEATURED ON
              </h1>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: "5%",
                }}
              >
                <div style={{ flex: 1 }}>
                  <img
                    src={Newyork}
                    alt="Image 3"
                    style={{
                      alignItems: "center",
                      height: "70%",
                      width: "70%",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <img
                    src={buisness}
                    alt="Image 3"
                    style={{
                      alignItems: "center",
                      height: "70%",
                      width: "70%",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <img
                    src={abc}
                    alt="Image 3"
                    style={{
                      alignItems: "center",
                      height: "70%",
                      width: "70%",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <img
                    src={tele}
                    alt="Image 3"
                    style={{
                      alignItems: "center",
                      height: "70%",
                      width: "70%",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <img
                    src={guardian}
                    alt="Image 3"
                    style={{
                      alignItems: "center",
                      height: "70%",
                      width: "70%",
                    }}
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
