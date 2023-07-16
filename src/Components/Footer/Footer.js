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
    height: "400px",
    display: "flex", // Apply these styles in a flex container
  };
  return (
    // <div className="footerPage" >
    //   <div className="footerPage" >
    //     <div>
    //       <div>
    //         <h1 className="footerTitle">Embark on your <br/>reporting journey</h1>
    //       </div>
    //       <div>
    //         <p className="footerSub">
    //           Consider applying to join Sourceable’s trusted and trained
    //           journalists. Once accepted, you’ll receive an exclusive invitation
    //           to download our app and commence your reporting journey.{" "}
    //         </p>
    //       </div>
    //       <div>
    //         <p className="footerSub2">Download Sourceable App*</p>
    //       </div>

    // 		<img className="googlePlay" src={PLAYSTORE}></img>

    // 		<img className="appStore" src={APPSTORE}></img>
    // 		<div>
    //         <p className="footerSub3">*The App isn’t public at the moment and allows citizen journalists upon verification only .Please keep your documents handy.</p>
    //       </div>
    //       <hr className="footerSub"></hr>
    //     </div>
    //   </div>

    // </div>
    <div>
      <div style={containerStyle}>
        <div
          style={{
            width: "60%",
            height: "87%",
            marginTop: "2%",
            marginLeft: "2%",
            background: "#ffffff",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 0%",
            opacity: 0.2,
            borderRadius: "2%",
          }}
        ></div>
        <div
          style={{
            top: "290%",
            left: "4%",
            width: "30%",
            height: "40%",
            position: "absolute",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${phone})`,
            opacity: "1",
            borderRadius: "6%",
          }}
        ></div>
        <div
          style={{
            top: "290%",
            left: "18%",
            position: "absolute",
          }}
        >
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
				lineHeight: "18px"
              }}
            >
              Consider applying to join Sourceable’s trusted and trained
              journalists.<br/> Once accepted, you’ll receive an exclusive invitation
              to download our app and <br/>commence your reporting journey.{" "}
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
		  <img style={{
			width: "238px",
			height: "73px"
		  }} src={PLAYSTORE}></img>
		  <img style={{
			width: "238px",
			height: "73px",
			paddingLeft: "10px"
		  }} src={APPSTORE}></img>
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
