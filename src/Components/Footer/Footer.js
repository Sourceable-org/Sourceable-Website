import React from "react";
import "../Footer/Footer.css";

import APPSTORE from "../../images/app store.png";
import PLAYSTORE from "../../images/play store.png";

const Footer = () => {
  return (
    <div>
      <div className="footerPage">
        <div>
          <div className="footerInnerDiv"></div>
          <div className="footerInnerPhone"></div>
          <div>
            <h1 className="footerTitle">Embark on your <br/>reporting journey</h1>
          </div>
          <div>
            <p className="footerSub">
              Consider applying to join Sourceable’s trusted and trained
              journalists. Once accepted, you’ll receive an exclusive invitation
              to download our app and commence your reporting journey.{" "}
            </p>
          </div>
          <div>
            <p className="footerSub2">Download Sourceable App*</p>
          </div>
		  
			<img className="googlePlay" src={PLAYSTORE}></img>
			
			<img className="appStore" src={APPSTORE}></img>
			<div>
            <p className="footerSub3">*The App isn’t public at the moment and allows citizen journalists upon verification only .Please keep your documents handy.</p>
          </div>
          <hr className="footerSub"></hr>
        </div>
      </div>
      <div className="footerText">
        <h5 className="footerTextInner">
          EMPOWERING, SUPPORTING, AND CONNECTING CITIZEN JOURNALISTS TO SHARE
          AND PROTECT THEIR STORIES.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
