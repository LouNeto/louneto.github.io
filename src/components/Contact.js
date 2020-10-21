import React from 'react';

const Contact = () => {
  return (
    <div className="contact row">
      <div className="col s12">
        <h4 className="section-title">Contact</h4>
        <div className="divider title-divider"></div>
        <div className="container">
          <div className="col l5 m4 s12 contact-info">
            <h5>Contact info</h5>
            <div>
              <div>
                <div className="coordonate valign-wrapper">
                  <i className="material-icons">location_on</i> Montréal, QC,
                  Canada
                </div>
                <div className="coordonate valign-wrapper">
                  <i className="material-icons">mail_outline</i>{' '}
                  lou.gomes.n@gmail.com
                </div>
                <div className="coordonate valign-wrapper">
                  <i className="material-icons">phone</i> 514-886-8663
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 l7 m8">
            <h5>Send me a message</h5>
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input id="name" type="text" className="validate" />
                  <label for="name">Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="email" type="text" className="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="subject" type="text" className="validate" />
                  <label for="subject">Subject</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
