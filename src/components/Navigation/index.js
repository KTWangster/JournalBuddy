import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';
import './Navigation.css';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-collapse collapse">
      <ul className="nav navbar-nav navbar-right">
        <li className="landing"><Link to={routes.LANDING}><img className="logoImg img-responsive" src="assets/images/logo.png" alt=""/><p className="appTitle">Journal Buddy</p></Link></li>
        <li className="navbar-item"><Link to={routes.HOME}>Home</Link></li>
        <li className="navbar-item"><Link to={routes.ACCOUNT}>Account</Link></li>
        <li className="btn-Nav"><SignOutButton /></li>
      </ul>
    </div>
  </div>
</nav>

const NavigationNonAuth = () =>
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-collapse collapse">
      <ul className="navbarList">
        <li className="navbar-item"><Link to={routes.LANDING}><img className="logoImg img-responsive" src="assets/images/logo.png" alt=""/><p className="appTitle"> Journal Buddy </p></Link></li>
        <button onClick={routes.SIGN_IN} className="btn-Nav">Log In</button>
      </ul>
    </div>  
  </div>
</nav>

export default Navigation;
