import React from 'react';
import '../styles/About.css';
import resume from '../images/resume.pdf'; // Update path to your resume

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="underline"></div>
      
      <div className="about-content">
        <h3>Who am I?</h3>
        <p>
          Hey! I'm a Software Engineering student at FAST NUCES Islamabad. I've
          learned a bunch of things at uni—full-stack development, databases,
          software design—you name it. But outside of class, I've found myself
          really into UI/UX design and project management.
        </p>
        <a href={resume} download className="resume-button">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;