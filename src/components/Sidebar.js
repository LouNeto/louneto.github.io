import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

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
              src="profile.jpg"
              title="I'm Lou"
              alt="photo_lou"
            />
            <h6 style={{ fontWeight: 'bold', marginTop: '15' }}>
              Lou-Gomes Neto
            </h6>
          </div>
          <li>
            <a href="#" className="menu-nav-item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="menu-nav-item">
              About
            </a>
          </li>
          <li>
            <a href="#" className="menu-nav-item">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="menu-nav-item">
              Contact
            </a>
          </li>
          <div style={{ marginTop: 20 }}>
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
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}

export default Sidebar;
