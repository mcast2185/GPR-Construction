import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import GPRnine from "../../static/assets/sudoGPRnine.jpg";
import ContactForm from '../contactComponent/contactComponent';

const Contact = () => {
  useEffect(() => {
    AOS.init({duration: 2500})
  }, []);

  return (
    <div className='contact-container'>
      <div className='contact-container-header'/>
      <div className='contact-header'>
        <h1> Contact </h1>
      </div>
      <div className='contact-content-wrapper'>
        <div className='contact-content-form-wrapper'>
          <div>
            <ContactForm/>
          </div>
          <div>
            <img data-aos="fade" src={GPRnine}/>         
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;