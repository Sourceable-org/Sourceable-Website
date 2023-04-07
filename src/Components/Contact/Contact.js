import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Contact/Contact.css";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import GetInTouch from "../GetInTouch/GetInTouch";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    ReactGA.event({
      category: "Sourceable | Contact",
      action: "Sourceable | Contact",
      nonInteraction: true, // optional, true/false
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Sourceable | Contact</title>
      </Helmet>

      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1 }}>
            <div
              style={{
                width: "500px",
                height: "200%",
                backgroundColor: "#2a67e3",
                marginleft: "-100px",
                padding: "15%",
              }}
            >
              <div
                style={{
                  paddingTop: "20%",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontFamily: "bold",
                    textAlign: "center",
                  }}
                >
                  Get in Touch
                </h1>
                <p style={{ color: "white", textAlign: "center" }}>
                  Columbia Startup Lab
                  <br></br>
                  69 Carlton St, New York
                  <br></br>
                  NY 10014
                  <br></br>
                  <br></br>
                  <br></br>
                  646-358-2834
                  <br></br>
                  info@sourceable.com
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <a
                  href="https://www.facebook.com/your-page-url"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    fontSize: "150%",
                    alignItems: "center",
                  }}
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/your-page-url"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    paddingLeft: "5%",
                    color: "white",
                    fontSize: "150%",
                    alignItems: "center",
                  }}
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com/your-page-url"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    paddingLeft: "5%",
                    color: "white",
                    fontSize: "150%",
                    alignItems: "center",
                  }}
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/your-page-url/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    paddingLeft: "5%",
                    color: "white",
                    fontSize: "150%",
                    alignItems: "center",
                  }}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
          <div
                style={{
                  paddingTop: "15%",
                }}
              >
            <form
              action="#"
              method="get"
              class="contact-form"
              style={{ paddingRight: "18%", paddingTop: "5%" }}
            >
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
            </div>
          </div>
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
