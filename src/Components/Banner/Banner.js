import React from 'react';
import './Banner.css';

import APPSTORE from '../../images/app store.png';
import PLAYSTORE from '../../images/play store.png';
import Vid from '../../video/sourceable-video_final.mp4';
import Source_logo from '../../images/Capture.JPG';
import image1 from '../../images/image1.webp';
import image2 from '../../images/image2.webp';
import image3 from '../../images/image3.webp';

function Rectangle() {
	return (
	  <svg width="200" height="200">
		<rect x="50" y="50" width="100" height="100" fill="blue" />
	  </svg>
	);
  }

const Banner = () => {
	return (
		
		<div className='homePage'>
			<div style={{ display: 'flex', flexDirection: 'row'}}>
				<div className='first'>
					<div className='part1-left'>
						{/* <img src={Source_logo} alt='Logo not loaded' /> */}
						<br></br>
						<p>

						<svg preserveAspectRatio="xMidYMid meet" data-bbox="34.672 26.751 130.709 146.357" viewBox="34.672 26.751 130.709 146.357" height="500" width="500" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation"
						aria-hidden="true"
						aria-labelledby="svgcid-35s3un-dqjqa6"
						style={{
							marginTop:"-70px"
						}}
						>
						<g>
						<path d="M50 154.8c-16-19.3-15.4-43.7-15.3-50 .6-26 13.8-64.1 45.9-75.1 35.8-12.2 78.3 15.2 84.1 50 5.2 31.1-20.8 56.9-30.6 66.7-7.3 7.3-33.6 33.6-61.2 25-12-3.6-19.6-12.6-22.9-16.6z" 
						fill="#b8ccf4"
						data-color="1"
						></path>
						</g>	
						<foreignObject x="20" y="50" width="110" height="150">
							<div>
							<h1 
							style={
								{
									fontSize:"12px",
									marginLeft:"35px",
									textDecoration:"bold",
									fontWeight:"bold",
									fontFamily:"Arial black",
									textAlign:"left"
								}
							}>
							Trusted by citizen journalists, used by the world.
						</h1>
						<p 
						style={{
							fontSize:"5px",
							marginLeft:"40px",
							textDecoration:"bold",
							fontWeight:"bold",
							textAlign:"left",
							marginTop:"-3px"
						}}
						>Empower • Support • Connect</p>
						

							</div>
							
						</foreignObject>
						</svg>
						</p>
						
					</div>
					
				</div>
				<div style={{ display: 'flex', flexWrap: 'wrap', paddingTop:"100px" , paddingLeft:"300px"}}>
					<div style={{ display: 'flex', flexDirection: 'row'}}>
						<div style={{display: 'flex', flexDirection: 'column'}}>
							<img src={image2} alt="Image 3" style={{ width: '200px', height: '200px', margin: '10px' }} />
							<img src={image1} alt="Image 1" style={{ width: '200px', height: '200px', margin: '10px' }} />
						</div>
						
						<div style={{ }}></div>
							<img src={image3} alt="Image 3" style={{ width: '300px', height: '410px', margin: '10px' }} />
						</div>
					</div>
					
				</div>
		</div>
	);
};

export default Banner;