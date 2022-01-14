import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MediaCard = () => {
	const VIDEO_URL =
		'https://cerosetenta.uniandes.edu.co/especiales/violencia-policial/videos/_0610.mp4';

	return (
		<Card variant='outlined' sx={{ maxWidth: 500, maxHeight: 500 }}>
			<CardMedia
				component='video'
				src={VIDEO_URL}
				controls
				autoPlay={true}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Lizard
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Lizards are a widespread group of reptiles, with
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MediaCard;
