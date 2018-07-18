import React from 'react';
import { Row, Container } from "../Grid";
import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';
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
      <h3 className="about">Why 5-Minutes?</h3>
      <br/>
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
      <div className="col-sm-12 ">
        <br/>
        <h3 className="howWork">How does Journal Buddy work?</h3>
        <br/><br/><br/>
        <div className="col-sm-3">
        <span class="glyphicon glyphicon-flash"></span><br/><br/>
        <h4>REFLECT</h4>
        <br/>
          <p>
            Introspect. Think. Consider. Brainstorm.
          </p>
        </div>
        <div className="col-sm-3">
        <span class="glyphicon glyphicon-pencil"></span><br/><br/>
        <h4>WRITE</h4>
        <br/>
          <p>
            Jot down anything that comes to mind during 5 minutes. 
          </p>
        </div>
        <div className="col-sm-3">
        <span class="glyphicon glyphicon-refresh"></span><br/><br/>
        <h4>REPEAT</h4>
        <br/>
          <p>
            Repeat the process the next day...and the next...and the next...
          </p>
        </div>
        <div className="col-sm-3">
        <span class="glyphicon glyphicon-star-empty"></span><br/><br/>
        <h4>REWARD</h4>
        <br/>
          <p>
          Reap the benefits of journaling and live a long and healthy life! 
          </p>
        </div>
      </div>
      <div className="col-md-12">
      <button
    type="button"
    // onClick={}
  >
  <Link to={routes.LANDING}>JOURNAL BUDDY</Link>
    Get Started!
  </button>
      </div>
    </Row>
    </Container>
  </div>
 
export default LandingPage;
