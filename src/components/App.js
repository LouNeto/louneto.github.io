import './styles.css';
import React from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="page-body">
      <Sidebar />
      <div className="content">
        <Home />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;
