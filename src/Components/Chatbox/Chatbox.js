import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';

import {
	addDoc,
	collection,
	doc,
	increment,
	onSnapshot,
	orderBy,
	query,
	setDoc,
	Timestamp,
	where,
} from 'firebase/firestore';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import React, { useCallback, useEffect, useState } from 'react';
import CHATLAUNCH from '../../images/chat_first.png';
import { db } from '../Firebase/Firebase';
import './Chatbox.css';
import ReactGA from "react-ga4";

// const FieldValue = require('firebase-admin').firestore.FieldValue;
const ChatRoom = ({
	currentReceiverName,
	currentReceiverStatus,
	currentReceiverChatID,
	senderEmail,
}) => {
	// state to store messages of the chatRoom
	const [messages, setMessages] = useState([]);
	//current message
	const [currentMessage, setCurrentMesssage] = useState('');
	const [currentTime, setCurrentTime] = useState('');

	const location = useLocation();
	// console.log("LOCCC",location.state);
	// const { from } = location.state;

	console.log("from routes2 --- ");
	// function to get the chatRoom ID on the basis of sender and receiver user id
	const getChatRoomID = () => {
		console.log("aaaa");
		const usersID = [];
		// push the IDS of the sender and receiver
		usersID.push(currentReceiverChatID);
		usersID.push(senderEmail);

		// sort the userIDs array
		usersID.sort();

		// get the chatRoomID for the given users
		const chatRoomID = usersID[0] + '-' + usersID[1];

		// return the chatRoomID
		return chatRoomID;
	};

	
	// get the chatRoomID for the sender and the receiver
	// const chatRoomID = getChatRoomID;
	const chatRoomID = currentReceiverChatID+"-"+senderEmail;
	useEffect(() => {
		
		console.log("from routes",chatRoomID);
		// make the ChatRoom Query
		console.log("chatbox here");
		const chatRoomQuery = query(
			collection(db, 'chatrooms', chatRoomID, 'messages'),
			orderBy('createdAt')
		);

		const realTimeChatRoomMessagesListener = onSnapshot(
			chatRoomQuery,
			(snapshot) => {
				const newMessages = [...messages];
				snapshot.docs.map((change) => {
					// get the data about the message
					const messageData = change.data();

					// if the senderChatID and uid of the composer of the message is equal
					// then set key to 0
					if (messageData['sentBy'] === senderEmail) {
						messageData['key'] = 0;
					}
					// if unequal then set key to 1
					else {
						messageData['key'] = 1;
					}

					// append the messages into newMessage
					newMessages.push(messageData);
				});

				// update the messages state variable
				setMessages(newMessages);
			}
		);

		return () => {
			realTimeChatRoomMessagesListener();
		};
	}, [currentReceiverChatID, chatRoomID]);

	// function to add a new message into the chatroom
	const addMessage = () => {
		const currentMessageToAdd = {
			_id: new Date().getTime(),
			text: currentMessage,
			sentTo: currentReceiverChatID,
			sentBy: senderEmail,
			createdAt: Timestamp.fromDate(new Date()),
			user: {
				_id: senderEmail,
			},
		};

		// Add the message and store it in the chatRoom messages collection
		addDoc(
			collection(db, 'chatrooms', chatRoomID, 'messages'),
			currentMessageToAdd
		);

		// create the notification Id from the emails of both the users
		const notificationId = senderEmail + '-' + currentReceiverChatID;

		// add the details about the notifications into the FireBase
		setDoc(
			doc(db, 'Notification', notificationId),
			{
				count: increment(1),
				from: senderEmail,
				to: currentReceiverChatID,
			},
			{ merge: true }
		);

		// reset the message input box to empty string
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

	return (
		<div className='chat'>
			<div className='chat-header clearfix'>
				<div className='row'>
					<div className='col-lg-6'>
						<a
							href='#'
							data-toggle='modal'
							data-target='#view_info'>
							{/* <img
 src={currentReceiverProfilePhoto}
 alt='avatar'
 /> */}
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
				<div className='flex-row'>
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

	// to store the details of the email of the sender
	const [senderEmail, setSenderEmail] = useState('');

	// state to store the chatUsers
	const [chatUsers, setChatUsers] = useState([]);

	// state to maintain if chat is user loaded or not
	const [chatUserLoaded, setChatUsersLoaded] = useState(false);

	// state to store the notifications
	const [notifications, setNotifications] = useState([]);

	// state to maintain if notifications data is loaded or not
	const [notificationLoaded, setNotificationLoaded] = useState(false);

	// change the state variables when profile of a user is clicked
	const profileButtonClick = (name, status, uid) => {
		console.log('Clicked on another user');
		setCurrentReceiverName(name);
		setCurrentReceiverStatus(status);
		setCurrentReceiverChatID(uid);
	};

	// create FireBase auth object
	const auth = getAuth();

	// run the useEffect to get the uid of the loggedIn user
	useEffect(() => {
		// after successful user login
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// update the state of the senderEmail
				setSenderEmail(user.email);
			}
		});
	}, []);

	useEffect(()=>{
		// ReactGA.pageview("window.location.pathname + window.location.search")
		// ReactGA.send({ hitType: "pageview", page: "/explore" });
		ReactGA.event({
			category: "Sourceable | Chat",
			action: "Sourceable | Chat",
			// label: "your label", // optional
			// value: 99, // optional, must be a number
			nonInteraction: true, // optional, true/false
			// transport: "xhr", // optional, beacon/xhr/image
		  });

	},[]);

	useEffect(() => {
		// if the current receiver is empty then do nothing
		if (currentReceiverChatID === '') return;

		// create the notification Id from the emails of both the users
		const notificationId = currentReceiverChatID + '-' + senderEmail;

		// set notification counter to 0 when user clicks on the receiver profile
		setDoc(
			doc(db, 'Notification', notificationId),
			{
				count: 0,
				from: currentReceiverChatID,
				to: senderEmail,
			},
			{ merge: true }
		);
	}, [currentReceiverChatID]);

	useEffect(() => {
		// if senderEmail is not yet fetched then do not make API CALL
		if (senderEmail === '') return;

		// make a query to fetch all the users from the FireBase Backend
		const accountsQuery = query(collection(db, 'Account'));

		// function to fetch realtime data about accounts
		const realTimeAccountListener = onSnapshot(
			accountsQuery,
			(snapshot) => {
				const newChatUsers = [...chatUsers];

				snapshot.docs.forEach((change) => {
					const singleChatUserData = change.data();

					// if the status is string then set the value to online
					if (typeof singleChatUserData.status === 'string') {
						singleChatUserData.status = 'online';
					}
					// if the status is timestamp type then get the DateObject
					// indicates the user is offline currently and we will display the last seen
					else {
						singleChatUserData.status = singleChatUserData.status
							.toDate()
							.toLocaleString();
					}

					// append the data of the new chat user
					newChatUsers.push(singleChatUserData);
				});

				// keep all the chat users except the loggedInUser
				const chatUsersFromFireBaseWithoutLoggedInUser =
					newChatUsers.filter(
						(element) => element.email !== senderEmail
					);

				// chat users are set to true
				setChatUsersLoaded(true);
				// update the chatUsers state variable
				setChatUsers(chatUsersFromFireBaseWithoutLoggedInUser);
			}
		);

		// make a query to fetch all the notifications
		const notificationsQuery = query(
			collection(db, 'Notification'),
			where('to', '==', senderEmail)
		);

		// function to fetch realtime data about notifications
		const realTimeNotificationListener = onSnapshot(
			notificationsQuery,
			(snapshot) => {
				const newNotifications = [...notifications];

				snapshot.docs.forEach((change) => {
					// append the data of the new notification
					newNotifications.push(change.data());
				});

				// set notifications are set to true
				setNotificationLoaded(true);

				// update the state of notifications
				setNotifications(newNotifications);
			}
		);

		return () => {
			realTimeAccountListener();
			realTimeNotificationListener();
		};

		// update the state of chatUsers
	}, [senderEmail]);

	// fetch the value of notification
	const getNotificationValue = (email) => {
		// filter the notification object based upon the receiver email
		const receiverNotificationObject = notifications.filter(
			(notification) => notification.from === email
		);

		// if object not existed then return 0
		if (receiverNotificationObject.length === 0) {
			return 0;
		}

		// return the notification count from the sender
		return receiverNotificationObject[0]['count'];
	};

	const displayChats = () => {
		// if chatUsers are present and notifications are present
		if (chatUsers.length > 0 && notificationLoaded === true) {
			return (
				<>
					{/* iterate chatUsers and display their data */}
					{chatUsers.map(({ name, status, email }) => (
						<li
							className='clearfix'
							onClick={() =>
								profileButtonClick(name, status, email)
							}>
							{/* <img src={pic} alt='avatar' /> */}
							<div className='about'>
								<span>
									<i
										className='fa fa-user icon'
										style={{
											color: `#${Math.floor(
												Math.random() * 1000000
											)}`,
										}}></i>
								</span>
								<span className='name'>{name}</span>
								<div className='notification_counter'>
									{getNotificationValue(email) !== 0
										? getNotificationValue(email)
										: ''}
								</div>
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
				</>
			);
		}

		return null;
	};

	// this function will show either image when currentReceiverChatID is empty
	// else it will show chat messages of the particular chat room
	const displayChatLaunchWindow = () => {
		// if currentReceiverChatID is not empty
		if (currentReceiverChatID !== '') {
			return (
				<>
				<Helmet>
        <title>Sourceable | Chat</title>
      </Helmet>
					{/* iterate all chatUsers and display the ChatRoom for the
 selected receiver email */}
					{chatUsers.map(({ name, status, email }) => {
						// if receiver email is equal to email in the chat users array
						if (email === currentReceiverChatID) {
							// display the ChatRoom component for that selected current receiver email address
							return (
								<ChatRoom
									currentReceiverName={name}
									currentReceiverStatus={status}
									currentReceiverChatID={email}
									senderEmail={senderEmail}
								/>
							);
						}
						// if it does not match then do not render anything
						else {
							return null;
						}
					})}
				</>
			);
		}

		// if the current receiver email is empty then show a background image
		// similar to whatsapp Desktop or whatsapp Web
		else {
			return (
				<img
					className='chat-launch-background'
					src={CHATLAUNCH}
					alt='Chat'
				/>
			);
		}
	};

	// const auth = getAuth();
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
		<div className='container-chat-box'>
			
			{/* <div className="row clearfix"> */}
			{/* <div className="col-lg-12"> */}
			<div className='card chat-app'>
			<Helmet>
        <title>Sourceable | Chat</title>
      </Helmet>
				<div id='plist' className='people-list'>
					<div className='input-group mb-0'></div>
					<ul className='list-unstyled chat-list mt-2 mb-0'>
						{displayChats()}
					</ul>
				</div>
				{/* function to show the chat Launch window */}
				{displayChatLaunchWindow()}
			</div>
			{/* </div> */}
		</div>
		// </div>
	);
};

export default Chatbox;
