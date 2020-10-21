import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio row">
      <div className="col s12">
        <h4 className="section-title">Portfolio</h4>
        <div className="divider title-divider"></div>
        <div className="container">
          <div className="row">
            <div className="col l4 s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="sample-1.jpg" />
                  <span className="card-title">Project 1</span>
                  <a className="btn-floating activator halfway-fab waves-effect waves-light">
                    <i className="material-icons">add</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Card Title<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
            <div className="col l4 s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="sample-1.jpg" />
                  <span className="card-title">Project 2</span>
                  <a className="btn-floating activator halfway-fab waves-effect waves-light">
                    <i className="material-icons">add</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Card Title<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
            <div className="col l4 s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="sample-1.jpg" />
                  <span className="card-title">project 3</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light">
                    <i className="material-icons">add</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
