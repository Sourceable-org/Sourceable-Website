import { db } from "../Firebase/Firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { serverTimestamp, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Firebase/Firebase";
import "./Header.css";
import { FaRocketchat } from "react-icons/fa";
import Source_logo from "../../images/Capture.JPG";
import { encrypt, decrypt, compare } from 'n-krypta'; //For es6

const Header = () => {
  const auth = getAuth();
  const [loggedIn, setLoggedIN] = useState(false);
  const [loggedInUserEmail, setLoggedINUserEmail] = useState("");

  function ConvertStringToHex(str) {
		var arr = [];
		for (var i = 0; i < str.length; i++) {
		  arr[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
		}
		return "\\u" + arr.join("\\u");
	}

	function decryptData(str) {
		const CryptoJS = require("crypto-js");
		const key = ConvertStringToHex("Sourceable");
	
		const decrypted = CryptoJS.AES.decrypt(str, key);
		console.log(decrypted);
	
		console.log(
		  "-----------------------------------------------------------------------"
		);
		var output = decrypted.toString(CryptoJS.enc.Utf8);
		console.log(output);
	
		return output;
	}

function encryptedData(str){
    const key = ConvertStringToHex('Sourceable');
    const CryptoJS = require('crypto-js');
    const encryptedAudio = CryptoJS.AES.encrypt(str, key);

    return encryptedAudio;
  }

  function encryptID(message){
    const key = ConvertStringToHex('Sourceable');

    const encryptedString = encrypt(message, key); // #Iblankartan!not!svreblankartwhfreblankartzpublankartase!gettiogblankartypvrblankartiofprmatipn,blankartcvtblankartgpoeblankarttopid.blankartI!oeedtblankartuoblankartspeodblankartspneblankarttjmfblankartlearoing!nore!osblankartundesstaoeing!mpre.blankartTiankt!for!eycelleotblankartiogoblankartI!wbsblankartlooling!gorblankartuhjsblankartinfpblankartfos!myblankartnitsion.#

    return encryptedString;
 
  };

	function decryptID(message){
		const key = ConvertStringToHex('Sourceable');
	
		const encryptedString = decrypt(message, key); // #Iblankartan!not!svreblankartwhfreblankartzpublankartase!gettiogblankartypvrblankartiofprmatipn,blankartcvtblankartgpoeblankarttopid.blankartI!oeedtblankartuoblankartspeodblankartspneblankarttjmfblankartlearoing!nore!osblankartundesstaoeing!mpre.blankartTiankt!for!eycelleotblankartiogoblankartI!wbsblankartlooling!gorblankartuhjsblankartinfpblankartfos!myblankartnitsion.#
	
		return encryptedString;
	 
	};

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIN(true);
        setLoggedINUserEmail(user.email);
        // ...
      } else {
        setLoggedIN(false);
        setLoggedINUserEmail("");
      }
    });
  }, [auth]);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        fixed="top"
      >
        <Container className="navstyle">
          <Navbar.Brand
            as={Link}
            to="/"
            style={{
              color: "black",
              float: "left",
            }}
          >
            <img
              src={Source_logo}
              alt="Logo not loaded"
              style={{
                height: "28px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {loggedIn ? (
            <>
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            </>
          ) : (
            <>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              
            </>
          )}

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link
              as={Link}
              to="/"
              className="navOnHover"
              style={{
                color: "black",
                width: "70%"
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              style={{
                color: "black",
                width: "100%"
              }}
              as={Link}
              to="/dashboard"
              className="navOnHover"
            >
              Dashboard
            </Nav.Link>

            {loggedIn ? (
              <Nav.Link
                as={Link}
                to="/explore"
                className="navOnHover"
                style={{
                  color: "black",
                  width: "70%"
                }}
              >
                Explore
              </Nav.Link>
            ) : (
              <></>
            )}

            <Nav.Link
              as={Link}
              to="/contact"
              className="navOnHover"
              style={{
                color: "black",
                width: "100%"
              }}
            >
              Contact Us
            </Nav.Link>
            {loggedIn ? (
              <Nav.Link
                as={Link}
                className="navOnHover"
                style={{
                  color: "black",
                  width: "80%"
                }}
                onClick={() => {
                  // e.preventDefault();
                  signOut(auth)
                    .then(() => {
                      console.log("Sign-out successful.");
                      setLoggedIN(false);

                      updateDoc(doc(db, "Accounts", encryptID(loggedInUserEmail)), {
                        status: serverTimestamp(),
                      });

                      // navigate("/");
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                  // app.auth().signOut()
                }}
              >
                Sign Out
              </Nav.Link>
            ) : (
              <Nav.Link
                as={Link}
                to="/join"
                className="navOnHover"
                style={{
                  color: "black",
                  width: "100%"
                }}
              >
                Get Started
              </Nav.Link>
            )}

            {loggedIn ? (
              <Nav.Link
                as={Link}
                to="/mygallery"
                className="navOnHover"
                style={{
                  color: "black",
                  width: "100%"
                }}
              >
                My Gallery
              </Nav.Link>
            ) : (
              <></>
            )}

            <Nav.Link
              as={Link}
              onClick={() => {
                window.open(
                  "https://gofund.me/462fbdac",
                  "_blank",
                  "noreferrer"
                );
              }}
              className="navOnHover"
              style={{
                color: "black",
                width: "100%"
              }}
            >
              Support us
            </Nav.Link>
            {loggedIn ? (
              <Nav.Link
                as={Link}
                to="/thread"
                className="navOnHover"
                style={{
                  color: "black",
                  width: "100%"
                }}
              >
                Messaging
              </Nav.Link>
            ) : (
              <></>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
