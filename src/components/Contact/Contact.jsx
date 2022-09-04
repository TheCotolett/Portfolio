import {React, useState} from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi'
import {GrFormClose} from 'react-icons/gr'

function Contact() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    if(isContactOpen === false) {
        return (
            <div className='contact-container' onClick={ ()=> {setIsContactOpen(true)} }>
                <div className='contact-circle'>
                    <FiMail size={40}/>
                </div>
            </div>
        )
    } else {
        return (
            <div className="contact-container">
                <div className='contact-box'>
                    <div className="contact-box-header">
                        <p> Contact me </p>
                        <GrFormClose onClick={ ()=> {setIsContactOpen(false)} }/>
                    </div>
                    <p> Hi </p>
                </div>
            </div>
        )
    }
}

export default Contact