import React, { useEffect } from 'react';
import './Feature.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

import Live from '../../images/Live-unscreen.gif';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BoltIcon from '@mui/icons-material/Bolt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Vid from '../../video/Video 2.mp4';

import Sup0 from '../../images/sup_1.png';
import Sup2 from '../../images/sup_2.png';
import Sup3 from '../../images/sup_3.png';
import Sup4 from '../../images/sup_4.png';

const Features = () => {
	useEffect(() => {
		Aos.init({
			duration: 500,
		});
	}, []);

	return (
		<div className='containerFeature'>
			<div className='above'>
				<div>
					<div className='first'>
						<div>
							<img src={Live} alt='Live Not loaded' />
							<h1>Know the real story faster.</h1>
						</div>
					</div>
					<div className='second'>
						<div className='left'>
							<video
								style={{ width: '90%', height: '70%' }}
								autoplay=''
								loop
								muted>
								<source src={Vid} type='video/mp4' />
								Your browser does not support the video tag.
							</video>
						</div>
						<div className='right'>
							<div>
								<div
									data-aos='zoom-in-up'
									className='box-item-right'>
									<div>
										<LiveTvIcon
											color='secondary'
											sx={{ fontSize: 40 }}
										/>
										<h5>
											See incidents unfold and get the
											real story from people on the scene.
										</h5>
									</div>
									<p>
										Live videos show you what’s really
										happening. Watch incidents unfold from
										different angles and follow along until
										they get resolved.
									</p>
								</div>
								<div
									data-aos='zoom-in-up'
									className='box-item-right'>
									<div>
										<BoltIcon
											color='success'
											sx={{ fontSize: 40 }}
										/>
										<h5>
											Fast, accurate information makes a
											meaningful difference in
											emergencies.
										</h5>
									</div>
									<p>
										Citizen alerts go out instantly — this
										can be hours before Amber Alerts are
										even issued for children in danger. This
										speed has been critical in acting on
										important events like abductions and
										missing elderly people.
									</p>
								</div>
								<div
									data-aos='zoom-in-up'
									className='box-item-right'>
									<div>
										<PeopleAltIcon
											color='primary'
											sx={{ fontSize: 40 }}
										/>
										<h5 id='lasth5'>
											When you can, contribute to help
											resolve a situation.
										</h5>
									</div>
									<p>
										You used to have to call a police tip
										line to help. Now you can use Citizen to
										broadcast live video, sharing relevant
										updates with others. You can also leave
										comments, which have helped locate
										missing people and share information
										about evacuation centers during natural
										disasters.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='extra'>
						<div className='extra_1'>
							<h1>Our Pilot Project</h1>
							<p>
								Sourceable is partnering with MedGlobal, the
								Accuracy Press Institute, and the Syrian
								American Council to conduct a 6-month pilot
								project in northern Syria. During this period,
								20 pilot users near or around the Bab al-Hawa
								border crossing from May 2022 to November 2022
								will utilize the Sourceable application and
								provide data relevant to the humanitarian
								situation on the ground. The information
								collected will serve two functions: first, it
								will provide Sourceable with insight into its
								platform’s usability, effectiveness, and
								dependability; and second, it will support the
								Syrian community’s advocacy efforts to secure a
								6-month reauthorization vote for Bab al-Hawa
								from the UNSC in July 2022. During these six
								months, Sourceable will provide access to our
								site to targeted media, advocacy groups, and
								human rights professionals.
							</p>
						</div>
						<div className='extra_2'>
							<h1>Our Partners and Supporters</h1>
							<div>
								<img src={Sup2} alt='Sup2 not loaded' />
								<img src={Sup3} alt='Sup3 not loaded' />
								<img src={Sup4} alt='Sup4 not loaded' />
								<img src={Sup0} alt='Sup1 not loaded' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
