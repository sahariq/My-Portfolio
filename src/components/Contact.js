import React from 'react';
import '../styles/Contact.css';
import linkedinIcon from '../images/1.png'; // Update path to your icons
import emailIcon from '../images/2.png';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-links">
        <a href="mailto:your.email@example.com" className="email-link">
          <img src={emailIcon} alt="Email" />
          Email
        </a>
        <a href="https://linkedin.com/in/yourprofile" className="linkedin-link">
          <img src={linkedinIcon} alt="LinkedIn" />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;