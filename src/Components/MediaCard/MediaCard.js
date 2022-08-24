/*
import makeStyles from '@material-ui/styles/makeStyles';
import BookmarkBorderRounded from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRounded from '@mui/icons-material/BookmarkRounded';
import SendIcon from '@mui/icons-material/Send';
import VerifiedIcon from '@mui/icons-material/Verified';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
 arrayRemove,
 arrayUnion,
 doc,
 setDoc,
 updateDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import getLoggedInUser from '../../utils/getLoggedInUser/getLoggedInUser';
import db from '../Firebase/Firebase';
import './MediaCard.css';

// styles for the MediaCard Component
const useStyles = makeStyles(() => ({
 comment_section: {
 marginTop: 5,
 marginBottom: 50,
 },
 textfield: {
 width: 270,
 float: 'left',
 height: 'auto',
 },
 comment_button: {
 float: 'right',
 marginTop: 10,
 },
 cardView: {
 minHeight: 400,
 width: '100%',
 },
}));

const MediaCard = ({ newsData, userBookMarks, setUserBookMarks }) => {
 // get the email address
 const [userEmail, setUserEmail] = useState(undefined);

 // get the classes
 const classes = useStyles();

 const fileURL = newsData.properties.file.url;

 const fileType = newsData.properties.file.type;

 const verifiedOrNot = newsData.properties.verified;

 const incidentId = newsData.properties.incident_id;

 const [comment, setComment] = useState('');

 const [commentArray, setCommentArray] = useState([]);

 const onChangeHandle = (e) => {
 setComment(e.target.value);
 };

 const onSubmitHandle = (e) => {
 e.preventDefault();
 setCommentArray(commentArray.concat(comment));
 setComment('');
 };

 const [bookmarkStatus, setBookmarkStatus] = useState(
 userBookMarks.includes(incidentId)
 );

 useEffect(() => {
 const user = getLoggedInUser();
 setUserEmail(user);
 }, []);

 // function to add bookMark in FireBase
 const addBookMarkOnFireBase = async () => {
 // create a document under Bookmarks for a user if not present
 // add the incident_id to the bookmarks list
 await setDoc(
 doc(db, 'BookMarks', userEmail),
 {
 bookmarks: arrayUnion(incidentId),
 },
 { merge: true }
 );

 // setUserBookMarks([...userBookMarks, incidentId]);
 };

 const removeBookMarkFromFireBase = async () => {
 // fetch a document under Bookmarks for a user if not present
 // remove the incident_id to the bookmarks list

 await updateDoc(doc(db, 'BookMarks', userEmail), {
 bookmarks: arrayRemove(incidentId),
 });

 // setUserBookMarks(userBookMarks.filter((y) => y !== incidentId));
 };

 const handleBookMarkIconButtonClick = () => {
 // user is not loggedIn so do not do anything
 if (userEmail === undefined) {
 // alert('User is not logged in');
 return;
 }

 // if the incident was previously not bookmarked
 if (bookmarkStatus === false) {
 // make a call on FireBase to add BookMark
 addBookMarkOnFireBase();
 }
 // if the incident was previously bookmarked
 else {
 // make a call on FireBase to remove the BookMark
 removeBookMarkFromFireBase();
 }

 // take the complement of the bookmarkStatus
 setBookmarkStatus(!bookmarkStatus);
 };

 return (
 <div style={{ display: 'flex', flexDirection: 'column',overflowY:'auto' }}>
 <Card variant='outlined' sx={{ maxWidth: 345 }}>
 {fileType === 'video' ? (
 <CardMedia
 component='video'
 className={classes.cardView}
 src={fileURL}
 controls
 />
 ) : (
 <CardMedia
 component='img'
 className={classes.cardView}
 image={fileURL}
 />
 )}
 <CardContent>
 <div className='card-bottom-style'>
 <h5>Event Title</h5>
 <div>
 {verifiedOrNot ? (
 <VerifiedIcon style={{ color: '#3446eb' }} />
 ) : (
 <VerifiedIcon style={{ color: '#e8c217' }} />
 )}
 &nbsp; &nbsp;
 {bookmarkStatus ? (
 <BookmarkRounded
 onClick={handleBookMarkIconButtonClick}
 />
 ) : (
 <BookmarkBorderRounded
 onClick={handleBookMarkIconButtonClick}
 />
 )}
 </div>
 </div>

 <Typography variant='body2' color='text.secondary'>
 Event Description
 </Typography>

 <br />

 <div className={classes.comment_section}>
 <TextField
 label='Comment'
 variant='outlined'
 placeholder='Comment Here please'
 className={classes.textfield}
 value={comment}
 onChange={onChangeHandle}
 />
 <IconButton
 className={classes.comment_button}
 onClick={onSubmitHandle}>
 <SendIcon />
 </IconButton>
 </div>
 </CardContent>
 </Card>

 {commentArray.map((text, index) => {
 return (
 <div
 style={{
 backgroundColor: 'white',
 padding: '5px 16px',
 borderRadius: '4px',
 }}>
 {text}
 </div>
 );
 })}
 </div>
 );
};

export default MediaCard;

*/
//----------------------------------------------------------------------------------------------------------

