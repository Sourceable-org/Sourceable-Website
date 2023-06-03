import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../GetInTouch/GetInTouch.css";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { collection, getDocs } from "firebase/firestore";
import { encrypt, decrypt, compare } from 'n-krypta'; //For es6
import AccountFile from "../GetInTouch/data.json";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";

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

  function ConvertStringToHex(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
      arr[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return '\\u' + arr.join('\\u');
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
  
  // Decryption function
  const decrypt = (ciphertext, key) => {
    const CryptoJS = require('crypto-js');
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    const originalMessage = bytes.toString(CryptoJS.enc.Utf8);
    return originalMessage;
  };


  const [querySnapshot, setquerySnapshot] = useState({});

  

  const getIncidentsDataFromFireStore = async () => {

    // get all documents under the Explore Collection
    const db = getFirestore();

    let count = 0;

    const accountRef = collection(db, "Accounts");

    const AccountsData = AccountFile.map((AccountFile) => {

      const id = encryptID(AccountFile.id);
      const account_type = encryptID(AccountFile.data.account_type);
      const email = encryptID(AccountFile.data.email);
      const name = encryptID(AccountFile.data.name);
      const status = encryptID(AccountFile.data.status);

      setDoc(doc(accountRef, id), {"account_type" : account_type, "email" : email, "name" : name, "status" : status});
      count++;
    })

    console.log("length::::::::::::::",count);

  }

  const getIncidentsDataFromFireStoreInDecryptedFormat = async () => {
    // get all documents under the Explore Collection
    const db = getFirestore();

    let accounData = [];

    const querySnapshot = await getDocs(collection(db, "Account"));

    querySnapshot.forEach( async (doc_new) => {
      // doc.data() is never undefined for query doc snapshots

      const id = encryptID(doc_new.id);
      const account_type = encryptedData(doc_new.data().account_type).toString();
      const email = encryptID(doc_new.data().email);
      const name = encryptedData(doc_new.data().name).toString();
      const status = encryptedData(doc_new.data().status).toString();

      accounData.push({
        "id" : id,
        "data" : {
          "account_type": account_type, 
          "email": email, 
          "name": name,
          "status": status
        }
      })
    });

    const jsonString = JSON.stringify(accounData);

    const blob = new Blob([jsonString], { type: 'application/json' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'data.json';
    downloadLink.click();
    
    console.log("length",accounData.length);
  }
  
  return (
    <div>
      <div>
        <button onClick={()=>getIncidentsDataFromFireStore()}>Download</button>
        {/* <button onClick={() => getIncidentsDataFromFireStoreInDecryptedFormat()}>download data</button> */}
      </div>
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