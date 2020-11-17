import React from 'react';

const Contact = () => {
  return (
    <div className="contact row">
      <div className="col s12">
        <h4 className="section-title">Contact</h4>
        <div className="divider title-divider"></div>
        <div className="container">
          <div className="col s12 m12 l6 contact-info">
            <h5>Contact info</h5>
            <div className="coordonates">
              <div className="coordonate">
                <i className="material-icons">location_on</i>
                <h6>Montréal, QC, Canada</h6>
              </div>
              <a href="mailto:lou.gomes.n@gmail.com">
                <div className="coordonate">
                  <i className="material-icons">email</i>
                  <h6 className="email-address">lou.gomes.n@gmail.com</h6>
                </div>
              </a>
              <div className="coordonate">
                <i className="material-icons">phone</i>
                <h6>514-886-8663</h6>
              </div>
            </div>
          </div>
          <div className="col s12 m12 l6 contact-info">
            <h5>Connect with me</h5>
            <div className="contact-handles">
              <a
                href="https://www.linkedin.com/in/lou-gomes-neto/"
                target="_blank"
                className="fa fa-linkedin"
              ></a>
              <a
                href="https://twitter.com/BurgerFries23"
                target="_blank"
                className="fa fa-twitter"
              ></a>
              <a
                href="https://github.com/LouNeto"
                target="_blank"
                className="fa fa-github"
              ></a>
              <a
                href="https://gitlab.com/Lou_Neto"
                target="_blank"
                className="fa fa-gitlab"
              ></a>
            </div>
          </div>
        </div>
        {/* <div className="col s12 m12 l8">
            <h5>Send me a message</h5>
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input id="name" type="text" className="white-text" />
                  <label for="name">Name</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="email"
                    type="text"
                    className="validate white-text"
                  />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="subject" type="text" className="white-text" />
                  <label for="subject">Subject</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea"
                    type="text"
                    className="materialize-textarea white-text"
                  ></textarea>
                  <label for="textarea1">Message</label>
                </div>
              </div>
              <input
                className="submit-button"
                type="submit"
                value="Submit"
              ></input>
            </form>
          </div> */}
      </div>
    </div>
  );
};

export default Contact;
