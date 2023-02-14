import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Contact/Contact.css";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

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

  useEffect(() => {
    // when the auth status is changed
    onAuthStateChanged(auth, (user) => {
      // if user object exists means loggedIn
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
      }
      // user is not logged in
      else {
        // redirect to login page
        navigate("/join");
      }
    });
  }, [auth, navigate]);

  return (
    <div className="bg">
      <Helmet>
        <title>Sourceable | Contact</title>
      </Helmet>
      <div class="contact-container">
        <h2 className="contact-container-item">Contact Us</h2>
        <hr className="contact-container-item" />

        {/* <div className="contact-container-item"> */}
        <form action="#" method="get" class="contact-form">
          <div class="contact-form-item">
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
              Enter your concern in Detail{" "}
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