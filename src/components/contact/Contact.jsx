import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Name validation - only letters and spaces
    if (name === 'name') {
      const nameRegex = /^[A-Za-z\s]*$/;
      if (!nameRegex.test(value)) {
        return; // Don't update if invalid characters
      }
    }
    
    // Message validation - limit to 500 words or 2500 characters
    if (name === 'message') {
      const wordCount = value.trim().split(/\s+/).filter(word => word.length > 0).length;
      if (value.length > 2500 || wordCount > 500) {
        return; // Don't update if exceeds limits
      }
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name cannot be empty';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain letters and spaces';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email cannot be empty';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailClick = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({ name: '', email: '', message: '' });
    
    // Validate form
    if (!validateForm()) {
      return; // Don't proceed if validation fails
    }
    
    try {
      // Option 1: Use your Formspree Form ID (recommended)
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      
      // Option 2: Direct email (no signup needed, but less reliable)
      const response = await fetch('https://formspree.io/f/mrbydrqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form>
          <div>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Full Name" 
              value={formData.name}
              onChange={handleInputChange}
              pattern="[A-Za-z\s]+"
              title="Name should only contain letters and spaces"
              minLength="2"
              maxLength="50"
              required
              style={{ 
                border: errors.name ? '1px solid #ff6b6b' : '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: errors.name ? '0.5rem' : '1rem'
              }}
            />
            {errors.name && (
              <p style={{ 
                color: '#ff6b6b', 
                fontSize: '0.8rem', 
                margin: '0 0 1rem 0',
                textAlign: 'left'
              }}>
                {errors.name}
              </p>
            )}
          </div>
          
          <div>
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleInputChange}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address (e.g., user@example.com)"
              maxLength="254"
              required
              style={{ 
                border: errors.email ? '1px solid #ff6b6b' : '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: errors.email ? '0.5rem' : '1rem'
              }}
            />
            {errors.email && (
              <p style={{ 
                color: '#ff6b6b', 
                fontSize: '0.8rem', 
                margin: '0 0 1rem 0',
                textAlign: 'left'
              }}>
                {errors.email}
              </p>
            )}
          </div>
          
          <div>
            <textarea 
              name="message" 
              rows="7" 
              placeholder="Your Message (max 500 words)" 
              value={formData.message}
              onChange={handleInputChange}
              maxLength="2500"
              title="Message should not exceed 500 words or 2500 characters"
              required
              style={{ 
                border: errors.message ? '1px solid #ff6b6b' : '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: errors.message ? '0.5rem' : '1rem'
              }}
            ></textarea>
            {errors.message && (
              <p style={{ 
                color: '#ff6b6b', 
                fontSize: '0.8rem', 
                margin: '0 0 1rem 0',
                textAlign: 'left'
              }}>
                {errors.message}
              </p>
            )}
          </div>
          <div style={{ 
            fontSize: '0.8rem', 
            color: 'var(--color-light)', 
            textAlign: 'right', 
            marginTop: '0.5rem',
            marginBottom: '1rem'
          }}>
            {formData.message.trim().split(/\s+/).filter(word => word.length > 0).length}/500 words | {formData.message.length}/2500 characters
          </div>
          <button type="button" className="btn btn-primary" onClick={handleEmailClick}>
            Send Message
          </button>
          <p style={{ color: 'var(--color-light)', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem' }}>
            Your message will be sent directly to my email
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;