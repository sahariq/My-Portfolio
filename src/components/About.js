import React from 'react';
import '../styles/About.css';
import resume from '../images/resume.pdf'; // Update path to your resume

const About = () => {
  return (
    <section class="about-section">
      <h2>About Me</h2>
      <div class="underline"></div>
      <div class="about-content">
        <div class="about-text">
          <p>
            Hey! I'm a Software Engineering student at FAST NUCES Islamabad. I've learned a bunch of things at uni—full-stack development, databases, software design—you name it. But outside of class, I've found myself really into UI/UX design and project management.
          </p>
        </div>
        <a href={resume} class="resume-button" download="resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
    </section>

  );
};

export default About;