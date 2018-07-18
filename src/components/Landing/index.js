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
        <span class="glyphicon glyphicon-flash"></span><br/>
        <h4>REFLECT</h4>
          <p>
            Introspect. Think. Consider. Brainstorm.
          </p>
        </div>
        <div className="col-sm-3">
        <span class="glyphicon glyphicon-pencil"></span><br/>
        <h4>WRITE</h4>
          <p>
            Jot down anything that comes to mind during 5 minutes. 
          </p>
        </div>
        <div className="col-sm-3">
        <span class="glyphicon glyphicon-refresh"></span><br/>
        <h4>REPEAT</h4>
          <p>
            Repeat the process the next day...and the next...and the next...
          </p>
        </div>
        <div className="col-sm-3">
        <span class="glyphicon glyphicon-star-empty"></span><br/>
        <h4>REWARD</h4>
          <p>
          Reap the benefits of journaling and live a long and healthy life! 
          </p>
        </div>
      </div>
    </Row>
    </Container>
  </div>
 
export default LandingPage;
