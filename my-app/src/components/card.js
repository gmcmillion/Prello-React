import React, { Component } from 'react';

class Card extends Component {
  render() {		
    return (
      <li>
        <button className="cardBtn"> 
          <p>[SOME DESCRIPTION]</p>
          <div className="lab-colors"></div>
        </button>
      </li>
    );
  }
}

export default Card;