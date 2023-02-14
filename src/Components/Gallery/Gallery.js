import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import NotificationImg from '../../images/notification.jpeg';
import '../Gallery/Gallery.css';
import LifeSave from '../LifeSave/LifeSave';
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

const Gallery = () => {
	const [handleModal, setHandleModal] = useState(false);
	const auth = getAuth();
	const navigate = useNavigate();

	useEffect(()=>{
		// ReactGA.pageview("window.location.pathname + window.location.search")
		// ReactGA.send({ hitType: "pageview", page: "/explore" });
		ReactGA.event({
			category: "Sourceable | Gallery",
			action: "Sourceable | Gallery",
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
				navigate('/join');
			}
		});
	}, [auth, navigate]);
	return (
		<>
		<Helmet>
        <title>Sourceable | Gallery</title>
      </Helmet>
			{/* <div className='notification'>
				<img
					src={NotificationImg}
					alt='No loaded'
					onClick={() => setHandleModal(true)}
				/>
				<Modal
					isOpen={handleModal}
					onRequestClose={(e) => setHandleModal(false)}
					contentLabel='Example Modal'
					style={{
						overlay: {
							paddingTop: '4rem ',
							width: '40%',
							height: '60vh',
							marginTop: '4rem',
							right: '5%',
							marginLeft: '60%',
						},
						content: {
							color: 'white',
							backgroundColor: '#a7a7a8',
						},
					}}>
					<div className='noty_div'>
						Lena Arkawi replied to your comment{' '}
					</div>
					<div className='noty_div'>
						Parv Joshi replied to your comment
					</div>
					<div className='noty_div'>
						Siddhanth Kumar posted an update
					</div>

					<button
						onClick={(e) => setHandleModal(false)}
						className='closeBtn'>
						Close
					</button>
				</Modal>
			</div> */}
			<LifeSave />
		</>
	);
};

export default Gallery;
