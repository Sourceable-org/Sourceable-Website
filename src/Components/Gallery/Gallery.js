import React, { useState } from 'react';
import LifeSave from '../LifeSave/LifeSave';
import NotificationImg from '../../images/notification.jpeg';
import '../Gallery/Gallery.css';

import Modal from 'react-modal';
const Gallery = () => {
	const [handleModal, setHandleModal] = useState(false);
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
						Lena Arkawi replied to your comment :
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
