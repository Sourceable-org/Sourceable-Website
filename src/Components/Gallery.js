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
                                background: 'grey',
                                paddingTop:'4rem',
                                width:'80%',
                                height:'70vh',
                                margin:'4rem auto'
                            
                            },
                            content: {
                                color: 'orangered'
                            }
                        }
                    }
                >
                    <div>
                        comement 1
                    </div>
                    <div>
                        comement 2
                    </div>
                    <div>
                        comement 3
                    </div>
                    <div>
                        comement 4
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
