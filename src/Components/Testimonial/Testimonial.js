import React, { useEffect, useState } from 'react';
import './Testimonial.css';

const Testimonial = () => {
	const [activeSlide, setActiveSlide] = useState(1);

	useEffect(() => {
		// This variable prevents race condition
		let current = 1;
		const cycleReviews = () => {
			if (current === 5) {
				current = 1;
			} else {
				current += 1;
			}
			setActiveSlide(current);
		};
		// intervalId identified so it can be canceled on unmount
		const intervalId = setInterval(() => {
			cycleReviews();
		}, 4000);
		// Removes interval on unmount
		return () => clearInterval(intervalId);
	}, []);

	const reviews = [
		{
			quote: 'I wished that there was an application through which one can take pictures and authenticate the location one is reporting from. Such an app should be readily available to journalists, be easy to use in multiple languages and be affordable or free. This app should not necessarily require a very expensive smartphone.  - Citizen Journalist.',
		},
		{
			quote: 'Because of an eye disease, I can only see 5% out of my righteye. I consider the camera to be my second eye. Despite this disease, and despite the difficulties of reporting from a war zone, I continue to convey the facts to the world through pictures and posts on social media.”    - Citizen Journalist',
		},

		{
			quote: 'I wanted to report on the enormous human rights violations in my country and to make sure the world is aware of the terrible atrocities inflicted by the regime on the innocent population. - Citizen Journalist.',
		},
		{
			quote: 'I can see this type of platform being very useful and saving a ton of time, especially for journalists who do not have access or the resources to conduct an open-source investigation. - Investigative Journalists 	',
		},

		{
			quote: 'Verifying a photo or video can take our team anywhere from a few minutes to up to 6 months.” Investigative Journalists	',
		},
	];

	return (
		<div className='testimonialSection'>
			<ul className='carousel__list'>
				{reviews.map((review, index) => {
					const { quote } = review;
					const count = index + 1;
					return (
						<li
							className={`carousel__item
                            ${count === activeSlide ? ' active' : ''}
                            ${count < activeSlide ? ' left' : ''}
                            ${count > activeSlide ? ' right' : ''}
                                        `}
							key={count}>
							<blockquote className='carousel__quote'>
								<p>"{quote}"</p>
							</blockquote>
						</li>
					);
				})}
				<li className='carousel__indicator'>
					<span
						className={`carousel__dot${
							activeSlide === 1 ? ' active' : ''
						}`}
					/>
					<span
						className={`carousel__dot${
							activeSlide === 2 ? ' active' : ''
						}`}
					/>
					<span
						className={`carousel__dot${
							activeSlide === 3 ? ' active' : ''
						}`}
					/>
					<span
						className={`carousel__dot${
							activeSlide === 4 ? ' active' : ''
						}`}
					/>
					<span
						className={`carousel__dot${
							activeSlide === 5 ? ' active' : ''
						}`}
					/>

				</li>
			</ul>
			{/* <p>Active Slide = {activeSlide}</p> */}
		</div>
	);
};

export default Testimonial;
