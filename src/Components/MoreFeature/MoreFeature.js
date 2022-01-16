import React,{useEffect} from 'react'
import './MoreFeature.css'

import SecurityUpdateWarningIcon from '@mui/icons-material/SecurityUpdateWarning';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LanguageIcon from '@mui/icons-material/Language';

import Aos from 'aos'
import 'aos/dist/aos.css';

const MoreFeature = () => {



    useEffect(() => {
        Aos.init({
            duration: 500
        })
    }, [])

    return (
        <>
            <div className='main-div'>
                <div className='moreFeaturePage make-curve'>
                </div>
                <div className="info-box top-shadow">
                    <div>
                        <div data-aos="zoom-in-up" className="box-item-info-box">
                            <div>
                                <SecurityUpdateWarningIcon color="secondary" sx={{ fontSize: 40 }} />
                                <h5>Hospital and emergency responders save lives with faster updates.</h5>
                            </div>
                            <p>
                                Fire departments use Citizen to direct resources more effectively because they can see the intensity of a fire on live video, while ER surgeons can prep operating rooms for patients 20 minutes before even getting a call from EMTs.
                            </p>
                        </div>
                        <div data-aos="zoom-in-up" className="box-item-info-box">
                            <div>
                                <LocationCityIcon color="success" sx={{ fontSize: 40 }} />
                                <h5>Increasing transparency between the city and its residents.</h5>
                            </div>
                            <p>
                                We believe we should unite against crime. Everyone deserves to be safe — and now, everyone can better look out for each other. Having real-time information available and open to everyone empowers us all to make smarter decisions to stay safe.
                            </p>
                        </div>
                        <div data-aos="zoom-in-up" className="box-item-info-box">
                            <div>
                                <LanguageIcon color="primary" sx={{ fontSize: 40 }} />
                                <h5>Everyone is safer when everyone has the same access.</h5>
                            </div>
                            <p>Citizen is for everyone — and is therefore completely independent. With Citizen, everyone in the community, whether a resident or member of law enforcement, has the same access to the app and its unbiased information.</p>
                        </div>
                    </div>
                </div>
                <div className="help">
                    
                </div>
            </div>
        </>
    )
}

export default MoreFeature
