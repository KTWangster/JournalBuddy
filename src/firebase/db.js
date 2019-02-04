import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');


// export const onceEntryMade = (id, entryContent) =>
//   // db.ref('users').once('value');
//   db.ref(`entries/${id}`).set({
//     entryContent,
//   });

// Other db APIs ...
