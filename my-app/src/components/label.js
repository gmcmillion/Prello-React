import React, { Component } from 'react';

class Label extends Component {
  render() {
    return (
        <li id={this.props.color} className='label-colors-ind'></li>
    );
  }
}

export default Label;
