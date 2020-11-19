import React, { Component } from 'react';
import { Link } from 'react-scroll';
import M from 'materialize-css/dist/js/materialize.min.js';
import SocialHandles from './SocialHandles';

class Sidebar extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, 'edge');
    });
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <div className="profile">
            <img
              className="profile-picture"
              src="images/profile.jpg"
              title="I'm Lou"
              alt="photo_lou"
            />
            <Link
              activeClass="active"
              to="/home"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={1000}
              className="menu-nav-item"
            >
              <h5
                className="white-text"
                style={{ fontWeight: 'bold', marginTop: '15' }}
              >
                Lou-Gomes Neto
              </h5>
            </Link>
          </div>
          <li>
            <Link
              activeClass="active"
              to="/home"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={1000}
              className="menu-nav-item sidenav-close"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="/contact"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={1000}
              className="menu-nav-item sidenav-close"
            >
              Contact
            </Link>
          </li>
          <SocialHandles />
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}

export default Sidebar;
