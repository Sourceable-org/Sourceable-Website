import React from "react";
import SyriaTurkeyEarthquake from "../../assets/img/revamp/Mask Group 17.png";
import PicsFromSyria from "../../assets/img/revamp/Mask Group 18.png";
import RefugeCamps from "../../assets/img/revamp/Rectangle 162.png";



import "./Verified.css";

const VerifiedContent = () => {
  return (
    <div className="verifiedPage">
      <div style={{ textAlign: "center",}}>
        <p style={{
            fontSize: "20px",
            textAlign: "center",
            color: "blue",
            fontFamily: "sans-serif",
            color: "black",
          }}>Tending Now</p>
        <p
          style={{
            fontSize: "50px",
            textAlign: "center",
            color: "blue",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Get verified content
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{marginLeft: "10%",width:"28%",overflow:"hidden"}}>
          <img
            src={SyriaTurkeyEarthquake}
            alt="Image 1"
            style={{width: "90%",height:"85%"}}

          />
          <br/>
          <p style={{ fontWeight: "bold", paddingTop:"2%" }}>
            Syria-Turkey Earthquake
          </p>
        </div>
        <div style={{width:"28%",overflow:"hidden"}}>
          <img
            src={RefugeCamps}
            alt="Image 2"
            style={{width: "90%",height:"85%" }}
          />
               <p style={{ fontWeight: "bold", paddingTop:"2%"}}>
               Refugee Camps          
               </p>
        </div>
        <div style={{width:"28%",overflow:"hidden" }}>
          <img
            src={PicsFromSyria}
            alt="Image 3"
            style={{width: "90%" ,height:"85%"}}

          />
               <p style={{ fontWeight: "bold", paddingTop:"2%"}}>
               Top picks from Syria          
               </p>
        </div>
      </div>
      
    </div>
  );
};

export default VerifiedContent;
