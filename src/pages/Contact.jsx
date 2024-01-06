import React, { useState, useEffect } from 'react';
import './contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const generateUniqueKey = () => {
    return `formData_${Date.now()}`;
  };

  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedData = JSON.parse(localStorage.getItem('contactFormData')) || {};
    const uniqueKey = generateUniqueKey();
    const updatedData = { ...savedData, [uniqueKey]: formData };

    localStorage.setItem('contactFormData', JSON.stringify(updatedData));
    alert('Form data has been saved to localStorage!');

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
