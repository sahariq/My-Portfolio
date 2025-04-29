import React from 'react';
import '../styles/Home.css';
import profileImage from '../images/profile.jpeg'; // Update path to your image



const Home = () => {
  return (
    <section id="home" className="home-section">
      <img className="profile-image" src={profileImage} alt="Sahar Iqbal" />
      <div className="intro-text">
        <h1>I'm Sahar Iqbal, a student at FAST Islamabad. Passionate about Project Management, UI Design and Web Development</h1>
      </div>
    </section>
  );
};

export default Home;