import React from 'react';
import './Hire.css'; // Assuming you have a separate CSS file for styles
import Journalist from "../../assets/img/revamp/Mask Group 2.png";
import Journalist1 from "../../assets/img/revamp/Mask Group 3.png";
import Journalist2 from "../../assets/img/revamp/Mask Group 4.png";
import Journalist3 from "../../assets/img/revamp/Rectangle 23.png";


const Hire = () => {
  return (
    <div className="Hire">
     <p className='paragraph'>Hire The Best</p>
      <p className='header'>Access Local Expertise at Your Fingertips</p>
      <div className="image-row">
        <img src={Journalist} alt="Image 1" className="round-image" />
        <img src={Journalist1} alt="Image 2" className="round-image" />
        <img src={Journalist2} alt="Image 3" className="round-image" />
        <img src={Journalist3} alt="Image 4" className="round-image" />
        {/* <img src={Journalist} alt="Image 5" className="round-image" /> */}
      </div>
      {/* <button className="button">VIEW ALL</button> */}
    </div>
  );
};

export default Hire;
