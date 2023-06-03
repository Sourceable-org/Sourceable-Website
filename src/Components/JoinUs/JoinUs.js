import FaceIcon from "@mui/icons-material/Face";
import LockOpenSharpIcon from "@mui/icons-material/LockOpenSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import {
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useRef, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import "../Firebase/Firebase";
import googleSignInProvider from "../Firebase/GoogleProvider";
import "./Joinus.css";
import Popup from "reactjs-popup";
import "./popup.css";
import "reactjs-popup/dist/index.css";
import { Alert, Button, Snackbar } from "@mui/material";
import { encrypt, decrypt, compare } from 'n-krypta'; //For es6

const JoinUs = () => {
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [popuplogin, setPopuplogin] = useState(false);
  const [popupsignup, setPopupsignup] = useState(false);

  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  //   const { setAlert } = useAlert();
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


  const JOURNALIST_ACCOUNT_TYPE = encryptID("web");

  const createAccount = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
		alert("You have successfully signed up!")

        // add their email, account type, status and name to the database
        createWebAccountDetailsOnAccountCreation(email, name);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, errorCode, errorMessage);
        // ..
      });

    setEmail("");
    setPassword("");
    setName("");
  };

  // function to check if the loggedIn User account type is web only
  const checkAccountValidity = async (userEmail) => {
    // get account document
    const accountSnap = await getDoc(doc(db, "Accounts", encryptID(userEmail)));

    // if account exists
    if (accountSnap.exists()) {
      // account_type matches JOURNALIST_ACCOUNT_TYPE then return true
      if (accountSnap.data()["account_type"] === encryptID(JOURNALIST_ACCOUNT_TYPE)) {
        return true;
      }
    }

    return false;
  };

  const createWebAccountDetailsOnAccountCreation = async (
    userEmail,
    userName
  ) => {
    await setDoc(doc(db, "Accounts", encryptID(userEmail)), {
      name: encryptID(userName),
      email: encryptID(userEmail),
      account_type: encryptID(JOURNALIST_ACCOUNT_TYPE),
      status: encryptID("online"),
    });
  };

  // function to be executed after login of the user is successful
  const handleLoginSuccess = (userEmail) => {
    // function to update the status of the user to online post successful Login
    const updateUserStatus = async (userEmail) => {
      await updateDoc(doc(db, "Accounts", encryptID(userEmail)), {
        status: encryptID("online"),
      });
    };

    // update the status of the user to online
    updateUserStatus(userEmail);

    // navigate to the home page after success login

    navigate("/");
  };

  // function to handle login process
  const Login = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
		alert("You have successfully logged in!")

        if ((await checkAccountValidity(user.email)) === false) {
          // const auth = getAuth();

          // signOut(auth).then(() => {
          // 	console.log('Mobile Users Not Allowed');
          // });

          handleLoginSuccess(user.email);
        } else {
          // call the post login success function
          handleLoginSuccess(user.email);
        }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    setEmail("");
    setPassword("");
  };

  // switch tabs
  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    } else {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  // function to handle login process using google accounts
  const handleGoogleLogin = (event) => {
    event.preventDefault();

    // pass the auth and google provider object to the signInWithPopup
    signInWithPopup(auth, googleSignInProvider)
      .then(async (result) => {
		// fetch the current loggedIn user details
		alert("You have successfully logged in!")

        const googleLoggedInUser = result.user;

        // check if the user is new or not
        const newUser = getAdditionalUserInfo(result).isNewUser;

        // if the user has loggedIn for the first time then create a doc for the new user
        if (newUser) {
          // add their email, account type, status and name to the database
          createWebAccountDetailsOnAccountCreation(
            googleLoggedInUser.email,
            googleLoggedInUser.displayName
          );
        }

        // validate the account type of the loggedIn user
        if ((await checkAccountValidity(googleLoggedInUser.email)) === false) {
          // const auth = getAuth();

          // // sign out the invalid user
          // signOut(auth).then(() => {
          // 	console.log('Mobile Users Not Allowed');
          // });
          handleLoginSuccess(googleLoggedInUser.email);
        }

        // call the post login success function
        handleLoginSuccess(googleLoggedInUser.email);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="loginSignUpContainer">
      <div className="loginSignUpBox">
        <div>
          <div className="login_signup_toggler">
            {/* We need to pass the arguments thats why we are using onclick along with function */}
            <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
            <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
          </div>
          {/* Using the below button tag as a boorder-bottom of the login and register and when user clicks on this we switch from login to register and vice versa */}
          <button ref={switcherTab}></button>
        </div>
        {/* Login form */}
        <form className="logInForm" ref={loginTab} onSubmit={Login}>
          <div className="loginEmail">
            {/* <MailOutlineSharpIcon /> */}
            <input
              style={{ color: "black" }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="loginPassword">
            {/* <LockOpenSharpIcon /> */}
            <input
              style={{ color: "black" }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="loginBtn"
            //
          />
          <GoogleIcon onClick={handleGoogleLogin}> </GoogleIcon>
        </form>
        {/* Register form */}
        <form className="signUpForm" ref={registerTab} onSubmit={createAccount}>
          <div className="registerName">
            {/* <FaceIcon /> */}
            <input
              style={{ color: "black" }}
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="registerEmail">
            {/* <MailOutlineSharpIcon /> */}
            <input
              style={{ color: "black" }}
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="registerPassword">
            {/* <LockOpenSharpIcon /> */}
            <input
              style={{ color: "black" }}
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Register" className="signUpBtn" />
          <GoogleIcon onClick={handleGoogleLogin}> </GoogleIcon>
        </form>{" "}
      </div>
      {/* <Button
        variant="outlined"
        onClick={() => {
          setPopuplogin(!popuplogin);
        }}
      >
        Toggle
      </Button>
      <Snackbar autoHideDuration={1} open={popuplogin}>
        <Alert
          sx={{
            position: "absolute",
            zIndex: 30,
            top: -650,
            width: "400px",
            left: 1150,
          }}
          severity="success"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => {
                setPopuplogin(!popuplogin);
              }}
            >
              X
            </Button>
          }
        >
          You have successfully logged in!{" "}
        </Alert>
      </Snackbar> */}
    </div>
  );
};

export default JoinUs;
