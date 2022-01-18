import React from 'react';
import './Banner.css';

import APPSTORE from '../../images/app store.png';
import PLAYSTORE from '../../images/play store.png';
import Vid from '../../video/sourceable-video_final.mp4';
import Source_logo from '../../images/image_logo_small_bcgless.png';

const Banner = () => {
	return (
		<div className='homePage'>
			<div className='first'>
				<div className='part1-left'>
					<img src={Source_logo} alt='Logo not loaded' />
					<p>
						Empowering, supporting, and connecting citizen
						journalists to share and protect their stories.
					</p>
					<b> DOWNLOAD SECURITY</b>
					<div>
						<img src={APPSTORE} alt='APP STORE' />
						<img src={PLAYSTORE} alt='PLAY STORE' />
					</div>
				</div>
				<div className='part1-right'>
					{/* react-video-js-player */}
					<video
						style={{
							width: '100%',
							height: '100%',
							position: 'relative',
							top: '10%',
						}}
						autoplay=''
						loop
						muted>
						<source src={Vid} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</div>
	);
};

export default Banner;
