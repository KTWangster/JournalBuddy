import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Log In
export const doLogInWithEmailAndPassword = (email, password) =>
    auth.logInWithEmailAndPassword(email, password);

// Log out
export const doLogOut = () =>
    auth.logOut();

// Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);

// Google Login
// export const doGoogleLogin = () =>
//   auth.loginWithGoogle();