import { ListItemText, ListSubheader } from '@mui/material';
import MediaCard from '../MediaCard/MediaCard.js';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { FixedSizeList } from 'react-window';
import { display } from '@mui/system';

const NewsList = ({ newsListData, setNewsListData }) => {
	const renderRow = ({ index, style }) => {
		return (
			<ListItem key={index} style={style} component='div'>
				<MediaCard />
			</ListItem>
		);
	};

	return (
		<>
			<FixedSizeList
				height={400}
				width={400}
				itemSize={375}
				itemCount={newsListData.length}>
				{renderRow}
			</FixedSizeList>
		</>
	);
};

export default NewsList;
