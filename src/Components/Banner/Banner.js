import React from "react";
import "./Banner.css";

import APPSTORE from "../../images/app store.png";
import PLAYSTORE from "../../images/play store.png";
import Vid from "../../video/sourceable-video_final.mp4";
import Source_logo from "../../images/Capture.JPG";
import image1 from "../../images/imagehome1.jpeg";
import image2 from "../../images/imagehome2.jpeg";
import image3 from "../../images/imagehome3.jpeg";

import img1 from "../../images/homepage_slider/img1.jpg";
import img2 from "../../images/homepage_slider/img2.jpg";
import img3 from "../../images/homepage_slider/img3.jpg";
import img4 from "../../images/homepage_slider/img4.jpg";
import img5 from "../../images/homepage_slider/img5.jpg";
import img6 from "../../images/homepage_slider/img6.jpg";
import img7 from "../../images/homepage_slider/img7.jpg";

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

function Rectangle() {
  return (
    <svg width="200" height="200">
      <rect x="50" y="50" width="100" height="100" fill="blue" />
    </svg>
  );
}

const Banner = () => {
  return (
    <div className="homePage">
      {/* <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="first">
          <div className="part1-left">
            
            <br></br>
            <p>
              <svg
                preserveAspectRatio="xMidYMid meet"
                data-bbox="34.672 26.751 130.709 146.357"
                viewBox="34.672 26.751 130.709 146.357"
                height="500"
                width="500"
                xmlns="http://www.w3.org/2000/svg"
                data-type="color"
                role="presentation"
                aria-hidden="true"
                aria-labelledby="svgcid-35s3un-dqjqa6"
                style={{
                  marginTop: "-70px",
                }}
              >
                <g>
                  <path
                    d="M50 154.8c-16-19.3-15.4-43.7-15.3-50 .6-26 13.8-64.1 45.9-75.1 35.8-12.2 78.3 15.2 84.1 50 5.2 31.1-20.8 56.9-30.6 66.7-7.3 7.3-33.6 33.6-61.2 25-12-3.6-19.6-12.6-22.9-16.6z"
                    fill="#b8ccf4"
                    data-color="1"
                  ></path>
                </g>
                <foreignObject x="20" y="50" width="110" height="150">
                  <div>
                    <h1
                      style={{
                        fontSize: "12px",
                        marginLeft: "35px",
                        textDecoration: "bold",
                        fontWeight: "bold",
                        fontFamily: "Arial black",
                        textAlign: "left",
                      }}
                    >
                      Trusted by citizen journalists, used by the world.
                    </h1>
                    <p
                      style={{
                        fontSize: "5px",
                        marginLeft: "40px",
                        textDecoration: "bold",
                        fontWeight: "bold",
                        textAlign: "left",
                        marginTop: "-3px",
                      }}
                    >
                      Empower • Support • Connect
                    </p>
                  </div>
                </foreignObject>
              </svg>
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            paddingTop: "100px",
            paddingLeft: "200px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={image3}
                alt="Image 2"
                style={{ width: "200px", height: "200px", margin: "10px" }}
              />
              <img
                src={image2}
                alt="Image 1"
                style={{ width: "200px", height: "200px", margin: "10px" }}
              />
            </div>

            <div style={{}}></div>
            <img
              src={image1}
              alt="Image 3"
              style={{ width: "300px", height: "420px", margin: "10px" }}
            />
          </div>
        </div>
      
      </div> */}
      <div>
        <div style={{ textAlign: "center", paddingTop: "4%" }}>
          <br></br>
          <p
            style={{
              fontWeight: "bolder",
              fontFamily: "Arial",
              fontSize: "35px",
              color: "black",
            }}
          >
            BRINGING TRUTH
            <br />
            TO THE FOREFRONT
            <br />
            WITH TRUSTED SOURCES
          </p>

          <p
            style={{
              // fontWeight: 400,
              fontSize: "20px",
              color: "black",
            }}
          >
            Real stories, from real people, in real time
          </p>
        </div>

        <div
          style={{
            height: "100px",
          }}
        >
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            arrows={false}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            focusOnSelect={true}
          >
            <div style={{paddingTop:"15%"}}>
              <img
                src={img1}
                alt="Image 1"
                style={{
                  width: "150%",
                  borderRadius: "15px",
                }}
              />
            </div>

            <div style={{paddingLeft:"55%",paddingTop:"25%"}}>
              <img
                src={img2}
                alt="Image 2"
                style={{
                  width: "150%",
                  borderRadius: "15px",
                }}
              />
            </div>

            <div style={{paddingLeft:"25%",paddingTop:"45%"}}>
              <img
                src={img3}
                alt="Image 3"
                style={{
                  width: "200%",
                  borderRadius: "15px",
                }}
              />
            </div>
          
            <div style={{paddingLeft:"80%",}}>
              <img
                src={img4}
                alt="Image 4"
                style={{
                  width: "700%",
                  borderRadius: "15px",
                }}
              />
            </div>
          
            <div style={{paddingLeft:"10%",marginTop:"85%"}}>
              <img
                src={img5}
                alt="Image 5"
                style={{
                  width: "120%",
                  borderRadius: "15px",
                }}
              />
            </div>

            <div style={{paddingLeft:"25%",paddingTop:"45%"}}>
              <img
                src={img6}
                alt="Image 6"
                style={{
                  width: "95%",
                  borderRadius: "15px",
                }}
              />
            </div>

            <div style={{paddingRight:"10%",}}>
              <img
                src={img7}
                alt="Image 7"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                }}
              />
            </div>
       

          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
