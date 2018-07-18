import React from 'react';
import './Exit.css';

const ExitPage = () =>
  <div className="exit-page">
        <div className="col-md-6">
          <h1>Thanks for your entry!</h1>
          <h2>See you tomorrow.</h2>
        </div>
          <div className="col-md-6 exit-buttons">
            <button>Return Home</button>
            <button>Log Out</button>
          </div>
  </div>
 
export default ExitPage;