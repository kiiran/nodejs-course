import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/header">Log in</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
