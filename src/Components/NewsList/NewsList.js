import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton, ListSubheader } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { FixedSizeList } from 'react-window';
import MediaCard from '../MediaCard/MediaCard.js';

const NewsList = ({ newsListData, setNewsListData }) => {
	const renderRow = ({ index, style }) => {
		return (
			<ListItem key={index} style={style} component='div'>
				<MediaCard />
			</ListItem>
		);
	};

	const closeList = () => {
		setNewsListData([]);
	};

	return (
		<>
			<ListSubheader component='div' style={{ marginLeft: '4%' }}>
				<IconButton onClick={closeList}>
					<CancelIcon />
				</IconButton>
			</ListSubheader>
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
