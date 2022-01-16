import makeStyles from '@material-ui/styles/makeStyles';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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
}));

const MediaCard = ({ newsData }) => {
	// get the classes
	const classes = useStyles();

	const fileURL = newsData['file']['url'];
	const fileType = newsData['file']['type'];

	return (
		<Card variant='outlined' sx={{ maxWidth: 400, maxHeight: 400 }}>
			{fileType === 'video' ? (
				<CardMedia component='video' src={fileURL} controls />
			) : (
				<CardMedia component='img' image={fileURL} />
			)}
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Event Title
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'
					multiline={true}>
					Event Description
				</Typography>
				<br />
				<div className={classes.comment_section}>
					<TextField
						label='Comment'
						variant='outlined'
						placeholder='Comment Here'
						className={classes.textfield}
					/>
					<IconButton className={classes.comment_button}>
						<SendIcon />
					</IconButton>
				</div>
			</CardContent>
		</Card>
	);
};

export default MediaCard;
