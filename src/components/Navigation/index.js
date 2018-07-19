import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';
// import './Navigation.css';
import './navi.css';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-left">
        <div className="navbar-header">
        <li className="navbar-item"><Link to={routes.LANDING}><img className="logoImg img-responsive" src="assets/images/logo.png" alt=""/></Link></li>
        <li className="navbar-item appName"><Link to={routes.LANDING}>JOURNAL BUDDY</Link></li>
        </div>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="navbar-item"><Link to={routes.HOME}>Home</Link></li>
        <li className="navbar-item"><Link to={routes.ACCOUNT}>Account</Link></li>
        <li className="btn-Nav"><SignOutButton /></li>
      </ul>
    </div>
  </div>
</nav>

const NavigationNonAuth = () =>
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-left">
        <div className="navbar-header">
        <li className="navbar-item"><Link to={routes.LANDING}><img className="logoImg img-responsive" src="assets/images/logo.png" alt=""/></Link></li>
        <li className="navbar-item appName"><Link to={routes.LANDING}>JOURNAL BUDDY</Link></li>
        </div>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="navbar-item"><Link class-name="login-button" to={routes.SIGN_IN}>Log In</Link></li>
      </ul>
    </div>
  </div>
</nav>

export default Navigation;

      // {/* <ul className="navbarList">
      //   <li className="navbar-item"><Link to={routes.LANDING}><img className="logoImg img-responsive" src="assets/images/logo.png" alt=""/><p className="appTitle"> Journal Buddy </p></Link></li>
      //   <li className="navbar-item"><Link to={routes.SIGN_IN}>SIGN IN</Link></li>
      //   <button onClick={routes.SIGN_IN} className="btn-Nav">Log In</button>
      // </ul> */}


// {/* <nav className="navbar navbar-default navbar-fixed-top">
//   <div className="container-fluid">
//     <div className="navbar-header">
//      <div className="navbarLeft">
//         <div className="navbar-item"><Link to={routes.LANDING}><img className="logoImg img-responsive" src="assets/images/logo.png" alt=""/><p className="appTitle"> Journal Buddy </p></Link></div>
//       </div>
//       <div className="navbarRight">
//         <div className="navbar-item"><Link to={routes.SIGN_IN}>SIGN IN</Link></div>
//       </div>
//     </div>  
//   </div>
// </nav> */}

//       {/* <nav className="navbar navbar-inverse">
//   <div className="container-fluid">
//     <div className="navbar-collapse collapse">
//       <ul className="nav navbar-nav">
//         <li className="landing"><Link to={routes.LANDING}><img className="logoImg img-responsive" src="assets/images/logo.png" alt=""/><p className="appTitle">Journal Buddy</p></Link></li>
//         <li className="navbar-item"><Link to={routes.HOME}>Home</Link></li>
//         <li className="navbar-item"><Link to={routes.ACCOUNT}>Account</Link></li>
//         <li className="btn-Nav"><SignOutButton /></li>
//       </ul>
//     </div>
//   </div>
// </nav> */}
 