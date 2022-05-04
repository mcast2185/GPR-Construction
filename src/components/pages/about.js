import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


import GPRfive from "../../static/assets/sudoGPRfive.jpg"
import GPRsix from "../../static/assets/sudoGPRsix.jpg"

const About = () => {
  useEffect(() => {
    AOS.init({duration: 2500})
  }, []);

  return (
    <div className='about-container'>
      <div className='about-container-header'/>
      <div className='about-header'>
        <h1> About </h1>
        <h5>this is some sample text used as a filler.this is some sample text used as a filler.this is some sample text used as a filler.</h5>
      </div>
      <div className='about-content-wrapper'>
        <div className='service-one'>
            <div className='text-box'>
              <h2> hey</h2>
              <p>
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using.
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
              </p>
            </div>
            <img data-aos="fade-left" src={GPRfive}/>          
          </div>
          <div className='service-two'>
            <img data-aos="fade-right" src={GPRsix}/>
            <div className='text-box'>
              <h2>there </h2>
              <p>
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using.
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About;