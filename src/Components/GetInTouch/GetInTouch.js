import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../GetInTouch/GetInTouch.css";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Contact = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(()=>{
		// ReactGA.pageview("window.location.pathname + window.location.search")
		// ReactGA.send({ hitType: "pageview", page: "/explore" });
		ReactGA.event({
			category: "Sourceable | Contact",
			action: "Sourceable | Contact",
			// label: "your label", // optional
			// value: 99, // optional, must be a number
			nonInteraction: true, // optional, true/false
			// transport: "xhr", // optional, beacon/xhr/image
		  });

	},[]);

  // useEffect(() => {
  //   // when the auth status is changed
  //   onAuthStateChanged(auth, (user) => {
  //     // if user object exists means loggedIn
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const uid = user.uid;
  //     }
  //     // user is not logged in
  //     else {
  //       // redirect to login page
  //       navigate("/join");
  //     }
  //   });
  // }, [auth, navigate]);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
          <div style={{ flex: 1}}>
                <div style={{ width: '500px', height: '500px', backgroundColor: "#2a67e3", marginleft: "-100px", padding:"15%" }}>
                  <h1 style={{color:"white", fontFamily:"bold", textAlign:"center"}}>
                    Get in Touch
                  </h1>
                  <p style={{color:"white", textAlign:"center"}}>
                  Columbia Startup Lab
                  <br></br>
                  69 Carlton St, New York
                  <br></br>
                  NY 10014
                  <br></br><br></br><br></br>
                  646-358-2834
                  <br></br>
                  info@sourceable.com
                  </p>

                  <div style={{textAlign:"center"}}>
                    <a href="https://www.facebook.com/your-page-url" target="_blank" rel="noopener noreferrer" style={{color:"white", fontSize:"150%", alignItems:"center"}}>
                      <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/sourceable_inc/ " target="_blank" rel="noopener noreferrer" style={{paddingLeft:"5%", color:"white", fontSize:"150%", alignItems:"center"}}>
                      <FaInstagram />
                    </a>
                    <a href="https://twitter.com/your-page-url" target="_blank" rel="noopener noreferrer" style={{paddingLeft:"5%",color:"white", fontSize:"150%", alignItems:"center"}}>
                      <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/company/sourceable-inc " target="_blank" rel="noopener noreferrer" style={{paddingLeft:"5%",color:"white", fontSize:"150%", alignItems:"center"}}>
                      <FaLinkedin />
                    </a>

                  </div>
                  
                  
                </div>
              
          </div>
          <div  style={{ flex: 1}}>
            {/* <div className="contact-container-item"> */}
            <form action="#" method="get" class="contact-form" style={{paddingRight:"18%", paddingTop:"5%"}}>
              <div class="contact-form-item" >
                <InputBox type={"text"} label={"Your Name"} />
              </div>
              <div class="contact-form-item">
                <InputBox type={"email"} label={"Your Email ID"} />
              </div>
              <div class="contact-form-item">
                <textarea
                  placeholder=" "
                  className="input"
                  name="text-area"
                  id="text-area"
                  cols="10"
                  rows="7"
                ></textarea>
                <label htmlFor="text-area" class="label">
                  Message{" "}
                </label>
              </div>
              <div className="contact-form-item btn-container">
                <button type="reset" class="btn btn-contact">
                  Clear
                </button>
                <button type="submit" class="btn btn-contact">
                  Submit
                </button>
              </div>
            </form>
            {/* </div> */}
          </div>
                
      </div>
      
    </div>
  );
};

////custom input box/////

const InputBox = ({ label, type }) => {
  const [focus, setFocus] = useState();

  const focusHandler = () => {
    setFocus(true);
  };

  const blurHandler = (e) => {
    console.log(e.target.value.length);
    e.target.value.length ? setFocus(true) : setFocus(false);
  };
  return (
    <>
      <label htmlFor={label} class={`label ${focus ? "focus" : "not-focus"}`}>
        {label}
      </label>
      <input
        name={label}
        id={label}
        type={type}
        class="input"
        onFocus={focusHandler}
        onBlur={blurHandler}
        placeholder=" "
      />
    </>
  );
};

export default Contact;