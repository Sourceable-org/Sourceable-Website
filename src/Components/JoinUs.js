import React, { useRef } from 'react'
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
import FaceIcon from '@mui/icons-material/Face';
import './joinus.css'
const JoinUs = () => {

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    //switch tabs
    const switchTabs = (e, tab) => {

        if (tab === "login") {
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
        else {
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");

            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft");
        }
    }



    return (
        <div className='loginSignUpContainer'>
            <div className="loginSignUpBox">
                <div>
                    <div className="login_signup_toggler">
                        {/* We need to pass the arguments thats why we are using onclick along with function */}
                        <p onClick={(e) => switchTabs(e, "login")} >LOGIN</p>
                        <p onClick={(e) => switchTabs(e, "register")} >REGISTER</p>
                    </div>
                    {/* Using the below button tag as a boorder-bottom of the login and register and when user clicks on this we switch from login to register and vice versa */}
                    <button ref={switcherTab}></button>
                </div>

                {/* Login form */}
                <form action="" className="logInForm" ref={loginTab} >
                    <div className="loginEmail">
                        <MailOutlineSharpIcon />
                        <input type="email" placeholder='Email' required />
                    </div>
                    <div className="loginPassword">
                        <LockOpenSharpIcon />
                        <input type="password" placeholder='Password' required />
                    </div>
                    <input type="submit" value="Login" className='loginBtn' />
                </form>

                {/* Register form */}
                <form action="" className="signUpForm" ref={registerTab}>
                    <div className="registerName">
                        <FaceIcon />
                        <input type="text" placeholder='Name' name='name' required />
                    </div>
                    <div className="registerEmail">
                        <MailOutlineSharpIcon />
                        <input type="email" placeholder='Email' name='email' required />
                    </div>
                    <div className="registerPassword">
                        <LockOpenSharpIcon />
                        <input type="password" placeholder='Password' name='password' required />
                    </div>
                    <input type="submit" value="Register" className='signUpBtn' />
                </form>

            </div>
        </div>
    )
}

export default JoinUs
