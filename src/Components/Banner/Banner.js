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
      {}
      <div>
        <div style={{ textAlign: "center", paddingTop: "5%" }}>
          <br></br>
          <p
            style={{
              // fontWeight: 400,
              fontSize: "20px",
              textAlign:"center",
              color: "white",
              fontFamily: "sans-serif",
              // paddingBottom:"-100%"
              marginBottom:"-10px"
            }}
          >
            Real stories, from real people, in real time
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "50px",
              color: "white",
              marginBottom:"-20px"
            }}
          >
            Bringing truth to the forefront
            </p>
            <p
            style={{
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "50px",
              color: "white",
            }}
          >with trusted sources</p> 
            
          

          
        </div>

        <div
          style={{
            height: "30%",
            paddingTop: "6%"
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
                  width: "250%",
                  borderRadius: "15px",
                }}
              />
            </div>

            {/* <div style={{paddingLeft:"25%",paddingTop:"45%"}}>
              <img
                src={img3}
                alt="Image 3"
                style={{
                  width: "200%",
                  borderRadius: "15px",
                }}
              />
            </div> */}
          
            <div style={{paddingLeft:"80%"}}>
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
    <div className="newpage">
    <div style={{ textAlign: "center", paddingTop: "4px" }}>
          <p
            style={{
              top: "978px",
              fontSize: "50px",
              textAlign:"center",
              color: "blue",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              color: "#0f68d2",
          
            }}
          >
            Local Solution. Global Impact.
            </p>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "20px",
              color: "white",
            }}
          >
           Sourceable promotes local solutions for global challenges in places of conflict and crisis,
           <br></br>
           with focus on creating jobs and developing skills for citizen journalists.
           <br></br>
           <br></br>
           Our approach is amplifying local voices and foresting a more diverse and equitable Global
           <br></br>
           environment.
          </p>
          <br></br>
          

          {/* <div
            style={{
            width: '100px',
            height: '25px',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: '12px',
            }}
          
          > */}
          <button
          
          style={{
          color:"#3a76f0",
          fontWeight:'bold',
          fontSize: '14px',
          font:"Futura BdCn BT",
          alignContent: 'center',
          height:"35px",
          // paddingTop:"300px",
          backgroundColor:"white",
          borderRadius:"15px",
          width:"8%"
          }}
          >ABOUT US</button>
          {/* </div> */}
        </div>
                <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop:"7%"
                }}
              >
               
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      flex: 1,
                      fontSize: "40px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#FFFFFF",
                    }}
                  >
                    68.3M+
                  </h2>
                  <h5
                    style={{
                      flex: 1,
                      fontSize: "20px",
                      textAlign: "center",
                      // fontWeight: "bold",
                      color: "#FFFFFF",
                    }}
                  >
                    Media Impressions
                  </h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      flex: 1,
                      fontSize: "40px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#FFFFFF",
                    }}
                  >
                    20+
                  </h2>
                  <h5
                    style={{
                      flex: 1,
                      fontSize: "20px",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    Citizen Journalists
                  </h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      flex: 1,
                      fontSize: "40px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#FFFFFF",
                    }}
                  >
                    4+
                  </h2>
                  <h5
                    style={{
                      flex: 1,
                      fontSize: "20px",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    Countries
                  </h5>
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      flex: 1,
                      fontSize: "40px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#FFFFFF",
                    }}
                  >
                    500+
                  </h2>
                  <h5
                    style={{
                      flex: 1,
                      fontSize: "20px",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    Users
                  </h5>
                </div>
              </div>

                
    </div>
    </div>
    
  );
};

export default Banner;
