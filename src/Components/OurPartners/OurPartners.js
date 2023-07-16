import React from 'react';
import './OurPartners.css';
import Newyork from "../../images/New-York-Times-logo.webp";
import Magnum from "../../assets/img/revamp/Rectangle 107.png";
import OpenSociety from "../../assets/img/revamp/Rectangle 110.png";
import BBC from "../../assets/img/revamp/Rectangle 79.png";
import Witness from "../../assets/img/revamp/Rectangle 96.png";
import ICFJ from "../../assets/img/revamp/Rectangle 100.png";
import Irex from "../../assets/img/revamp/Rectangle 105.png";



const ImageColumn = () => {
  return (
    <div className="Ourpartners">
    <p className='headerOne'>Our Partners</p>

      <div className="image-column">
        <img src={Newyork} alt="Image 1" className="image" />
        <img src={BBC} alt="Image 2" className="image" />
        <img src={Magnum} alt="Image 3" className="image" />
        <img src={OpenSociety} alt="Image 4" className="image" />
        <img src={Witness} alt="Image 5" className="image" />
        <img src={ICFJ} alt="Image 6" className="image" />
        <img src={Irex} alt="Image 7" className="image" />
      </div>
    </div>
  );
};

export default ImageColumn;
