import React,{useEffect} from 'react'
import './feature.css'

import Aos from 'aos'
import 'aos/dist/aos.css';

import AddAlertIcon from '@mui/icons-material/AddAlert';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import SecurityIcon from '@mui/icons-material/Security';
import Live from '../images/Live.gif'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BoltIcon from '@mui/icons-material/Bolt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Features = () => {


    useEffect(() => {
        Aos.init({
         duration: 500
        })
     }, [])

    return (
        <div className='containerFeature'>
            <div className='feature-box'>
                <div>
                    <div  data-aos="zoom-in-up" className="box-item">
                        <div>
                            {/* <img src="x.png" alt="Icon 1" /> */}
                            <AddAlertIcon color="secondary" sx={{ fontSize: 50 }} />
                            <h5>Get safety alerts when they matter to you — in real time.</h5>
                        </div>
                        <p>
                            Be situationally aware. Citizen alerts go out within seconds of a 911 or user report. If there’s an incident, like a robbery, nearby, you’ll know to avoid that area.
                        </p>
                    </div>
                    <div  data-aos="zoom-in-up" className="box-item">
                        <div>
                            {/* <img src="x.png" alt="Icon 1" /> */}
                            <PodcastsIcon color="success" sx={{ fontSize: 50 }} />
                            <h5>Know what’s happening so you and your loved ones can stay safe.</h5>
                        </div>
                        <p>
                            Connect with your family, friends, and neighbors on Citizen and find out when something important is happening around them.
                        </p>
                    </div>
                    <div  data-aos="zoom-in-up" className="box-item">
                        <div>
                            {/* <img src="x.png" alt="Icon 1" /> */}
                            <SecurityIcon color="primary" sx={{ fontSize: 50 }} />
                            <h5>Always know why the helicopter is overhead.</h5>
                        </div>
                        <p>If there’s commotion like police activity, helicopters overhead, or road closures, pull up the app and know why instantly.</p>
                    </div>
                </div>
            </div>
            <div className='above' >
                <div>
                    <div className="first">
                        <div>
                            <img src={Live} alt="Live Not loaded" />
                            <h1>Know the real story faster.</h1>
                        </div>
                    </div>
                    <div className="second">
                        <div className="left">

                        </div>
                        <div className="right">
                            <div>
                                <div  data-aos="zoom-in-up" className="box-item-right">
                                    <div>
                                        <LiveTvIcon color="secondary" sx={{ fontSize: 40 }} />
                                        <h5>See incidents unfold and get the real story from people on the scene.</h5>
                                    </div>
                                    <p>
                                        Live videos show you what’s really happening. Watch incidents unfold from different angles and follow along until they get resolved.
                                    </p>
                                </div>
                                <div  data-aos="zoom-in-up" className="box-item-right">
                                    <div>
                                        <BoltIcon color="success" sx={{ fontSize: 40 }} />
                                        <h5>Fast, accurate information makes a meaningful difference in emergencies.</h5>
                                    </div>
                                    <p>
                                        Citizen alerts go out instantly — this can be hours before Amber Alerts are even issued for children in danger. This speed has been critical in acting on important events like abductions and missing elderly people.
                                    </p>
                                </div>
                                <div   data-aos="zoom-in-up" className="box-item-right">
                                    <div>
                                        <PeopleAltIcon color="primary" sx={{ fontSize: 40 }} />
                                        <h5>When you can, contribute to help resolve a situation.</h5>
                                    </div>
                                    <p>You used to have to call a police tip line to help. Now you can use Citizen to broadcast live video, sharing relevant updates with others. You can also leave comments, which have helped locate missing people and share information about evacuation centers during natural disasters.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='extra'>

            </div>
        </div>



    )
}

export default Features
