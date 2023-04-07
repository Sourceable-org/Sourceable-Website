import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { size } from "underscore";
import Sup0 from "../../images/sup_1.png";
/*import Sup3 from '../../images/sup_3.png';*/
import Sup4 from "../../images/sup_2.png";
import Sup2 from "../../images/sup_4.png";
import support1 from "../../images/support_image1.jpeg"
import support2 from "../../images/support_image2.jpeg"
import support3 from "../../images/support_image3.jpeg"
import support4 from "../../images/support_image4.jpeg"
import dummyimage from "../../images/dummyimage.png"
import Newyork from "../../images/New-York-Times-logo.webp";
import buisness from "../../images/buisness.webp";
import abc from "../../images/abcnews.webp";
import tele from "../../images/thetelegraph.webp";
import guardian from "../../images/guardian.webp";
import "./Feature.css";

// import ReactGA from "react-ga";
import ReactGA from "react-ga4";
import { Telegram } from "@material-ui/icons";
const TRACTING_ID = 'G-T2J1RSTLG9';
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
    }
    return eventTracker;
  }



  const gaEventTracker = useAnalyticsEventTracker('Supporrt Us');

  return (
    <div className="containerFeature">
      <div className="above">
        <div>
          <div className="extra">
            <div className="extra_1">

              <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ flex: 1, fontSize: "40px", textAlign: "center", fontWeight: "bold", color: "#2a67e3" }}>1000+</h2>
                  <h5 style={{ flex: 1, fontSize: "20px", textAlign: "center", fontWeight: "bold" }}> media files </h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ flex: 1, fontSize: "40px", textAlign: "center", fontWeight: "bold", color: "#2a67e3" }}>68.3M</h2>
                  <h5 style={{ flex: 1, fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>media files uploaded</h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ flex: 1, fontSize: "40px", textAlign: "center", fontWeight: "bold", color: "#2a67e3" }}>20+</h2>
                  <h5 style={{ flex: 1, fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>media journalists</h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ flex: 1, fontSize: "40px", textAlign: "center", fontWeight: "bold", color: "#2a67e3" }}>280+</h2>
                  <h5 style={{ flex: 1, fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>active users</h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ flex: 1, fontSize: "40px", textAlign: "center", fontWeight: "bold", color: "#2a67e3" }}>10+</h2>
                  <h5 style={{ flex: 1, fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>countries</h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ flex: 1, fontSize: "40px", textAlign: "center", fontWeight: "bold", color: "#2a67e3" }}>2</h2>
                  <h5 style={{ flex: 1, fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>pilot projects </h5>
                </div>
              </div>

              <br></br><br></br>

              <div style={{ display: 'flex', flexDirection: 'row' }}>

                <div style={{ width: '700px', height: '500px', backgroundColor: "#2a67e3", marginleft: "-100px" }}>
                  <img src={dummyimage} alt='Logo not loaded'
                    style={{
                      height: "300px",
                      marginTop: "90px",
                      marginLeft: "120px",

                    }}
                  />
                </div>

                <div style={{ flex: 1, paddingLeft: "30px" }}>
                  <h1 style={{ fontSize: "50px" }}> Who we are </h1>
                  <p style={{ fontSize: "18px", width: "530px", color: "black" }}>
                    Sourceable empowers citizen journalists to document, verify, archive, and share newsworthy data directly with paid subscribers.
                    Leveraging innovative verification technology, Sourceable revolutionizes the media, journalism, and technology industries by providing
                    verified data directly to media and human rights professionals in real time from places of conflict and crisis.

                    <br></br><br></br>

                    The visual, audio and written data collected through Sourceable’s mobile application is automatically verified and
                    achieved through an encryption process, as well as Provenance, a Blockchain solution, which permanently stamps the geolocation, time,
                    and date to the data. Once processed, the data is published on Sourceable’s trusted platform where members can access the data in real time.
                  </p>
                </div>
              </div>

            </div>


            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: "3%", textAlign:"center" }}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <svg data-bbox="40 40 120 120" viewBox="40 40 120 120" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                  <g ><path d="M40 160v-45.9c0-40.9 14.8-65 47.1-74.1v25.1c-15.4 6.6-21.5 20.3-21 45.4h21V160H40z" fill="#2a67e3" data-color="1" ></path>
                    <path d="M112.9 160v-45.9c0-40.9 14.8-65 47.1-74.1v25.1c-15.4 6.6-21.5 20.4-21 45.4h21V160h-47.1z" fill="#2a67e3" data-color="1"></path>
                  </g></svg>
                <br></br><br></br>
                <p style={{ flex: 1, fontSize: "20px", textAlign: "center", fontWeight: "400", color: "black", textAlign: "center", paddingLeft:"10%" }}> I wanted to report on the enormous human rights
                  violations in my country and to make sure the world is aware of the
                  terrible atrocities inflicted by the regime on the innocent population.
                  <br></br><br></br>
                  &nbsp;- <b>Citizen journalist</b>
                </p>
              </div>

              <div style={{ flex: 1, textAlign: "center" }}>
                <svg width="50" height="500">
                  <rect x="10" y="10" width="15" height="400" fill="#2a67e3" />
                </svg>
              </div>

              <div style={{ flex: 1, textAlign: "center" }}>
                <svg data-bbox="40 40 120 120" viewBox="40 40 120 120" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                  <g ><path d="M40 160v-45.9c0-40.9 14.8-65 47.1-74.1v25.1c-15.4 6.6-21.5 20.3-21 45.4h21V160H40z" fill="#2a67e3" data-color="1" ></path>
                    <path d="M112.9 160v-45.9c0-40.9 14.8-65 47.1-74.1v25.1c-15.4 6.6-21.5 20.4-21 45.4h21V160h-47.1z" fill="#2a67e3" data-color="1"></path>
                  </g></svg>
                <br></br><br></br>
                <p style={{ flex: 1, fontSize: "20px", textAlign: "center", fontWeight: "400", color: "black", textAlign: "center" }}> I wanted to report on the enormous human rights violations in my country and
                  to make sure the world is aware of the terrible atrocities inflicted by the
                  regime on the innocent population.
                  <br></br><br></br>
                  &nbsp;- <b>Citizen journalist</b>
                </p>
              </div>

              <div style={{ flex: 1, textAlign: "center" }}>
                <svg width="50" height="500">
                  <rect x="10" y="10" width="15" height="400" fill="#2a67e3" />
                </svg>
              </div>

              <div style={{ flex: 1, textAlign: "center" }}>
                <svg data-bbox="40 40 120 120" viewBox="40 40 120 120" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                  <g ><path d="M40 160v-45.9c0-40.9 14.8-65 47.1-74.1v25.1c-15.4 6.6-21.5 20.3-21 45.4h21V160H40z" fill="#2a67e3" data-color="1" ></path>
                    <path d="M112.9 160v-45.9c0-40.9 14.8-65 47.1-74.1v25.1c-15.4 6.6-21.5 20.4-21 45.4h21V160h-47.1z" fill="#2a67e3" data-color="1"></path>
                  </g></svg>
                <br></br><br></br>
                <p style={{ flex: 1, fontSize: "20px", textAlign: "center", fontWeight: "400", color: "black", textAlign: "center", paddingRight:"10%" }}> I wanted to report on the enormous human rights violations in my country and
                  to make sure the world is aware of the terrible atrocities inflicted by the
                  regime on the innocent population.
                  <br></br><br></br>
                  &nbsp;- <b>Citizen journalist</b>
                </p>
              </div>

            </div>

            <div>
              <h1 style={{ color: "#2a67e3", textAlign: "center" }}>AS FEATURED ON</h1>

              <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: "5%" }}>
              <div style={{ flex: 1 }}>
                <img src={Newyork} alt="Image 3" style={{ alignItems: "center", height: "70%", width: "70%" }} />
              </div>
              <div style={{ flex: 1 }}>
                <img src={buisness} alt="Image 3" style={{ alignItems: "center", height: "70%", width: "70%" }} />
              </div>
              <div style={{ flex: 1 }}>
                <img src={abc} alt="Image 3" style={{ alignItems: "center", height: "70%", width: "70%" }} />
              </div>
              <div style={{ flex: 1 }}>
                <img src={tele} alt="Image 3" style={{ alignItems: "center", height: "70%", width: "70%" }} />
              </div>
              <div style={{ flex: 1 }}>
                <img src={guardian} alt="Image 3" style={{ alignItems: "center", height: "70%", width: "70%" }} />
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