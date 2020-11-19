import './styles.css';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
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
      <HashRouter basename="/">
        <Sidebar />
        <Home />
        <Contact />
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
