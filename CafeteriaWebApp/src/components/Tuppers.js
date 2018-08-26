import React, { Component } from 'react';
import SingleUserTupper from './SingleUserTupper';

export default class Tuppers extends Component {
  render() {
    return (
      <div className='tupper'>
        <SingleUserTupper matricula={'A00820175'} dias={'4 dias'}/>
        <SingleUserTupper matricula={'A00804235'} dias={'3 dias'}/>
        <SingleUserTupper matricula={'A02432345'} dias={'3 dias'}/>
        <SingleUserTupper matricula={'A00234115'} dias={'2 dias'}/>
        <SingleUserTupper matricula={'A02223424'} dias={'2 dias'}/>
        <SingleUserTupper matricula={'A00823121'} dias={'2 dias'}/>
        <SingleUserTupper matricula={'A01234144'} dias={'1 dias'}/>
      </div>
    );
  }
}