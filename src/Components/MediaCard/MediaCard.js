import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	comment_section: {
		marginTop: 5,
		marginBottom: 50,
	},
	textfield: {
		width: 300,
		float: 'left',
		height: 'auto',
	},
	comment_button: {
		float: 'right',
		marginTop: 10,
	},
}));

const MediaCard = () => {
	const VIDEO_URL =
		'https://cerosetenta.uniandes.edu.co/especiales/violencia-policial/videos/_0610.mp4';

	const classes = useStyles();

	return (
		<Card variant='outlined' sx={{ maxWidth: 500, maxHeight: 500 }}>
			<CardMedia component='video' src={VIDEO_URL} controls />
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
						multiline={true}
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
