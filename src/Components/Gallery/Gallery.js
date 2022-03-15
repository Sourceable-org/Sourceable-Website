import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import NotificationImg from '../../images/notification.jpeg';
import '../Gallery/Gallery.css';
import LifeSave from '../LifeSave/LifeSave';
const Gallery = () => {
	const [handleModal, setHandleModal] = useState(false);
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
				navigate('/join');
			}
		});
	}, [auth, navigate]);
	return (
		<>
			<div className='notification'>
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
			</div>
			<LifeSave />
		</>
	);
};

export default Gallery;
