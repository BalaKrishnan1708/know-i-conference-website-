import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Committee from './components/Committee';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="bg-gradient-mesh"></div>
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Committee />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
