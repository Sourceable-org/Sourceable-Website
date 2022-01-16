import React from 'react'
import './contact.css'
const Contact = () => {
    return (
        <div class="contact-container">
            <h2>Contact Us</h2>
            <form action="#" method="get" class="contact-form font2">
                <div class="name "><input type="text" placeholder="Enter your name" class="name-input font2" /></div>
                <div class="email"> <input type="email" name="" id="" placeholder="Enter your email-id"
                    class="email-input font2" /></div>
                <div class="textarea-contact">
                    <textarea name="" id="" cols="10" rows="7" class="textarea-input font2"
                        placeholder="Enter your concern in detail.."></textarea>
                </div>
                <button type="submit" class="btn-contact">Submit</button>
            </form>
        </div>
    )
}

export default Contact
