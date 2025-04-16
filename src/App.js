import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FilmDesignGallery from './components/FilmDesignGallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-primary-500 font-sans">
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <FilmDesignGallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;