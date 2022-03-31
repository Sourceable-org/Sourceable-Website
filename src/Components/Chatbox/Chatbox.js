import { db } from '../Firebase/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './Chatbox.css';

const Chatbox = () => {
	// to display the details of currently opened chat (receiver) in header
	const [currentReceiverName, setCurrentReceiverName] = useState('');
	const [currentReceiverStatus, setCurrentReceiverStatus] = useState('');
	const [currentReceiverProfilePhoto, setCurrentReceiverProfilePhoto] =
		useState('');

	// state to store the chatUsers
	const [chatUsers, setChatUsers] = useState([]);

	//current message
	const [currentMessage, setCurrentMesssage] = useState('');
	const [currentTime, setCurrentTime] = useState('');

	//all messages
	const [messages, setMessages] = useState([
		{
			key: 0,
			message: 'Hello, How are you?',
			time: '10:10 am',
		},

		{
			key: 1,
			message: "I'm Fine, How're you?",
			time: '10:12 am',
		},

		{
			key: 0,
			message: 'Good. Lets catch up?',
			time: '10:15 am',
		},

		{
			key: 1,
			message: 'Ye',
			time: '10:20 am',
		},
	]);

	//self
	const user = {
		key: 0,
		messaage: [{}],
	};

	//demo data
	const users = [
		{
			id: uuid(),
			name: 'Vincent Porter',
			status: '7 mins ago',
			profilePhotoURL:
				'https://bootdey.com/img/Content/avatar/avatar1.png',
		},
		{
			id: uuid(),
			name: 'Aiden Chavezr',
			status: 'online',
			profilePhotoURL:
				'https://bootdey.com/img/Content/avatar/avatar4.png',
		},
		{
			id: uuid(),
			name: 'Mike Thomas',
			status: 'online',
			profilePhotoURL:
				'https://bootdey.com/img/Content/avatar/avatar2.png',
		},
		{
			id: uuid(),
			name: 'Christian Kelly',
			status: '10 hours ago',
			profilePhotoURL:
				'https://bootdey.com/img/Content/avatar/avatar3.png',
		},
	];

	//function
	const profileButtonClick = (name, status, profilePhotoURL) => {
		console.log('Clicked on another user');
		setCurrentReceiverName(name);
		setCurrentReceiverStatus(status);
		setCurrentReceiverProfilePhoto(profilePhotoURL);
	};

	const onChangeHandler = (e) => {
		setCurrentMesssage(e.target.value);
	};

	const sendMessage = useCallback(() => {
		setMessages([
			...messages,
			{ key: 0, message: currentMessage, time: currentTime },
		]);
		setCurrentMesssage('');
	}, [currentMessage]);

	useEffect(() => {
		let curr = new Date();
		let time = curr.getTime();
		setCurrentTime(moment(time).format('h:mm a'));
	}, [sendMessage]);

	useEffect(() => {
		// make a query to fetch all the users from the FireBase Backend
		const getAllChatUsersFromFireBase = async () => {
			const chatUsersSnapshot = await getDocs(collection(db, 'users'));

			// iterate all the docs and just return the document data
			const chatUsersFromFireBase = chatUsersSnapshot.docs.map((doc) => {
				return doc.data();
			});

			//  update the state of chatUsers
			setChatUsers(chatUsersFromFireBase);
		};

		getAllChatUsersFromFireBase();
	}, []);

	console.log({ chatUsers });

	return (
		<div className='container-chat-box'>
			<div className='row clearfix'>
				<div className='col-lg-12'>
					<div className='card chat-app'>
						<div id='plist' className='people-list'>
							<div className='input-group mb-0'>
								<input
									type='text'
									className='form-control'
									placeholder='Search...'
								/>
								<span className='input-group-text'>
									<i className='fa fa-search'></i>
								</span>
							</div>
							<ul className='list-unstyled chat-list mt-2 mb-0'>
								{chatUsers.map(({ name, status, pic }) => (
									<li
										className='clearfix'
										onClick={() =>
											profileButtonClick(
												name,
												status,
												pic
											)
										}>
										<img src={pic} alt='avatar' />
										<div className='about'>
											<div className='name'>{name}</div>
											<div className='status'>
												{' '}
												<i
													className={`fa fa-circle
														${status !== 'online' ? 'offline' : 'online'}`}></i>{' '}
												{status}{' '}
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>

						<div className='chat'>
							<div className='chat-header clearfix'>
								<div className='row'>
									<div className='col-lg-6'>
										<a
											href='javascript:void(0);'
											data-toggle='modal'
											data-target='#view_info'>
											<img
												src={
													currentReceiverProfilePhoto
												}
												alt='avatar'
											/>
										</a>
										<div className='chat-about'>
											<div className='mb'>
												{currentReceiverName}
											</div>
											<small>
												{currentReceiverStatus !==
												'online'
													? 'Last seen: '
													: ''}
												{currentReceiverStatus}
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className='chat-history'>
								<ul className='m-b-0'>
									{messages.map(({ key, message, time }) => (
										<li
											class={`clearfix flex-column align-${
												key === 0 ? 'end' : 'start'
											}`}>
											{key === 0 ? (
												<>
													<div class='message other-message float-right'>
														{message}
													</div>
													<div class='message-data align-self-end'>
														<div class='message-data-time'>
															{time}
														</div>
													</div>
												</>
											) : (
												<>
													<div class='message my-message float-right align-start'>
														{message}
													</div>
													<div class='message-data align-self-start'>
														<div class='message-data-time'>
															{time}
														</div>
													</div>
												</>
											)}
										</li>
									))}
								</ul>
							</div>
							<div className='chat-message clearfix'>
								<div className='input-group mb-0'>
									<div className='input-group-prepend'></div>
									<input
										value={currentMessage}
										type='text'
										className='form-control'
										placeholder='Enter text here...'
										onChange={onChangeHandler}
										onKeyDown={(e) =>
											e.key === 'Enter'
												? sendMessage(e)
												: ''
										}
									/>
									<span className='input-group-text'>
										<i
											className='fa fa-send'
											onClick={sendMessage}></i>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chatbox;
