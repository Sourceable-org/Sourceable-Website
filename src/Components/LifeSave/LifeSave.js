import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import MediaCard from '../MediaCard/MediaCard';
// import './LifeSave.css';

const LifeSave = () => {
	useEffect(() => {
		Aos.init({
			duration: 2000,
		});
	}, []);

	const singleIncident = () => {
		const x = {
			properties: {
				file: {
					type: 'photo',
					url: 'https://www.aljazeera.com/wp-content/uploads/2022/03/2022-02-28T224932Z_2124976744_RC22TS9B30SD_RTRMADP_3_UKRAINE-CRISIS.jpg?quality=80&resize=1170%2C780',
				},
				verified: true,
			},
		};

		return (
			<MediaCard newsData={x} />

			// <div class='Box'>
			// 	<img
			// 		src={Family}
			// 		alt='Avatar'
			// 		class='image'
			// 		width={300}
			// 		height={300}
			// 	/>
			// 	<div class='overlay'>
			// 		<div class='text'>
			// 			The Entire Building on Fire in Syria-Turkey
			// 		</div>
			// 	</div>
			// </div>
		);
	};

	const savedIncidents = () => {
		return (
			<Box>
				<Grid container rowSpacing={5} columnSpacing={5} columns={20}>
					{Array.from(Array(30).keys()).map(() => {
						return (
							<Grid item xs={15} md={10} xl={10} lg={6}>
								{singleIncident()}
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
