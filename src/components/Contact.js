import React from 'react';
import SocialHandles from './SocialHandles';

const Contact = () => {
  return (
    <div id="/contact" className="contact content row">
      <div className="col s12">
        <h4 className="section-title">Contact</h4>
        <div className="divider title-divider"></div>
        <div className="container">
          <div className="col s12 m12 l6 contact-info">
            <h5>Contact Me</h5>
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
          <div className="col s12 m12 l6 resumes">
            <h5>Download my CV</h5>
            <div>
              <a
                id="cvEng"
                href="cvLouNetoEng.pdf"
                className="download-cv-button waves-effect waves-light btn-flat"
                download
              >
                <i className="material-icons right">file_download</i>English
              </a>
            </div>
            <a
              id="cvFr"
              href="cvLouNetoFr.pdf"
              className="download-cv-button waves-effect waves-light btn-flat"
              download
            >
              <i className="material-icons right">file_download</i>Français
            </a>
          </div>
          <div className="col s12 m12 l12 connect-info">
            <h5>Connect with me</h5>
            <SocialHandles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// {/* <div className="col s12 m12 l8">
//             <h5>Send me a message</h5>
//             <form className="col s12">
//               <div className="row">
//                 <div className="input-field col s6">
//                   <input id="name" type="text" className="white-text" />
//                   <label for="name">Name</label>
//                 </div>
//                 <div className="input-field col s6">
//                   <input
//                     id="email"
//                     type="text"
//                     className="validate white-text"
//                   />
//                   <label for="email">Email</label>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="input-field col s12">
//                   <input id="subject" type="text" className="white-text" />
//                   <label for="subject">Subject</label>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="input-field col s12">
//                   <textarea
//                     id="textarea"
//                     type="text"
//                     className="materialize-textarea white-text"
//                   ></textarea>
//                   <label for="textarea1">Message</label>
//                 </div>
//               </div>
//               <input
//                 className="submit-button"
//                 type="submit"
//                 value="Submit"
//               ></input>
//             </form>
//           </div> */}
