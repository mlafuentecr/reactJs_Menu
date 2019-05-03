import Rebase from 're-base'; // mirrow to firebase
import firebase from 'firebase/app';
import 'firebase/database';
import { apiKey } from './basePass';

const firebaseApp = firebase.initializeApp({

    apiKey: {apiKey},
    authDomain: "menu-fish.firebaseapp.com",
    databaseURL: "https://menu-fish.firebaseio.com",
    projectId: "menu-fish",
    // storageBucket: "menu-fish.appspot.com",
    // messagingSenderId: "821774987391"

});


const base = Rebase.createClass(firebaseApp.database());

//this is the name export
export {firebaseApp};

//this is a default export
export default base;
