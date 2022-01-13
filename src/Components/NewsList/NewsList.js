import { ListSubheader } from '@mui/material';
import List from '@mui/material/List';
import MediaCard from '../MediaCard/MediaCard.js';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';

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
				{newsListData.map((sectionId, index) => (
					<li key={index}>
						<ul>
							<MediaCard />
						</ul>
					</li>
				))}
			</List>
		</>
	);
};

export default NewsList;
