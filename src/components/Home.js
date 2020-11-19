import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id="/home" className="home content valign-wrapper center-align">
      <div className="home-content">
        <h1>
          Hi! I'm <span className="name">Lou</span>.
        </h1>
        <h2 className="line-1 anim-typewriter">I'm a Software Developer.</h2>
        <h3>Based in Montréal, QC, Canada</h3>
        <div style={{ paddingTop: '30px' }}>
          <a
            href="cvLouNetoEng.pdf"
            className="download-cv-button waves-effect waves-light btn-flat"
            download
          >
            <i className="material-icons right">file_download</i>Download CV
          </a>
        </div>
        <Link
          activeClass="active"
          to="/contact"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={1000}
          className="down-arrow bounce"
        >
          <i className="fa fa-angle-down"></i>
        </Link>
      </div>
    </div>
  );
};

export default Home;
