import React, {useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AOS from "aos";

import "aos/dist/aos.css";

import GPRone from "../../static/assets/sudoGPRone.jpg";
import GPRtwo from "../../static/assets/sudoGPRtwo.jpg";
import GPRthree from "../../static/assets/sudoGPRthree.jpg";
import GPRfour from "../../static/assets/sudoGPRfour.jpg";
import GPRfive from "../../static/assets/sudoGPRfive.jpg";
import GPRsix from "../../static/assets/sudoGPRsix.jpg";
import GPRseven from "../../static/assets/sudoGPRseven.jpg";




const Home = () => {
  useEffect(() => {
    AOS.init({duration: 2500})
  }, []);

  return (
    <div>
      <Carousel fade 
        controls={false} 
        className="home-container" 
        interval={4500} 
        indicators={false}
      >
        <Carousel.Item interval={4000}>
          <img
            className="d-block image-sizing"
            src={GPRone}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>this is simply sample text, wait for the slideshow to start</p>
            <a className='service-link' src="/services"> View our Services </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block image-sizing"
            src={GPRtwo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>this is simply sample text, wait for the slideshow to start</p>
            <a className='service-link' src="/services"> View our Services </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image-sizing"
            src={GPRthree}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>this is simply sample text, wait for the slideshow to start</p>
            <a className='service-link' src="/services"> View our Services </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image-sizing"
            src={GPRfour}
            alt="Four slide"
          />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>this is simply sample text, wait for the slideshow to start</p>
            <a className='service-link' src="/services"> View our Services </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='home-wrapper-footer'>
        <div className='service-one'>
          <div className='text-box'>
            <h2> hey</h2>
            <p>
              this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
              this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using.
              this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
            </p>
          </div>
          <img data-aos="fade" src={GPRfive}/>          
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
        <div className='service-three'>
          <div className='text-box'>
            <h2> world</h2>
            <p>
              this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
              this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using.
              this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
            </p>
          </div>
          <img data-aos="fade-left" src={GPRseven}/>
        </div>       
      </div>
      <div className='bottom-footer'>
        <div className='bottom-footer-wrapper'>
          <h2> this is the header for the footer </h2>
          <p>this is the text we are using</p>
        </div>
      </div>
    </div>
  )
}

export default Home;