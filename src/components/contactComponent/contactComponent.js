import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// import axios from 'axios';


// class ContactForm extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       phone: "",
//       message: ""
//     };


//     this.handleChange = this.handleChange.bind(this);
//     this.handleContactSubmission = this.handleContactSubmission.bind(this);

//   }


//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }
  
  
  // handleContactSubmission(event) {
  //   axios
  //     .post("http://localhost:5000/api/messages", {
  //       name: this.state.name,
  //       email: this.state.email,
  //       phone: this.state.phone,
  //       message: this.state.message
  //       },
  //       { withCredentials: true}
  //     )
  //     .then(response => {
  //       console.log(response.data);

  //     })
  //     .catch(err => {
  //     console.log('Error submitting form:', err);
  //     })

  //   event.preventDefault();
  // }

  // componentDidUpdate() {
  //   this.props.history.push("/") ? this.handleContactSubmission() : null
  // }

const Result = () => {
  return (
    <p>
      Your message was sent. Thanks.
    </p>
  )
}

const ContactForm = () => {
  const [result, showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3s90rcr', 'template_d6w25ho', e.target, 'OZTTUDEJQcLGrsGa3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    showResult(true)
  }
    return (
      <div className="contact-form-wrapper">
        <div className='form-wrapper'>
        <h1>Contact us</h1>
          <form  
            method="POST"
            onSubmit={sendEmail}
            >

            <div className='name-wrapper'>
              <label>Name:</label>
              <br/>
              <input 
                className='input-bar'
                type="text" 
                placeholder="Full name here" 
                name="fullName" 
                required
                />
            </div>

            <div className='phone-number-wrapper'>  
              <label>Phone Number:</label>
              <br/>
              <input
                type="number" 
                className='input-bar'
                placeholder="Number here" 
                name="phone" 
                required
                />
            </div>
            <div className='email-wrapper'>   
              <label>Email:</label>
              <br/>
              <input 
                className='input-bar'
                type="text" 
                placeholder="Email here" 
                name="email" 
                required
                />
            </div>
            <div className='message-wrapper'>  
              <label>Message:</label>
              <br/>
              <textarea
                type="text" 
                className='message-bar'
                placeholder="Enter message here" 
                name="message" 
                required
                />
            </div>
            <button className="btn">
              Submit
            </button>
            <div className='test'>
              {result ? <Result/> : null}
            </div>
          </form>
      </div>
    </div>
  )
}

export default ContactForm;
