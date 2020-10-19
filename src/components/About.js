import React from 'react';

const About = () => {
  return (
    <div className="about row">
      <div className="col s12">
        <h4 className="section-title">About Me</h4>
        <div className="divider title-divider"></div>
        <div className="about-content container">
          <div className="about-presentation">
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
            <div className="col s12 skills">
              <i className="devicon-java-plain-wordmark colored"></i>
              <i className="devicon-c-plain colored"></i>
              <i className="devicon-cplusplus-plain colored"></i>
              <i className="devicon-python-plain colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-html5-plain colored"></i>
              <i className="devicon-css3-plain-wordmark colored"></i>
              <i className="devicon-react-original-wordmark colored"></i>
              <i class="devicon-nodejs-plain colored"></i>
              <i class="devicon-express-original colored"></i>
              <i className="devicon-mongodb-plain-wordmark colored"></i>
            </div>
            <div className="col s12 m12 l12 interests">
              <h4 className="section-title">Interests</h4>
              Music, Guitar, Piano, Technology, Video Games, Basketball
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
