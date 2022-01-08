import React,{useEffect} from 'react'
import './LifeSave.css'

import Camera from '../images/Camera.jpg'
import Dog from '../images/DogNew.jpg'
import Driver from '../images/Driver.jpg'
import Family from '../images/Family.jpg'
import Girl from '../images/Girl.jpg'


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
            <h6>life-saving alerts</h6>
            <h1 data-aos="zoom-in-up" >Citizen is a force for good in the world.</h1>
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
                    <p>Family Escapes Burning Building</p>
                </div>

            </div> */}

            {/* New */}
            <div>
                <div data-aos="fade-right" class="Box">
                    <img src={Family} alt="Avatar" class="image" />
                    <div class="overlay">
                        <div class="text">Family Escapes Burning Building</div>
                    </div>
                </div>
                <div data-aos="zoom-in-up" class="Box">
                    <img src={Dog} alt="Dog" class="image" />
                    <div class="overlay">
                        <div class="text">Lost Dog Returned to Owner</div>
                    </div>
                </div>
                <div data-aos="fade-down-right" class="Box">
                    <img src={Driver} alt="Driver Avatar" class="image" />
                    <div class="overlay">
                        <div class="text">Uber Driver Saved from Shootout</div>
                    </div>
                </div>
                <div data-aos="fade-right" class="Box">
                    <img src={Girl} alt="Girl Avatar" class="image" />
                    <div class="overlay">
                        <div class="text">Missing 10-Year-Old Girl Found</div>
                    </div>
                </div>
                <div data-aos="fade-up-left" class="Box">
                    <img src={Camera} alt="Avatar" class="image" />
                    <div class="overlay">
                        <div class="text">Man Rescued from Chinatown Fire</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LifeSave
