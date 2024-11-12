import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [state, handleSubmit] = useForm("xdkoavyq");
  if (state.succeeded) {
      return <p style={{height: '100vh', marginTop: '2rem'}}>Your message has been received, I will get back to you shortly. Thanks for contacting me!</p>;
  }

  return (
    <div className="contact-section container">
      <h1>Contact Me</h1>
      <p>If you have any questions or want to collaborate, feel free to reach out using the form below.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <ValidationError prefix='Name' field='name' errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <ValidationError prefix='Message' field='message' errors={state.errors} />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
