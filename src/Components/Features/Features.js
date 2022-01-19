import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Sup0 from '../../images/sup_1.png';
/*import Sup3 from '../../images/sup_3.png';*/
import Sup4 from '../../images/sup_2.png';
import Sup2 from '../../images/sup_4.png';
import './Feature.css';

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
