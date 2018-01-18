import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Stripe from './Stripe';

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
          <Fragment>
            <li>
              <Stripe />
            </li>
            <li>
              <a href="/api/logout">Log out</a>
            </li>
          </Fragment>
        );
    }
  }

  render() {
    console.log('header props', this.props);
    const { auth } = this.props;

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={auth ? '/surveys' : '/'} className="brand-logo">
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
