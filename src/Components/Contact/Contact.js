import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Contact/Contact.css";

const Contact = () => {
  const auth = getAuth();
  const navigate = useNavigate();

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
    <div class="contact-container">
      <h2>Contact Us</h2>
      <form action="#" method="get" class="contact-form font2">
        <div class="name ">
          <input
            type="text"
            placeholder="Enter your name"
            class="name-input font2"
          />
        </div>
        <div class="email">
          {" "}
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email-id"
            class="email-input font2"
          />
        </div>
        <div class="textarea-contact">
          <textarea
            name=""
            id=""
            cols="10"
            rows="7"
            class="textarea-input font2"
            placeholder="Enter your concern in detail.."
          ></textarea>
        </div>
        <button type="submit" class="btn-contact">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
