import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Background dark radial overlay */}
      <div className="bg-overlay"></div>

      {/* Main content */}
      <div className="content-wrapper">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Resume />
          <Contact />
          <Connect />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
