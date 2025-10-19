import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Replace these with your actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID'; // Get from EmailJS dashboard
    const templateId = 'YOUR_TEMPLATE_ID'; // Get from EmailJS dashboard
    const publicKey = 'YOUR_PUBLIC_KEY'; // Get from EmailJS dashboard

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        setMessage('Message sent successfully! I\'ll get back to you soon.');
        form.current.reset();
        setLoading(false);
      }, (error) => {
        console.log(error.text);
        setMessage('Failed to send message. Please try again or contact me directly.');
        setLoading(false);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {message && (
            <p className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;