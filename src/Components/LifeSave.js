import React,{useEffect} from 'react'
import './LifeSave.css'

import Camera from '../images/Camera11.jpg'
import Dog from '../images/Dog1.jpg'
import Driver from '../images/Driver1.jpg'
import Family from '../images/Family1.jpg'
import Girl from '../images/Girl1.jpg'


import 'aos/dist/aos.css';
import Aos from 'aos'

const LifeSave = () => {


    useEffect(() => {
       Aos.init({
        duration: 2000
       })
    }, [])

    return (
        <div className='lifeSave'>
            <h4>Empowering. Supporting. Connecting.</h4>
            <h1 data-aos="zoom-in-up" >Trusted by citizen journalists, used by the world.</h1>
            {/* <div>
                <div className="life">
                    <img src={Camera} alt="Camera" />
                    <p>Man Rescued from Chinatown Fire</p>
                </div>
                <div className="life">
                    <img src={Dog} alt="Dog" />
                    <p>Lost Dog Returned to Owner</p>
                </div>
                <div className="life">
                    <img src={Girl} alt="Girl" />
                    <p>Missing 10-Year-Old Girl Found</p>
                </div>
                <div className="life">
                    <img src={Driver} alt="Driver" />
                    <p>Uber Driver Saved from Shootout</p>
                </div>
                <div className="life">
                    <img src={Family} alt="Family" />
                    <p>The Entire Building on Fire</p>
                </div>

            </div> */}

            {/* New */}
            <div>
                <div data-aos="fade-right" class="Box">
                    <img src={Family} alt="Avatar" class="image" />
                    <div class="overlay">
                        <div class="text">The Entire Building on Fire in Syria-Turkey</div>
                    </div>
                </div>
                <div data-aos="zoom-in-up" class="Box">
                    <img src={Dog} alt="Dog" class="image" />
                    <div class="overlay">
                        <div class="text">Casulties in Bab al-Hawa Border</div>
                    </div>
                </div>
                <div data-aos="fade-down-right" class="Box">
                    <img src={Driver} alt="Driver Avatar" class="image" />
                    <div class="overlay">
                        <div class="text">Journalist was Kidnapped at Bab al-Hawa Border</div>
                    </div>
                </div>
                <div data-aos="fade-right" class="Box">
                    <img src={Girl} alt="Girl Avatar" class="image" />
                    <div class="overlay">
                        <div class="text">Riots at Syria-Turkey Border</div>
                    </div>
                </div>
                <div data-aos="fade-up-left" class="Box">
                    <img src={Camera} alt="Avatar" class="image" />
                    <div class="overlay">
                        <div class="text">Disturbed people at Bab al-Hawa Borders</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LifeSave
