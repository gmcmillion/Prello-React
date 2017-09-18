import React, { Component } from 'react';

class Label extends Component {
  render() {
    const labelStyle = {
      width: '50px',
      height: '20px',
      borderRadius: '4px',
      margin: '0px'
    };

    return (
        <p id={this.props.color} style={labelStyle}></p>
    );
  }
}

export default Label;
