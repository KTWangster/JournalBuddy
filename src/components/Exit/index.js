import React from 'react';
import { Row, Container } from "../Grid";
import './Exit.css';

const ExitPage = () =>
  <div>
    <Container>
      <Row>
    <h1>Thanks for your entry!</h1>
    <h2>See you tomorrow.</h2>
      </Row>
      <Row>
          <div>
          <button>Return Home</button>
          </div>
          <div>
          <button>Log Out</button>
          </div>
    </Row>
    </Container>
  </div>
 
export default ExitPage;