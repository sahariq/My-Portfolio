import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import sunIcon from './images/Sun.png';
import moonIcon from './images/Moon.png';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved preference or system preference
    return localStorage.getItem('darkMode') === 'true' || 
           (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    // Apply dark mode class and save preference
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`portfolio-app ${darkMode ? 'dark' : ''}`}>
      <button 
        className="theme-toggle left-side"
        onClick={() => setDarkMode(!darkMode)}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <img 
          src={darkMode ? sunIcon : moonIcon} 
          alt={darkMode ? 'Light mode' : 'Dark mode'} 
        />
      </button>
      <Navbar />
      <main>
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;