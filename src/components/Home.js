import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>
        Hi! I'm <span className="name-color">Lou</span>.
      </h1>
      <h2 className="line-1 anim-typewriter">I'm a Software Developer.</h2>
      <h3>Based in Montréal, QC, Canada</h3>
      <div style={{ paddingTop: '30px' }}>
        <a className="download-cv-button waves-effect waves-light btn-flat">
          <i className="material-icons right">file_download</i>Download CV
        </a>
      </div>
      <a href="#" className="down-arrow bounce">
        <i className="fa fa-angle-down"></i>
      </a>
    </div>
  );
};

export default Home;
