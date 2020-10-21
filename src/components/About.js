import React from 'react';

const About = () => {
  return (
    <div className="about row">
      <div className="col s12">
        <h4 className="section-title">About Me</h4>
        <div className="divider title-divider"></div>
        <div className="about-content container">
          <div className="about-presentation col s6">
            <h6>Hey, I'm Lou and welcome to my personal website!</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              hendrerit tincidunt elit, in luctus est venenatis eget. Praesent
              tincidunt metus et tortor iaculis pulvinar. Suspendisse eget
              rhoncus nunc, non aliquam nunc. Ut sodales hendrerit libero vel
              pretium. Integer auctor varius leo ac semper. Nunc hendrerit,
              ligula eu rutrum finibus, lacus diam ultrices ipsum, eget porta
              diam ipsum eu nulla. Nam auctor tempus nunc, eget ultrices urna
              rutrum vel. Vivamus varius, justo vel sagittis mattis, massa magna
              luctus mauris, in hendrerit leo massa ac mi. Proin velit nunc,
              sollicitudin nec tempus sit amet, luctus ut est. Nullam gravida
              eget dui at egestas.
            </p>
          </div>
          <div className="row">
            <div className="col s6">
              <h5 className="section-title">In my free time</h5>
              <div className="interests1 col s6">
                <div className="valign-wrapper center-align">
                  <img className="interest-img" src="music.png"></img>
                  <span>Music</span>
                </div>
                <div className="valign-wrapper">
                  <img className="interest-img" src="guitar.png"></img>
                  <span>Guitar</span>
                </div>
                <div className="valign-wrapper">
                  <img className="interest-img" src="piano.png"></img>
                  <span>Piano</span>
                </div>
              </div>
              <div className="interests2 col s6">
                <div className="valign-wrapper">
                  <img className="interest-img" src="technology.png"></img>
                  <span>Technology</span>
                </div>
                <div className="valign-wrapper">
                  <img className="interest-img" src="console.png"></img>
                  <span>Video-Games</span>
                </div>
                <div className="valign-wrapper">
                  <img className="interest-img" src="basketball.png"></img>
                  <span>Basketball</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
