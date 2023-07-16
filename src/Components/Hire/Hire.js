import React from 'react';
import './Hire.css'; // Assuming you have a separate CSS file for styles
import Journalist from "../../assets/img/revamp/journalist3.jpeg";
import Journalist1 from "../../assets/img/revamp/dummyJournalist.jpeg";

const Hire = () => {
  return (
    <div className="Hire">
     <p className='paragraph'>Hire The Best</p>
      <p className='header'>Access Local Expertise at Your Fingertips</p>
      <div className="image-row">
        <img src={Journalist} alt="Image 1" className="round-image" />
        <img src={Journalist1} alt="Image 2" className="round-image" />
        <img src={Journalist} alt="Image 3" className="round-image" />
        <img src={Journalist1} alt="Image 4" className="round-image" />
        <img src={Journalist} alt="Image 5" className="round-image" />
      </div>
      <button className="button">VIEW ALL</button>
    </div>
  );
};

export default Hire;
