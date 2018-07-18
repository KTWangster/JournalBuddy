import React, { Component } from 'react';
import Moment from 'react-moment';
// import Countdown from 'react-countdown-now';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';

import { Chatbot } from '../Chatbot';
import { Container, Row } from '../Grid';
import { EntryBox } from '../EntryBox';
import { Timer } from '../Timer';

// const CountdownCompleted = () => <span>Good Job!</span>;
// const renderer = ({ minutes, seconds, completed }) => {
//   if (completed) {
//     // Render a complete state
//     return <CountdownCompleted />;
//   } else {
//     return <span>{minutes}:{seconds}</span>;
//   }
// };

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  
  render() {
    const { users } = this.state;

    return (
      <div className="home-page">
        <Container fluid>
          <Row>
            <div className="homeLeft col-md-7">
     
                <div className="home-item col-md-12">
                  <h2>
                    <Moment format="MM/DD/YYYY">{this.props.dateToFormat}</Moment>
                  </h2>
                </div>
       
                <div className="home-item col-md-12">
                  <EntryBox 
                  placeholder="Click the button to begin your 5-minute journal entry. If you're stuck, talk to the ChatBot for ideas!"
                  />
                </div>
        
                <div className="home-item col-md-12">
                  {/* <Countdown date={Date.now() + 300000}
                  renderer={renderer} /> */}
                  {/* <Countdown date={Date.now() + 10000}
                  renderer={renderer} /> */}
                  <Timer />
                </div>
     
            </div>

            <div className="homeRight col-md-5">
              <Chatbot />   
              { !!users }
              {/* { !!users && <UserList users={users} /> } */}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

// const UserList = ({ users }) =>
//   <div>
//     <h2>List of Usernames of Users</h2>
//     <p>(Saved on Sign Up in Firebase Database)</p>

//     {Object.keys(users).map(key =>
//       <div key={key}>{users[key].username}</div>
//     )}
//   </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);