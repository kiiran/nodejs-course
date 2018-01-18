import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderLinks() {
    switch (this.props.auth) {
      case null:
        return <li>Spinner...</li>;
      case false:
        return (
          <li>
            <a href="/auth/google">Log in</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Log out</a>
          </li>
        );
    }
  }

  render() {
    console.log('header props', this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
