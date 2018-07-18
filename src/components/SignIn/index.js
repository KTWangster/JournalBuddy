import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

// import { Container, Row } from '../Grid';
import './SignIn.css';

const SignInPage = ({ history }) =>
  <div className="signin-page col-md-6">
    <h2>Log In</h2>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className="signin-page">
      {/* <Container fluid> */}
        {/* <Row> */}
          <div className="col-sm-6">
      <form onSubmit={this.onSubmit}>
        <div>
        <h4>Your Email Address</h4>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        </div>
        <div>
        <h4>Your Password</h4>
        <input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        </div>
        <button disabled={isInvalid} type="submit" className="login-button">
          Log In
        </button>

        { error && <p>{error.message}</p> }
      </form>
      </div>
      {/* </Row> */}
      {/* </Container> */}
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
