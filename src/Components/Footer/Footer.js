import React from "react";
import "../Footer/Footer.css";

import APPSTORE from "../../images/app store.png";
import PLAYSTORE from "../../images/play store.png";
import bg from "../../assets/img/revamp/footer_bg.png";
import phone from "../../assets/img/revamp/phone.png";
const Footer = () => {
  const backgroundImageUrl = bg;
  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "500px",
    display: "flex", // Apply these styles in a flex container
  };
  return (
    <div>
      <div style={containerStyle}>
        <div
          style={{
            width: "60%",
            height: "87%",
            marginTop: "2%",
            marginLeft: "2%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 0%",
            borderRadius: "2%",
            display: "flex",
          }}
        >
            <img style={{ width: "25%", height: "100%" ,padding: "2%"}} src={phone}></img>

          <div>
            <div style={{}}>
              <h1
                style={{
                  fontWeight: "bolder",
                  color: "#3a76f0",
                  fontFamily: "FuturaBT-BoldCondensed",
                }}
              >
                Embark on your <br />
                reporting journey
              </h1>
            </div>
            <div>
              <p
                style={{
                  color: "#ffffff",
                  fontFamily: "Roboto",
                  lineHeight: "18px",
                }}
              >
                Consider applying to join Sourceable’s trusted and trained
                journalists.
                <br /> Once accepted, you’ll receive an exclusive invitation to
                download our app and <br />
                commence your reporting journey.{" "}
              </p>
            </div>{" "}
            <div>
              <p
                style={{
                  color: "#ffffff",
                  fontFamily: "Roboto",
                }}
              >
                Download Sourceable App*
              </p>
            </div>{" "}
            <div>
              <hr />
            </div>{" "}
            <div>
              <img
                style={{
                  width: "238px",
                  height: "73px",
                }}
                src={PLAYSTORE}
              ></img>
              <img
                style={{
                  width: "238px",
                  height: "73px",
                  paddingLeft: "10px",
                }}
                src={APPSTORE}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#000000", // Background color
          justifyContent: "center", // Justify content
          alignItems: "center", // Align items
          opacity: 1, // Opacity
          boxSizing: "border-box", // Use padding-box if required
          display: "flex", // Apply these styles in a flex container
        }}
      >
        <h5
          style={{
            justifyContent: "center", // Justify content
            alignItems: "center", // Align items
            font: "normal 300 20px/64px Roboto", // Font styles
            color: "#ffffff", // Text color
            textAlign: "center", // Text align
            opacity: 1, // Opacity
          }}
        >
          EMPOWERING, SUPPORTING, AND CONNECTING CITIZEN JOURNALISTS TO SHARE
          AND PROTECT THEIR STORIES.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
