import React from 'react';
import { Row, Container } from "../Grid";
import './Landing.css';

const LandingPage = () =>
  <div className="landing-page">
    <Container fluid>
      <Row>
      <div className="col-md-12">
        <h1>Journal Buddy</h1>
        <h2>Interactive Journaling</h2>
        <p>
          Lorem ipsum dolor amet cardigan cloud bread williamsburg cornhole 
          squid chillwave vexillologist tbh jianbing actually mustache street 
          art ullamco synth chicharrones. Locavore disrupt adaptogen aute 
          hell of ad. Jean shorts do adaptogen banh mi direct trade gochujang, 
          succulents poke fanny pack wolf gentrify umami try-hard. Mumblecore 
          nulla pok pok before they sold out pinterest distillery biodiesel 
          plaid activated charcoal meh veniam artisan. Yuccie adipisicing 
          chartreuse, kickstarter poutine cornhole organic.
        </p>
      </div>
      </Row>
      <Row>
      <div className="aboutBar col-md-12">
        <p>
          Journaling does this and that. Lorem ipsum dolor amet cardigan cloud bread williamsburg cornhole 
          squid chillwave vexillologist tbh jianbing actually mustache street 
          art ullamco synth chicharrones. Locavore disrupt adaptogen aute 
          hell of ad. Jean shorts do adaptogen banh mi direct trade gochujang, 
          succulents poke fanny pack wolf gentrify umami try-hard. Mumblecore 
          nulla pok pok before they sold out pinterest distillery biodiesel 
          plaid activated charcoal meh veniam artisan. Yuccie adipisicing 
          chartreuse, kickstarter poutine cornhole organic.
        </p>
    </div>
    </Row>
    <Row>
      <div className="howTo col-sm-12 ">
        <h3>How does Journal Buddy work?</h3>
        <div className="col-sm-3">
        <h4>FIRST</h4>
          <p>
            Journaling does this and that. 
          </p>
        </div>
        <div className="col-sm-3">
        <h4>SECOND</h4>
          <p>
            Journaling does this and that. 
          </p>
        </div>
        <div className="col-sm-3">
        <h4>THIRD</h4>
          <p>
            Journaling does this and that. 
          </p>
        </div>
        <div className="col-sm-3">
        <h4>FOURTH</h4>
          <p>
            Journaling does this and that. 
          </p>
        </div>
      </div>
    </Row>
    </Container>
  </div>
 
export default LandingPage;
