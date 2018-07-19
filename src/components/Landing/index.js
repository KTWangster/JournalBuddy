import React from 'react';
import { Row, Container } from "../Grid";
import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';
import './Landing.css';

const LandingPage = () =>
  <div className="landing-page">
    <Container fluid>
      <Row>
      <div className="app-welcome col-md-12">
        <h2>5 Minutes A Day</h2>
        <h1>To Happiness</h1>
        <div className="app-slogan col-md-6">
        <p>
        There’s no easier way to make yourself happier! 
        Research shows that consistent self-reflection and positive thinking 
        have a huge impact on happiness. Here at Journal Buddy, our mission 
        is to make self-reflection and positive thinking effortless and 
        fun so that you can reap all the benefits without lining your 
        bookshelves with rows of empty and forgotten journals! 
        </p>
        </div>
      </div>
      </Row>
      <Row>
      <div className="aboutBar col-md-12">
      <h3 className="about">Why 5-Minutes?</h3>
      <br/>
        <p>
        In about five minutes per day, you can establish a positive pattern of 
        thinking and acting when it really matters. It’s the ideal time 
        window that allows for minimal effort.
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
          Reflect on your day. Don’t know what to write? Chat with Buddy, our bot, to get started.
          </p>
        </div>
        <div className="col-sm-3">
        <span class="glyphicon glyphicon-pencil"></span><br/><br/>
        <h4>WRITE</h4>
        <br/>
          <p>
          Start the 5-minute timer and write away!
          </p>
        </div>
        <div className="col-sm-3">
        <span class="glyphicon glyphicon-refresh"></span><br/><br/>
        <h4>REPEAT</h4>
        <br/>
          <p>
          Check in with us everyday. Consistency is key to unlocking all the benefits of journaling.
          </p>
        </div>
        <div className="col-sm-3">
        <span class="glyphicon glyphicon-star-empty"></span><br/><br/>
        <h4>REWARD</h4>
        <br/>
          <p>
          Enjoy a dramatic boost in happiness thanks to your daily reflection and positive thinking. 
          </p>
        </div>
      </div>
      <div className="col-md-12">
      {/* <button
    type="button"
    // onClick={}
  >
  <Link to={routes.LANDING}>JOURNAL BUDDY</Link>
    Get Started!
  </button> */}
    <button>Get Started</button>
      </div>
    </Row>
    <Row>
      <div className="aboutBar col-md-12">
      <h3 className="about">Why Journal Buddy?</h3>
      <br/>
        <p>
        Part of what makes humans so special, is that we get to choose what and how we think. 
        Journal Buddy helps you optimize your thinking patterns, by prompting you to write 
        and reflect on your life positively. We even have our trusted chatbot (we call him Buddy), 
        who is always there to help you reflect with ease. Don’t know what to write about? 
        Start a conversation with Buddy, and see what happens. 
        <br/><br/><br/>
        If you’ve given traditional journal-keeping a go, then you probably know it’s no easy 
        habit to keep. That’s why, here at Journal Buddy, it’s our goal to make journal-keeping 
        everyone’s easiest and favourite habit to form and maintain. By making journal 
        keeping fun and engaging, you’ll be amazed by how fast you can boost your well-being. 
        <br/><br/><br/>
        Wherever you go, have full access to your personal journal. Read, write, and 
        reflect! We believe that self-reflection should be more than just thinking about 
        what you had for breakfast. With Journal Buddy, you will have access to each of your 
        journal entries, neatly organized, and always available for your perusal. We even show 
        you what you wrote a year ago today. Still miss the idea of a traditional hardback 
        journal? We have good news! Starting at just $5.99, receive a printed hardback 
        copy of your diary. Choose the font, format, and design, and let us do the rest. 
        So what are you waiting for? Sign up and start your journaling journey today! 
        </p>
        <br/>
        <button className="inverted-button">Get Started</button>
      </div>
    </Row>
    </Container>
  </div>
 
export default LandingPage;
