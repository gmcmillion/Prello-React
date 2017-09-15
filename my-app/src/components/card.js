import React, { Component } from 'react';

class Card extends Component {
  render() {		
    return (
      <li>
        <button className="cardBtn"> 
          <p>{this.props.cardname}</p>
          <div className="lab-colors"></div>
        </button>
      </li>
    );
  }
}

export default Card;