import React, { Component } from 'react';
import LeftPanel from './LeftPanel';
import firebase from 'firebase';

export default class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyC5Krk8fIY2fJFNbiODvXlslj9x97HsAko',
      authDomain: 'loyalty-eb0a2.firebaseapp.com',
      databaseURL: 'https://loyalty-eb0a2.firebaseio.com',
      projectId: 'loyalty-eb0a2',
      storageBucket: 'loyalty-eb0a2.appspot.com',
      messagingSenderId: '123456789',
    });
  }

  render() {
    /*
    firebase.initializeApp({
      apiKey: 'AIzaSyC5Krk8fIY2fJFNbiODvXlslj9x97HsAko',
      authDomain: 'loyalty-eb0a2.firebaseapp.com',
      databaseURL: 'https://loyalty-eb0a2.firebaseio.com',
      projectId: 'loyalty-eb0a2',
      storageBucket: 'loyalty-eb0a2.appspot.com',
      messagingSenderId: '123456789',
    });
    */
    return (
      <div>
        <LeftPanel/>
      </div>
    );
  }
}
