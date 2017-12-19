import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Switch, Route, Link } from 'react-router-dom';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
  <header id="header">
    <div className="container clearfix">
      <div id="menu-button">
        <div className="centralizer">
          <div className="cursor">Menu
            <div id="nav-button"> <span className="nav-bar"></span> <span className="nav-bar"></span> <span className="nav-bar"></span> </div>
          </div>
        </div>
      </div>
      <nav id="main-nav">
        <ul id="options" className="option-set clearfix" data-option-key="filter">
          <li className="selected"> <Link to='/'>Home</Link> </li>
          <li> <Link to='/about'>About</Link> </li>
        </ul>
      </nav>
    </div>
  </header>
  </div>
    );
  }
}

export default Header;
