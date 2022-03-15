import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import getLoggedInUser from '../../utils/getLoggedInUser/getLoggedInUser';
import db from '../Firebase/Firebase';
import MediaCard from '../MediaCard/MediaCard';
const LifeSave = () => {
	// state to store the data of incidents after fetching data from FireBase
	const [bookMarkedIncidents, setBookMarkedIncidents] = useState([]);

	// state to store email address of the logged in user
	const [userEmail, setUserEmail] = useState(undefined);

	// store the book marks of the user in this state variable
	const [userBookMarks, setUserBookMarks] = useState([]);

	console.count('Rendered Gallery');

	useEffect(() => {
		Aos.init({
			duration: 2000,
		});
	}, []);

	useEffect(() => {
		const user = getLoggedInUser();
		alert(user);
		setUserEmail(user);
	}, []);

	useEffect(() => {
		const getUserBookMarksData = async (db) => {
			if (userEmail === undefined) return;

			const userBookmarkDocumentRef = doc(db, 'BookMarks', userEmail);

			const data = await getDoc(userBookmarkDocumentRef);

			setUserBookMarks(data.data()['bookmarks']);
		};

		// call the function to fetch incidents bookmarks data
		getUserBookMarksData(db);
	}, [userEmail]);

	useEffect(() => {
		const getBookMarkedIncidentsDataFromFireStore = async (db) => {
			if (userBookMarks.length === 0) return;

			const bookMarkedIncidents = await Promise.all(
				userBookMarks.map(async (bookmarkId) => {
					const bookmarkedIncidents = await getDoc(
						doc(db, 'Explore', bookmarkId)
					);
					return bookmarkedIncidents;
				})
			);

			// iterate all the documents and fetch it's data
			const bookmarkedIncidentsListData = bookMarkedIncidents.map(
				(doc) => {
					// fetch the data of the document
					const data = doc.data();

					// add the incident_id field with document id
					data.properties.incident_id = doc.id;

					return data;
				}
			);

			// for each incident add month field in it's property
			const finalBookMarkedIncidentsListData =
				bookmarkedIncidentsListData.map((incident) => {
					const date = new Date(incident.properties.created);

					incident.properties.month = date.getMonth();

					return incident;
				});

			// update the incidents set with the incidents data
			setBookMarkedIncidents(finalBookMarkedIncidentsListData);
		};

		// call the function to fetch incidents data
		getBookMarkedIncidentsDataFromFireStore(db);
	}, [userBookMarks]);

	const singleIncident = (bookMarkedIncident) => {
		return (
			<MediaCard
				newsData={bookMarkedIncident}
				userBookMarks={userBookMarks}
				setUserBookMarks={setUserBookMarks}
			/>
		);
	};

	const savedIncidents = () => {
		return (
			<Box>
				<Grid container rowSpacing={5} columnSpacing={5} columns={20}>
					{bookMarkedIncidents.map((bookMarkedIncident) => {
						return (
							<Grid item xs={15} md={10} xl={10} lg={6}>
								{singleIncident(bookMarkedIncident)}
							</Grid>
						);
					})}
				</Grid>
			</Box>
		);
	};

	return (
		<div className='lifeSave'>
			<h4>Empowering. Supporting. Connecting.</h4>
			<h1 data-aos='zoom-in-up'>
				Trusted by citizen journalists, used by the world.
			</h1>
			{savedIncidents()}
		</div>
	);
};

export default LifeSave;
