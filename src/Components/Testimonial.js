import React, { useEffect, useState } from 'react'
import './testimonial.css'


const Testimonial = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        // This variable prevents race condition
        let current = 1;
        const cycleReviews = () => {
            if (current === 2) {
                current = 1;
            } else {
                current += 1;
            }
            setActiveSlide(current);
        };
        // intervalId identified so it can be canceled on unmount
        const intervalId = setInterval(() => {
            cycleReviews();
        }, 10000);
        // Removes interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    const reviews = [
        {
            quote:
                "The lack of easily accessible internet facilities was the biggest challenge that I faced in the war zone, and I also wished that there were an application through which one can take pictures and authenticate the location one is reporting from. Such an app should be readily available to journalists, be easy to use in multiple languages and be affordable or free. This app should not necessarily require a very expensive smartphone."
        },
        {
            quote:
                "The challenges in the war zone are not easy, because you have to shoot and send photos and videos as soon as possible. You cannot film raids or bombings and send them after two days or more. The journalist’s work also requires speed in sending news and materials to the department. Since internet facilities are not readily available, there should be some means to send stories and photographs online through some other (satellite?) system. There should be some system for a verified journalist to send information to a trusted recipient by bypassing the government-regulated internet lines, which - n any case - may have been blocked. This app should have the same level of security as an online bank account. This means a VERIFIED user (such as myself), verified recipients of my information, and strong safeguards so that if I am captured by the enemy there should be some automatic means to deactivate the account to prevent it being misused.."
        }

    ];


    return (
        <div className='testimonialSection'>
            <ul className="carousel__list">
                {
                    reviews.map((review, index) => {
                        const { quote } = review;
                        const count = index + 1;
                        return (
                            <li
                                className={`carousel__item
                            ${count === activeSlide ? " active" : ""}
                            ${count < activeSlide ? " left" : ""}
                            ${count > activeSlide ? " right" : ""}
                                        `}
                                key={count}
                            >
                                <blockquote className="carousel__quote">
                                    <p>"{quote}"</p>
                                </blockquote>
                            </li>
                        );
                    })
                }
                <li className="carousel__indicator">
                    <span
                        className={`carousel__dot${activeSlide === 1 ? " active" : ""}`}
                    />
                    <span
                        className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
                    />
                </li>
            </ul>
            {/* <p>Active Slide = {activeSlide}</p> */}
        </div>

    )
}

export default Testimonial
