import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-4">
          <a
            href="#"
            className="brand-logo menu-nav-item"
            style={{ marginLeft: '10px' }}
          >
            Lou-Gomes Neto
          </a>
          <ul if="nav-mobile" className="right hide-on-med-and-down">
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
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
