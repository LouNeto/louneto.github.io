import React from 'react';

const Contact = () => {
  return (
    <div className="contact row">
      <h4 className="section-title">Contact</h4>
      <div className="divider title-divider"></div>
      <div className="col l6 m4 s12 contact-info">
        <h5>Contact info</h5>
        <div className="card-panel" style={{ alignContent: 'center' }}>
          <div className="card-content">
            <div className="valign-wrapper">
              <i className="material-icons">location_on</i> Montréal, QC, Canada
            </div>
            <div className="valign-wrapper">
              <i className="material-icons">mail_outline</i>{' '}
              lou.gomes.n@gmail.com
            </div>
            <div className="valign-wrapper">
              <i className="material-icons">phone</i> 514-886-8663
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 l6 m8 contact-form">
        <h5>Send me a message</h5>
        <form>
          <div className="row">
            <div className="input-field">
              <input
                placeholder="Full Name"
                id="full_name"
                type="text"
                className="validate"
              />
              <label for="full_name"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                placeholder="Email"
                id="email"
                type="text"
                className="validate"
              />
              <label for="email"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                placeholder="Subject"
                id="subject"
                type="text"
                className="validate"
              />
              <label for="subject"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <textarea
                id="textarea1"
                placeholder="Message"
                class="materialize-textarea"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <div className="col s6" style={{ textAlign: 'left', padding: '10px' }}>
        <ul>
          <li>
            <i className="material-icons large">location_city</i>
            Montréal, QC, Canada
          </li>
          <li>
            <i className="material-icons large">email</i> lou.gomes.n@gmail.com
          </li>
          <li>
            <i className="material-icons large">phone_android</i> 514-886-8663
          </li>
        </ul>
      </div>
      <form className="col s6">
        <div className="row">
          <div className="input-field">
            <input
              placeholder="Full Name"
              id="full_name"
              type="text"
              className="validate"
            />
            <label for="full_name"></label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="Email"
              id="email"
              type="text"
              className="validate"
            />
            <label for="email"></label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="Subject"
              id="subject"
              type="text"
              className="validate"
            />
            <label for="subject"></label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <textarea
              id="textarea1"
              placeholder="Message"
              class="materialize-textarea"
            ></textarea>
          </div>
        </div>
      </form> */
}
