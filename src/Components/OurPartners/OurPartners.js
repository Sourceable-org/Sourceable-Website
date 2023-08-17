import React from 'react';
import './OurPartners.css';
import Newyork from "../../images/New-York-Times-logo.webp";
import abcnews from "../../assets/img/revamp/abcnews.webp";
import businessinsider from "../../assets/img/revamp/buisness.webp";
import gurdian from "../../assets/img/revamp//guardian.webp";
import telegraph from "../../assets/img/revamp//thetelegraph.webp";
import InfiniteImageLooper from './InfiniteImageLooper';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    // slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};



const ImageColumn = () => {

  const images = [Newyork, abcnews, businessinsider, gurdian, telegraph, ];

  return (
    <div className="Ourpartners">
      <p className='headerOne'>Appeared In</p>
      <InfiniteImageLooper images={images} />
    </div>

    // <div className="Ourpartners">
    // <p className='headerOne'>Appeared In</p>
    //   <div className="image-column">
    //     <img src={Newyork} alt="Image 1" className="image" />
    //     <img src={abcnews} alt="Image 1" className="image" />
    //     <img src={businessinsider} alt="Image 1" className="image" />
    //     <img src={gurdian} alt="Image 2" className="image" />
    //     <img src={telegraph} alt="Image 3" className="image" />
       
    //   </div>
    // </div>
  );
};

export default ImageColumn;
