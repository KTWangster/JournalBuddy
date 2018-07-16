import React, { Component } from 'react';
import Moment from 'react-moment';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import { Container, Col, Row } from '../Grid';
import { EntryBox } from '../EntryBox';

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
      <div>
        <Container>
          <Col size="md-6">
          <Row>
            <div>
            <Moment format="MM/DD/YYYY">{this.props.dateToFormat}</Moment>
              <p>Daily inspirational quote goes here.</p>
          </div>
          </Row>
          <Row>
            <EntryBox />
          </Row>
          <Row>
          <button className="btn btn-warning contactBtn">Send</button>
          </Row>
          </Col>
        { !!users }
        {/* { !!users && <UserList users={users} /> } */}
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