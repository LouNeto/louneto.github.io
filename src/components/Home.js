import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>
        Hi! I'm <span className="name-color">Lou</span>.
      </h1>
      <h3 className="line-1 anim-typewriter">I'm a Software Developer</h3>
      Based in Montréal, QC, Canada
      <div style={{ paddingTop: '30px' }}>
        <a class="download-cv-button waves-effect waves-light btn-flat">
          <i class="material-icons right">file_download</i>Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
