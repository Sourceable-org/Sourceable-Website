import {
	collection,
	getDocs,
	query,
	where,
	Timestamp,
	addDoc,
	onSnapshot,
} from 'firebase/firestore';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { db } from '../Firebase/Firebase';
import './Chatbox.css';

const ChatRoom = ({
	currentReceiverName,
	currentReceiverStatus,
	currentReceiverProfilePhoto,
	currentReceiverChatID,
	senderChatID,
}) => {
	// state to store messages of the chatRoom
	const [messages, setMessages] = useState([]);

	// function to get the chatRoom ID on the basis of sender and receiver user id
	const getChatRoomID = () => {
		const usersID = [];

		// push the IDS of the sender and receiver
		usersID.push(currentReceiverChatID);
		usersID.push(senderChatID);

		// sort the userIDs array
		usersID.sort();

		// get the chatRoomID for the given users
		const chatRoomID = usersID[0] + '-' + usersID[1];

		// return the chatRoomID
		return chatRoomID;
	};

	//current message
	const [currentMessage, setCurrentMesssage] = useState('');
	const [currentTime, setCurrentTime] = useState('');

	// get the chatRoomID for the sender and the receiver
	const chatRoomID = getChatRoomID();

	useEffect(() => {
		const loadPreviousMessages = async () => {
			// get all documents that have messages for the given chatRoom
			const chatRoomPreviousMessagesSnapshot = await getDocs(
				collection(db, 'chatrooms', chatRoomID, 'messages')
			);

			// get the previous messages of the current chatroom
			const chatRoomPreviousMessages =
				chatRoomPreviousMessagesSnapshot.docs.map((doc) => {
					// get the data about the message
					const messageData = doc.data();

					// if the senderChatID and uid of the composer of the message is equal
					// then set key to 0
					if (messageData['sentBy'] === senderChatID) {
						messageData['key'] = 0;
					}
					// if unequal then set key to 1
					else {
						messageData['key'] = 1;
					}

					// return the messageData
					return messageData;
				});

			// update the messages state variables
			setMessages(chatRoomPreviousMessages);
		};

		loadPreviousMessages();
	}, [currentReceiverChatID, chatRoomID]);

	const addMessage = () => {
		const currentMessageToAdd = {
			_id: '112',
			text: currentMessage,
			sentTo: currentReceiverChatID,
			sentBy: senderChatID,
			createdAt: Timestamp.fromDate(new Date()),
			user: {
				_id: '112',
			},
		};

		// Add the message and store it in the chatRoom messages collection
		addDoc(
			collection(db, 'chatrooms', chatRoomID, 'messages'),
			currentMessageToAdd
		);

		setCurrentMesssage('');

		return currentMessageToAdd;
	};

	const sendMessage = useCallback(() => {
		const messageToAdd = addMessage();
		messageToAdd['key'] = 0;

		setMessages([...messages, messageToAdd]);
	}, [currentMessage]);

	const onChangeHandler = (e) => {
		setCurrentMesssage(e.target.value);
	};

	useEffect(() => {
		let curr = new Date();
		let time = curr.getTime();
		setCurrentTime(moment(time).format('h:mm a'));
	}, [sendMessage]);

	console.log({ messages });

	return (
		<div className='chat'>
			<div className='chat-header clearfix'>
				<div className='row'>
					<div className='col-lg-6'>
						<a
							href='javascript:void(0);'
							data-toggle='modal'
							data-target='#view_info'>
							<img
								src={currentReceiverProfilePhoto}
								alt='avatar'
							/>
						</a>
						<div className='chat-about'>
							<div className='mb'>{currentReceiverName}</div>
							<small>
								{currentReceiverStatus !== 'online'
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
					{messages.map(({ key, text, createdAt, index }) => (
						<li
							key={index}
							class={`clearfix flex-column align-${
								key === 0 ? 'end' : 'start'
							}`}>
							{key === 0 ? (
								<>
									<div class='message other-message float-right'>
										{text}
									</div>
									<div class='message-data align-self-end'>
										<div class='message-data-time'>
											{createdAt
												.toDate()
												.toLocaleString()}
										</div>
									</div>
								</>
							) : (
								<>
									<div class='message my-message float-right align-start'>
										{text}
									</div>
									<div class='message-data align-self-start'>
										<div class='message-data-time'>
											{createdAt
												.toDate()
												.toLocaleString()}
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
							e.key === 'Enter' ? sendMessage(e) : ''
						}
					/>
					<span className='input-group-text'>
						<i className='fa fa-send' onClick={sendMessage}></i>
					</span>
				</div>
			</div>
		</div>
	);
};

const Chatbox = () => {
	// to display the details of currently opened chat (receiver) in header
	const [currentReceiverName, setCurrentReceiverName] = useState('');
	const [currentReceiverStatus, setCurrentReceiverStatus] = useState('');
	const [currentReceiverProfilePhoto, setCurrentReceiverProfilePhoto] =
		useState('');
	const [currentReceiverChatID, setCurrentReceiverChatID] = useState('');

	// to store the details of the sender
	const [senderChatID, setSenderChatID] = useState(
		'75iqM8VeGRNM1Z3EqAVYF0DIQG42'
	);

	// state to store the chatUsers
	const [chatUsers, setChatUsers] = useState([]);

	//
	const profileButtonClick = (name, status, profilePhotoURL, uid) => {
		console.log('Clicked on another user');
		setCurrentReceiverName(name);
		setCurrentReceiverStatus(status);
		setCurrentReceiverProfilePhoto(profilePhotoURL);
		setCurrentReceiverChatID(uid);
	};

	useEffect(() => {
		// make a query to fetch all the users from the FireBase Backend
		const getAllChatUsersFromFireBase = async () => {
			const chatUsersSnapshot = await getDocs(collection(db, 'users'));

			// iterate all the docs and just return the document data
			const chatUsersFromFireBase = chatUsersSnapshot.docs.map((doc) => {
				// get the data of the chatUser
				const chatUserData = doc.data();

				// if the status is string then set the value to online
				if (typeof chatUserData.status === 'string') {
					chatUserData.status = 'online';
				}
				// if the status is timestamp type then get the DateObject
				// indicates the user is offline currently and we will display the last seen
				else {
					chatUserData.status = chatUserData.status
						.toDate()
						.toLocaleString();
				}

				// return the chatUserData object
				return chatUserData;
			});

			//  update the state of chatUsers
			setChatUsers(chatUsersFromFireBase);
		};

		getAllChatUsersFromFireBase();
	}, []);

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
								{chatUsers.map(({ name, status, pic, uid }) => (
									<li
										className='clearfix'
										onClick={() =>
											profileButtonClick(
												name,
												status,
												pic,
												uid
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

						<ChatRoom
							currentReceiverName={currentReceiverName}
							currentReceiverStatus={currentReceiverStatus}
							currentReceiverProfilePhoto={
								currentReceiverProfilePhoto
							}
							currentReceiverChatID={currentReceiverChatID}
							senderChatID={senderChatID}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chatbox;
