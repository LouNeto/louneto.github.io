import './styles.css';
import React from 'react';
import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <div
      className="page-body"
      style={{
        /* Background pattern from Toptal Subtle Patterns */
        backgroundImage: 'url(images/motif_home.png)',
      }}
    >
      <Sidebar />
      <div className="content">
        <Home />
        {/* <About />
        <Skills />
        <Portfolio /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
