import { React, useState } from "react";
import "./Contact.css";
import { FiMail } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { images } from '../../constants'


function Contact() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  if (isContactOpen === false) {
    return (
      <div
        className="contact-container"
        onClick={() => {
          setIsContactOpen(true);
        }}
      >
        <div className="contact-circle">
          <FiMail size={40} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-box-header">
            <h3> Contact me </h3>
            <GrFormClose
              onClick={() => {
                setIsContactOpen(false);
              }}
            />
          </div>
          <p> Mail: lorenzotamburrini2@gmail.com </p>
          <p> Linkedin: Lorenzo Tamburrini </p>
          <a href={images.CV_Tamburrini_Lorenzo} target="_blank" download> Download my CV </a>
        </div>
      </div>
    );
  }
}

export default Contact;
