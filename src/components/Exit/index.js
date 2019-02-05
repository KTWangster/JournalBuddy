import React from 'react';
import { Link } from 'react-router-dom';
import './Exit.css';

import * as routes from '../../constants/routes';
import SignOutButton from '../SignOut';

const ExitPage = () =>
  <div className="exit-page">
        <div className="col-md-6">
          <h1>Thanks for your entry!</h1>
          <h2>See you tomorrow.</h2>
        </div>
          <div className="col-md-6 exit-buttons">
            <button><Link to={routes.LANDING}>Return Home</Link></button>
            <SignOutButton />
          </div>
  </div>

export default ExitPage;