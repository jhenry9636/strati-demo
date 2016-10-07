import React, { Component } from 'react';
import logo from './walmart_logo.png';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Service Registry</h1>
        <img src={logo} className="logo" />
        <ul>
          <li>Application</li>
          <li>Endpoints</li>
          <li>Subscriptions</li>
          <li>Policies</li>
          <li>Templates</li>
        </ul>
      </header>
    );
  }
}

export default Header;
