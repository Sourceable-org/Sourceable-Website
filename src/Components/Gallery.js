import React, { useState } from 'react'
import LifeSave from './LifeSave'
import NotificationImg from '../images/notification.jpeg'
import './Gallery.css'

import Modal from 'react-modal';
const Gallery = () => {

    const [handleModal, setHandleModal] = useState(false)
    return (
        <>
            <div className="notification">
                <img src={NotificationImg} alt="No loaded" onClick={() => setHandleModal(true)} />
                <Modal isOpen={handleModal} onRequestClose={(e) => setHandleModal(false)}
                    contentLabel="Example Modal"
                    style={
                        {
                            overlay: {
                                background: 'blue',
                                paddingTop:'4rem ',
                                width:'60%',
                                height:'60vh',
                                margin:'4rem auto'
                            
                            },
                            content: {
                                color: 'black'
                            }
                        }
                    }
                >
                    <div>
                        Lena Arkawi replied to your comment : 
                    </div>
                    <div>
                        Parv Joshi replied to your comment
                    </div>
                    <div>
                        Siddhanth Kumar posted an update
                    </div>
                   

                    <button onClick={(e) => setHandleModal(false)}>
                        Close
                    </button>
                </Modal>
            </div>
            <LifeSave />


        </>
    )
}

export default Gallery
