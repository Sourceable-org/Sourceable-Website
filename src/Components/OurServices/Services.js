import React from "react";
import Subscription from "../../assets/img/revamp/Mask Group 20.svg";
import Exclusive from "../../assets/img/revamp/Mask Group 21.svg";
import Request from "../../assets/img/revamp/Mask Group 22.svg";



import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div style={{ textAlign: "center",
                    color:"white",
                    paddingTop:"2%",
                    paddingBottom: "5%"
                     }}>
        <p>Our services</p>
        <p
          style={{
            fontSize: "50px",
            textAlign: "center",
            color: "blue",
            fontFamily: "roboto",
            fontWeight: "bold",
            color: "#3a76f0",
          }}
        >
        Providing Verified Exclusive Content        
</p>
<div className="container">
      <div className="transparent-rectangle">
            <img src={Subscription} alt="Subscription" className="header-image"/>  
            <h1 className="text">Subscription Model</h1>
            <p className="paragraph">
            Sourceable's subscription model provides exclusive real-time access to verified stories with multiple package options tailored to specific factors such as time, region, and conflict/crisis.
      </p>
      <p className="LearnMore">Learn More</p>
      </div>
      <div className="transparent-rectangle">
            <img src={Exclusive} alt="Subscription" className="header-image"/>  
            <h1 className="text">Exclusivity Packages</h1>
            <p className="paragraph">
            Exclusivity and Usage Rights- Sourceable offers its members with the efficient and streamlined options to license content, ensuring exclusivity and comprehensive usage rights.      
            </p>
            <p className="LearnMore">Learn More</p>
      </div>
      <div className="transparent-rectangle">
            <img src={Request} alt="Subscription" className="header-image"/>  
            
            <h1 className="text">Request a Job</h1>
            <p className="paragraph">
            Request a Job- Members can directly offer assignments to our local journalists in hard to reach areas.
            </p>
            <br></br>
            <br></br>
            <p className="LearnMore">Learn More</p>
      </div>

    
    </div>
      </div>
      
    </div>
  );
};

export default Services;
