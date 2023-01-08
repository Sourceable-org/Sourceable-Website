import FaceIcon from '@mui/icons-material/Face';
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import {
	createUserWithEmailAndPassword,
	getAdditionalUserInfo,
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import {
	doc,
	getDoc,
	getFirestore,
	setDoc,
	updateDoc,
} from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import '../Firebase/Firebase';
import googleSignInProvider from '../Firebase/GoogleProvider';
import './Joinus.css';

const JoinUs = () => {
	const loginTab = useRef(null);
	const registerTab = useRef(null);
	const switcherTab = useRef(null);
	const [email, setEmail] = useState();
	const [name, setName] = useState();
	const [password, setPassword] = useState();

	const auth = getAuth();
	const db = getFirestore();
	const navigate = useNavigate();

	const JOURNALIST_ACCOUNT_TYPE = 'web';

	const createAccount = async (e) => {
		e.preventDefault();

		createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);

				// add their email, account type, status and name to the database
				createWebAccountDetailsOnAccountCreation(email, name);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(error, errorCode, errorMessage);
				// ..
			});

		setEmail('');
		setPassword('');
		setName('');
	};

	// function to check if the loggedIn User account type is web only
	const checkAccountValidity = async (userEmail) => {
		// get account document
		const accountSnap = await getDoc(doc(db, 'Account', userEmail));

		// if account exists
		if (accountSnap.exists()) {
			// account_type matches JOURNALIST_ACCOUNT_TYPE then return true
			if (
				accountSnap.data()['account_type'] === JOURNALIST_ACCOUNT_TYPE
			) {
				return true;
			}
		}

		return false;
	};

	const createWebAccountDetailsOnAccountCreation = async (
		userEmail,
		userName
	) => {
		await setDoc(doc(db, 'Account', userEmail), {
			name: userName,
			email: userEmail,
			account_type: JOURNALIST_ACCOUNT_TYPE,
			status: 'online',
		});
	};

	// function to be executed after login of the user is successful
	const handleLoginSuccess = (userEmail) => {
		// function to update the status of the user to online post successful Login
		const updateUserStatus = async (userEmail) => {
			await updateDoc(doc(db, 'Account', userEmail), {
				status: 'online',
			});
		};

		// update the status of the user to online
		updateUserStatus(userEmail);

		// navigate to the home page after success login
		navigate('/');
	};

	// function to handle login process
	const Login = async (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				// Signed in
				const user = userCredential.user;

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

		setEmail('');
		setPassword('');
	};

	// switch tabs
	const switchTabs = (e, tab) => {
		if (tab === 'login') {
			switcherTab.current.classList.add('shiftToNeutral');
			switcherTab.current.classList.remove('shiftToRight');

			registerTab.current.classList.remove('shiftToNeutralForm');
			loginTab.current.classList.remove('shiftToLeft');
		} else {
			switcherTab.current.classList.add('shiftToRight');
			switcherTab.current.classList.remove('shiftToNeutral');

			registerTab.current.classList.add('shiftToNeutralForm');
			loginTab.current.classList.add('shiftToLeft');
		}
	};

	// function to handle login process using google accounts
	const handleGoogleLogin = (event) => {
		event.preventDefault();

		// pass the auth and google provider object to the signInWithPopup
		signInWithPopup(auth, googleSignInProvider)
			.then(async (result) => {
				// fetch the current loggedIn user details
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
				if (
					(await checkAccountValidity(googleLoggedInUser.email)) ===
					false
				) {
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
		<div className='loginSignUpContainer'>
			<div className='loginSignUpBox'>
				<div>
					<div className='login_signup_toggler'>
						{/* We need to pass the arguments thats why we are using onclick along with function */}
						<p onClick={(e) => switchTabs(e, 'login')}>LOGIN</p>
						<p onClick={(e) => switchTabs(e, 'register')}>
							REGISTER
						</p>
					</div>
					{/* Using the below button tag as a boorder-bottom of the login and register and when user clicks on this we switch from login to register and vice versa */}
					<button ref={switcherTab}></button>
				</div>
				{/* Login form */}
				<form className='logInForm' ref={loginTab} onSubmit={Login}>
					<div className='loginEmail'>
						<MailOutlineSharpIcon />
						<input
							type='email'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className='loginPassword'>
						<LockOpenSharpIcon />
						<input
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<input
						type='submit'
						value='Login'
						className='loginBtn'
						//
					/>
					<GoogleIcon onClick={handleGoogleLogin}> </GoogleIcon>
				</form>
				{/* Register form */}
				<form
					className='signUpForm'
					ref={registerTab}
					onSubmit={createAccount}>
					<div className='registerName'>
						<FaceIcon />
						<input
							type='text'
							placeholder='Name'
							name='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className='registerEmail'>
						<MailOutlineSharpIcon />
						<input
							type='email'
							placeholder='Email'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className='registerPassword'>
						<LockOpenSharpIcon />
						<input
							type='password'
							placeholder='Password'
							name='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<input
						type='submit'
						value='Register'
						className='signUpBtn'
					/>
					<GoogleIcon onClick={handleGoogleLogin}> </GoogleIcon>
				</form>{' '}
			</div>
		</div>
	);
};

export default JoinUs;