import makeStyles from '@material-ui/styles/makeStyles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkBorderRounded from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRounded from '@mui/icons-material/BookmarkRounded';
import SendIcon from '@mui/icons-material/Send';
import VerifiedIcon from '@mui/icons-material/Verified';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Message from '@mui/icons-material/Message';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
	arrayRemove,
	arrayUnion,
	doc,
	getDoc,
	setDoc,
	updateDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../Firebase/Firebase';
import './MediaCard.css';

// styles for the MediaCard Component
const useStyles = makeStyles(() => ({
	comment_section: {
		marginTop: 5,
		marginBottom: 50,
	},
	textfield: {
		width: 270,
		float: 'left',
		height: 'auto',
	},
	comment_button: {
		float: 'right',
		marginTop: 10,
	},
	cardView: {
		width: '100%',
	},
}));

const MediaCard = ({ newsData, userBookMarks, setUserBookMarks, props }) => {
	// get the email address
	const [userEmail, setUserEmail] = useState(undefined);

	// get the classes
	const classes = useStyles();

	const fileURL = newsData.properties.file.url;

	const fileType = newsData.properties.file.type;

	const verifiedOrNot = newsData.properties.verified;

	const incidentId = newsData.properties.incident_id;

	const incidentDescription = newsData.properties.text;

	const incidentCreationTime = newsData.properties.created;

	const incidentUser = newsData.properties.user;

	const [ht, setHt] = useState(0);
	const [heightMedia, setHeightMedia] = useState(400);
	const [comment, setComment] = useState('');

	const [commentArray, setCommentArray] = useState([]);

	const [loadComments, setLoadComments] = useState(false);

	const [hidden, setHidden] = useState(true);

	const [eventTitle, setEventTitle] = useState('Cake Cermony');

	const [timeStamp, setTimeStamp] = useState('2 minutes ago');

	const date = new Date();
	console.log(date.getMinutes() - 10);
	console.log(incidentUser);

	const onChangeHandle = (e) => {
		setComment(e.target.value);
	};

	const onCommentSubmitHandle = (e) => {
		e.preventDefault();
		if (comment === '') {
			alert('Comment cannot be empty');
			return;
		}

		addCommentOnFireBase(comment);

		setCommentArray([
			{ comment: comment, user: userEmail },
			...commentArray,
		]);
		setComment('');
	};

	const addCommentOnFireBase = async (commentValue) => {
		await setDoc(
			doc(db, 'Comments', incidentId),
			{
				comments: arrayUnion({
					comment: commentValue,
					user: userEmail,
				}),
			},
			{ merge: true }
		);
	};

	const [bookmarkStatus, setBookmarkStatus] = useState(
		userBookMarks.includes(incidentId)
	);

	useEffect(() => {
		// const user = getLoggedInUser();

		const auth = getAuth();

		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUserEmail(user.email);
			} else {
				setUserEmail(undefined);
			}
		});
	}, []);

	useEffect(() => {
		loadComments ? loadCommentsFromFireBase() : collapseHeight();
	}, [loadComments]);

	// function to add bookMark in FireBase
	const addBookMarkOnFireBase = async () => {
		// create a document under Bookmarks for a user if not present
		// add the incident_id to the bookmarks list
		await setDoc(
			doc(db, 'BookMarks', userEmail),
			{
				bookmarks: arrayUnion(incidentId),
			},
			{ merge: true }
		);

		// setUserBookMarks([...userBookMarks, incidentId]);
	};

	const removeBookMarkFromFireBase = async () => {
		// fetch a document under Bookmarks for a user if not present
		// remove the incident_id to the bookmarks list

		await updateDoc(doc(db, 'BookMarks', userEmail), {
			bookmarks: arrayRemove(incidentId),
		});

		// setUserBookMarks(userBookMarks.filter((y) => y !== incidentId));
	};

	const handleBookMarkIconButtonClick = () => {
		// user is not loggedIn so do not do anything
		if (userEmail === undefined) {
			// alert('User is not logged in');
			return;
		}

		// if the incident was previously not bookmarked
		if (bookmarkStatus === false) {
			// make a call on FireBase to add BookMark
			addBookMarkOnFireBase();
		}
		// if the incident was previously bookmarked
		else {
			// make a call on FireBase to remove the BookMark
			removeBookMarkFromFireBase();
		}

		// take the complement of the bookmarkStatus
		setBookmarkStatus(!bookmarkStatus);
	};

	// function to load comments for this specific incident
	const loadCommentsFromFireBase = async () => {
		const commentsDoc = await getDoc(doc(db, 'Comments', incidentId));

		if (!commentsDoc.exists()) {
			return;
		}

		// fetch the comments field from the doc
		const commentsFromFirebase = commentsDoc.data()['comments'];

		// console.log(commentsFromFirebase);

		if (commentsFromFirebase.length === 0) {
			alert('No previous comments to load');
			return;
		}

		// update the comments array
		setCommentArray(commentsFromFirebase.reverse());

		// setting the height of comment section
		setHt(400);

		//reducing the height of cardView to 0
		setHeightMedia(0);
	};

	console.log();

	const BasicCard = () => {
		return (
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography
						sx={{ fontSize: 14 }}
						color='text.secondary'
						gutterBottom>
						{fileURL}
					</Typography>
				</CardContent>
			</Card>
		);
	};

	const displayCard = (fileType, fileURL) => {
		if (fileType === 'text') {
			return BasicCard();
		} else if (fileType === 'video') {
			return (
				<CardMedia
					component='video'
					className={classes.cardView}
					src={fileURL}
					controls
					style={{ height: `${heightMedia}px`, transition: 'all 1s' }}
				/>
			);
		} else if (fileType === 'audio') {
			return <CardMedia component='audio' src={fileURL} controls />;
		} else if (fileType === 'image') {
			return (
				<CardMedia
					component='img'
					className={classes.cardView}
					image={fileURL}
					style={{ height: `${heightMedia}px`, transition: 'all 1s' }}
				/>
			);
		}
	};
	const collapseHeight = () => {
		setHt(0);
		//reducing the height of cardView to 0
		setHeightMedia(400);
	};

	const auth = getAuth();
	const [loggedIn, setLoggedIN] = useState(false);
	const [loggedInUserEmail, setLoggedINUserEmail] = useState('');

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setLoggedIN(true);
				setLoggedINUserEmail(user.email);
				// ...
			} else {
				setLoggedIN(false);
				setLoggedINUserEmail('');
			}
		});
	}, [auth]);

	const getChatRoomID = () => {
		// const currentUser = db.auth().currentUser;
		const chatRoomID = incidentUser + '-' + loggedInUserEmail;

		return chatRoomID;

	}
	const chatRoomID = getChatRoomID();
	console.log(chatRoomID);

	return (
		<>
			<Card variant='outlined' sx={{ maxWidth: 345 }}>
				{displayCard(fileType, fileURL)}

				<CardContent>
					<div className='card-bottom-style'>
						{/* <span className='event-title'>{eventTitle}</span> */}
						<span className='time-stamp'>
							{incidentCreationTime.toString()}
						</span>
						<div>
							{verifiedOrNot ? (
								<VerifiedIcon style={{ color: '#3446eb' }} />
							) : (
								<VerifiedIcon style={{ color: '#e8c217' }} />
							)}
							&nbsp; &nbsp;
							{bookmarkStatus ? (
								<BookmarkRounded
									onClick={handleBookMarkIconButtonClick}
								/>
							) : (
								<BookmarkBorderRounded
									onClick={handleBookMarkIconButtonClick}
								/>
							)}
						</div>
					</div>

					<div>
						<Link to="/chat" state={{ from: chatRoomID , incidentEmail : incidentUser}}>
						Chat Here
					</Link>
					</div>

					{console.log(hidden)}
					<div>
						<div
							onClick={() => setHidden(!hidden)}
							className={`event-description ${
								hidden ? 'collapse-height' : 'expand-height'
							} `}>
							{incidentDescription}
						</div>
						<span
							className='event-description-controller'
							onClick={() => setHidden(!hidden)}>
							{hidden ? 'Show more...' : 'Show less ...'}
						</span>
					</div>
					
					<div className={classes.comment_section}>
						{/* adding Enter key feature to comment */}
						<TextField
							onKeyDown={(e) =>
								e.key === 'Enter'
									? onCommentSubmitHandle(e)
									: ''
							}
							label='Comment'
							variant='outlined'
							placeholder='Comment Here please'
							className={classes.textfield}
							value={comment}
							onChange={onChangeHandle}
						/>
						<IconButton
							className={classes.comment_button}
							onClick={onCommentSubmitHandle}>
							<SendIcon />
						</IconButton>
					</div>
				</CardContent>

				<div className='comment-display' style={{ height: `${ht}px` }}>
					{commentArray.map((comment, index) => {
						return (
							<div key={index} className='comment-style'>
								<div className='comment-data'>
									<div className='comment-info'>
										<AccountCircleIcon className='icon' />{' '}
										<span>{comment.user }</span>{' '}

										<Link
											state={{ name: comment.user }}
											to='/thread'
											style={{
												textDecorationLine: 'none',
											}}>
											<Message
												className='icon'
												style={{
													position: 'absolute',
													fontSize: 24,
													alignSelf: 'flex-end',
													right: 10,
												}}
											/>
										</Link>
									</div>
									<div className='actual-comment'>
										{comment.comment}
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div
					className='bottom-bar comment-btn'
					onClick={() => {
						setLoadComments(!loadComments);
					}}>
					{!loadComments ? (
						<span style={{ fontSize: 14 }}>Load Comments</span>
					) : (
						<span style={{ fontSize: 14 }}>Hide Comments</span>
					)}
				</div>
			</Card>
		</>
	);
};

export default MediaCard;
