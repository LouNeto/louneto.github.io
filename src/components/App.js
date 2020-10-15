import './styles.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div>
      <Sidebar />
      <div className="content container">
        <Home />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;
