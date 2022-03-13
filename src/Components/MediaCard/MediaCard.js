import makeStyles from '@material-ui/styles/makeStyles';
import SendIcon from '@mui/icons-material/Send';
import VerifiedIcon from '@mui/icons-material/Verified';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import bookmark from '../../images/bookmark.png';
import saveInsta from '../../images/save-instagram.png';
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

const MediaCard = ({ newsData }) => {
	// get the classes
	const classes = useStyles();

	const fileURL = newsData.properties.file.url;

	const fileType = newsData.properties.file.type;

	const verifiedOrNot = newsData.properties.verified;

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

	const [withoutSave, setWithSave] = useState(true);

	const changeIcon = () => {
		setWithSave(!withoutSave);
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
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
							{withoutSave ? (
								<img
									src={saveInsta}
									alt='Verify not loaded'
									width={30}
									onClick={changeIcon}
								/>
							) : (
								<img
									src={bookmark}
									alt='Verify not loaded'
									width={30}
									onClick={changeIcon}
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
