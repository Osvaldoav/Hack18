import React, { Component } from 'react';

export default class Pedidos extends React.Component {
  render() {
    return (
      <div>
        {this.props.cafeteria}
      </div>
    );
  }
}