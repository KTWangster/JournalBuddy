import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import { Container, Row } from '../Grid';
import * as routes from '../../constants/routes';

import './SignUp.css';

const SignUpPage = ({ history }) =>
  <div>
    <h2>SignUp</h2>
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <Container fluid>
        <Row>
          <div className="col-sm-6">
            <form onSubmit={this.onSubmit}>
              <div>
              <h4>Your Name</h4>
              <input
                value={username}
                onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
                type="text"
                placeholder="Full Name"
              />
              </div>
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
                value={passwordOne}
                onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                type="password"
                placeholder="Password"
              />
              </div>
              <div>
              <h4>Confirm Password</h4>
              <input
                value={passwordTwo}
                onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                type="password"
                placeholder="Confirm Password"
              />
              </div>
              <button disabled={isInvalid} type="submit">
                Sign Up
              </button>

              { error && <p>{error.message}</p> }
            </form>
          </div>
        </Row>
      </Container>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};