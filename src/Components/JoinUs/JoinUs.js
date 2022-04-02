import FaceIcon from '@mui/icons-material/Face';
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Firebase/Firebase';
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
				await setDoc(doc(db, 'Account', email), {
					name: name,
					email: email,
					account_type: JOURNALIST_ACCOUNT_TYPE,
					status: 'online',
				});
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

	const checkAccountValidity = async (user) => {
		// get account document
		const accountSnap = await getDoc(doc(db, 'Account', user.email));

		if (accountSnap.exists()) {
			if (
				accountSnap.data()['account_type'] === JOURNALIST_ACCOUNT_TYPE
			) {
				return true;
			}
		}

		return false;
	};

	const Login = async (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;

				if (!checkAccountValidity(user)) {
					signOut(auth).then(() => {
						alert('Mobile Users Not Allowed');
					});
				} else {
					navigate('/');
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

	//switch tabs
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
				</form>
			</div>
		</div>
	);
};
export default JoinUs;
