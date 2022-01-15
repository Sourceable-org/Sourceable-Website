import { ListSubheader } from '@mui/material';
import List from '@mui/material/List';
import MediaCard from '../MediaCard/MediaCard.js';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import ListItem from '@mui/material/ListItem';
// import { FixedSizeList as List } from 'react-window';

const NewsList = ({ newsListData, setNewsListData }) => {
	const closeList = () => {
		setNewsListData([]);
	};

	return (
		<>
			<List
				sx={{
					width: '100%',
					maxWidth: 400,
					bgcolor: 'background.paper',
					position: 'relative',
					overflow: 'auto',
					maxHeight: 500,
					'& ul': { padding: 0 },
				}}>
				<ListSubheader>
					<div>
						<div>
							<IconButton onClick={closeList}>
								<CancelIcon />
							</IconButton>
						</div>
					</div>
				</ListSubheader>
				{newsListData.map((element, index) => (
					<ListItem key={index}>
						<MediaCard />
					</ListItem>
				))}
			</List>
		</>
	);
};

export default NewsList;
