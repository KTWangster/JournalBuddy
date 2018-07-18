import React from 'react';

import AuthUserContext from '../Session/AuthUserContext';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';

import { Container, Row } from '../Grid';
import './Account.css';

const AccountPage = () =>
  <div className="account-page">
  <Container fluid>
    <Row>  
  <AuthUserContext.Consumer>
    {authUser =>
      <div className="col-sm-12">
        <h2>Account: {authUser.email}</h2>
        <div>
        <PasswordForgetForm />
        </div>
        <div>
        <PasswordChangeForm />
        </div>
      </div>
    }
  </AuthUserContext.Consumer>
    </Row>
  </Container>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);