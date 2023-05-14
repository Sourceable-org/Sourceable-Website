import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton, ListSubheader } from '@mui/material';
import MediaCard from '../MediaCard/MediaCard.js';
import './NewsList.css';
const NewsList = ({
	newsListData,
	setNewsListData,
	userBookMarks,
	setUserBookMarks,
}) => {

	newsListData.sort((a,b)=> new Date(b.properties.created).getTime()- new Date(a.properties.created).getTime());

	console.log("news",new Date(newsListData[0].properties.created).getTime())
	// function that is executed for all rows of the lists
	const renderRow = ({ index, style }) => {
		// index is the current row number
		// style is for inline styling of the row elements of the list
		return (
			// <ListItem key={index} style={style} component='div'>

			// 	{/* <MediaCard	
			// 		newsData={newsListData[index]}
			// 		userBookMarks={userBookMarks}
			// 		setUserBookMarks={setUserBookMarks}
			// 	/> */}
			//
			// </ListItem>

			<div>hii</div>
		);
	};

	// function to close the list
	const closeList = () => {
		// sets the newsListData array to empty
		setNewsListData([]);
	};

	return (
		<div className='news-List'>
			{/* <ListSubheader component='div'>
				<IconButton onClick={closeList}>
					<CancelIcon />
				</IconButton>
			</ListSubheader> */}
			{newsListData.length > 0
				? newsListData.map((newsData, index) => {
						return (
							<MediaCard
								newsData={newsListData[index]}
								userBookMarks={userBookMarks}
								setUserBookMarks={setUserBookMarks}
							/>
						);
				  })
				: 'No Audio or Videos yet!!'}
		</div>
	);
};

export default NewsList;

//----------------------------------------NEW CODE__________________________________________________

// import CancelIcon from '@mui/icons-material/Cancel';
// import { IconButton, ListSubheader } from '@mui/material';
// import ListItem from '@mui/material/ListItem';
// import { FixedSizeList } from 'react-window';
// import MediaCard from '../MediaCard/MediaCard.js';

// const NewsList = ({
// 	newsListData,
// 	setNewsListData,
// 	userBookMarks,
// 	setUserBookMarks,
// }) => {
// 	// function that is executed for all rows of the lists
// 	const renderRow = ({ index, style }) => {
// 		// index is the current row number
// 		// style is for inline styling of the row elements of the list
// 		return (
// 			<ListItem key={index} style={style} component='div'>
// 				<MediaCard
// 					newsData={newsListData[index]}
// 					userBookMarks={userBookMarks}
// 					setUserBookMarks={setUserBookMarks}
// 				/>
// 			</ListItem>
// 		);
// 	};

// 	// function to close the list
// 	const closeList = () => {
// 		// sets the newsListData array to empty
// 		setNewsListData([]);
// 	};

// 	return (
// 		<>
// 			{/* <ListSubheader component='div' style={{ marginLeft: '4%' }}>
// 				<IconButton onClick={closeList}>
// 					<CancelIcon />
// 				</IconButton>
// 			</ListSubheader>
// 			<FixedSizeList
// 				height={400}
// 				width={400}
// 				itemSize={375}
// 				itemCount={newsListData.length}>
// 				{renderRow}
// 			</FixedSizeList> */}

// {/*
// 	const fileURL = newsData.properties.file.url;

// 	const fileType = newsData.properties.file.type;

// 	const verifiedOrNot = newsData.properties.verified;

// 	const incidentId = newsData.properties.incident_id; */}

// 			{
// 				newsListData.length > 0? (
// 					newsListData.map((newsData,index)=>{
// 						<div>
// 							<img src={newsData.properties.file.url} alt="Not loaded" />
// 							<p>{newsData.properties.verified}</p>
// 						</div>
// 					})
// 				):null
// 			}

// 		</>
// 	);
// };

// export default NewsList;
