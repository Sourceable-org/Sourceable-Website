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
import "./Feature.css";

// import ReactGA from "react-ga";
import ReactGA from "react-ga4";
const TRACTING_ID = 'G-T2J1RSTLG9';
ReactGA.initialize(TRACTING_ID);




const Features = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  const useAnalyticsEventTracker = (category="Blog category") => {
    const eventTracker = (action = "test action", label = "test label") => {
      ReactGA.event({category, action, label});
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
              {/* <h1>Our Pilot Project</h1> */}
              <p>
              Sourceable’s journalists are on the ground in Turkey and Syria and 
              have been severely impacted by the recent 7.8 magnitude earthquake. 
              Many of our journalists lost loved ones, homes, and personal belongings. 
              Sourceable is urgently raising funds to help our journalists rebuild their lives. 
              The money will go directly to our journalists to rebuild their homes, 
              cover burial costs, travel to safer areas, and buy food, water, and warm clothes.
              <br></br>
              <br></br>
              Please donate here and spread the word: <a href="https://gofund.me/462fbdac" onClick={()=>gaEventTracker('Payment')}> click here</a>

              </p>
                
                <div style={{ textAlign: "center" }}>
               
                <img src={support4} alt="Sup2 not loaded" display="flex" width= "90%" paddingLeft="60%"/>
                <br></br>
                <br></br>
             </div>
                
               
              <div style={{ paddingLeft: "62px" }}>
                <b
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                 MORE INFORMATION
                 <br></br>
                
                </b>
              </div>

              <p>
              On February 6, 2023, a powerful 7.8 magnitude earthquake struck the region 
              encompassing southeast Turkey and northwest Syria. With the death toll 
              already over 20,000, it is expected to continue rising, with harsh winter 
              weather, possible aftershocks, and the loss of vital public infrastructure 
              hampering ongoing rescue efforts.

                <br />
                <br></br>
             
              Unfortunately, this earthquake Sourceable’s citizen journalists on the ground in 
              Syria and Turkey. Our journalists have lost their loved ones and homes, 
              and are now sleeping in freezing-cold temperatures on the street. 
              <br></br>
              <br></br>
              One journalist, Fared, lost his home and several members of his family. 
              Despite the risks to his personal safety and the extremely cold temperatures, 
              he continues to document the events so the world can witness the tragedies as they unfold.
              <br></br>
              <br></br>
              Sourceable is grounded on the ideals and bravery of our citizen journalists, 
              and we especially seek to support them in this time.
              <br></br>
              <br></br>
              To help, please donate <a href="https://gofund.me/462fbdac" onClick={()=>gaEventTracker('Payment')}> here</a>
              <br></br>
              <br></br>
              Thank you for your support.
              </p>
              
            </div>

            <div className="extra_2">
              <a href="https://gofund.me/462fbdac">
                <button
                  style={{
                    height: "50px",
					width:"200px",
					borderRadius:"25px",
					backgroundColor:"#D8CE58",
					fontWeight:"bolder",
					borderWidth:0
					
					
                  }}
                >
					<h1 onClick={()=>gaEventTracker('Payment')}><b style={{fontFamily:"bold"}}>
                  Support US
				  </b></h1>
                </button>
              </a>
            </div>
            <div className="extra_2">
              <h1>Our Partners and Supporters</h1>
              <div>
                <img src={Sup2} alt="Sup2 not loaded" />
                <img src={Sup4} alt="Sup4 not loaded" />
                <img src={Sup0} alt="Sup1 not loaded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;