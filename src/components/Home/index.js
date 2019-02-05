import React, { Component } from 'react';
import Moment from 'react-moment';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import 'firebase/database';


import { Chatbot } from '../Chatbot';
import { Container, Row } from '../Grid';
import { EntryBox } from '../EntryBox';
import Entry from '../Entry/Entry';
import EntryForm from '../EntryForm/EntryForm';
import { Timer } from '../Timer';

// import firebase from 'firebase/app';
// import { config } from '../../firebase';

import './Home.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.addEntry = this.addEntry.bind(this);
    
    // this.app = firebase.initializeApp(config);
    // this.database = this.app.database().ref().child('entries');

    // Sets up React state of component
    this.state = {
      users: {},
      entries: [
        { id: 1, entryContent: "Entry 1 here!" },
        { id: 2, entryContent: "Entry 2 here!" },
      ],
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
    }

    addEntry(entry){
      // Pushes the entry onto the entries array.
      const previousEntries = this.state.entries;
      previousEntries.push({ id: previousEntries.length + 1, entryContent: entry });
      
      this.setState({
        entries: previousEntries
      });
    }

  render() {
    const { users } = this.state;

    return (
      <div className="home-page">
        <Container fluid>
          <Row>
            <div className="homeLeft col-sm-8">
     
                <div className="home-item col-md-12">
                  <h2>
                    <Moment format="MM/DD/YYYY">{this.props.dateToFormat}</Moment>
                  </h2>
                </div>

                <div className="home-item col-md-12">
                  <EntryBox addEntry={this.addEntry} placeholder="Click the button to begin your 5-minute journal entry. If you're stuck, talk to the ChatBot for ideas!"
                  />
                </div>
        
                <div className="home-item col-md-12">
                  <Timer />
                </div>

                <div className="home-item col-md-12">
                  <div className="notesHeader">
                    <div className="heading">Previous Entries</div>
                  </div>

                  <div className="entriesBody">
                    {
                      this.state.entries.map((entry) => {
                        return (
                        <Entry entryContent={entry.entryContent} entryId={entry.id} key={entry.id} />
                        )
                      })                     
                    }
                  </div>

                  <div className="entriesFooter">
                    <EntryForm addEntry={this.addEntry} />
                  </div>
                  


                  {/* <div className="entriesBody"> 
                    {
                      this.state.entries.map((entry) => {
                        return (
                        <Entry entryContent={entry.entryContent} entryId={entry.id} key={entry.id} />
                        )
                      })
                    }
                  </div> */}

                </div>
            </div>

            <div className="homeRight col-md-4">
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