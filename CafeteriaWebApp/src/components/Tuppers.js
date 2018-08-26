import React, { Component } from 'react';
import SingleUserTupper from './SingleUserTupper';
import firebase from 'firebase';

export default class Tuppers extends Component {

  constructor(props) {
    super(props);
    this.state = {tuppers: []};
  }

  componentWillMount() {
    const db = firebase.firestore();
    db.collection('tuppersPendientes').onSnapshot((snap) => {
      let tups = [];
      snap.docs.forEach((doc) => {
        tups.push(doc.data());
      })
      this.setState({tuppers: tups});
    });

  }

  getTupperCards() {
    const cards = this.state.tuppers;
    let tuppers = [];
    cards.forEach((tupper) => {
      tuppers.push(<SingleUserTupper matricula='mariano' dias={'4 dias'}/>);
    });
    return tuppers;
  }

  render() {
    return (
      <div className='tupper'>
        {this.getTupperCards()}
      </div>
    );
  }
}