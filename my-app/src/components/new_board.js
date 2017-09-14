import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewBoard extends Component {
  render() {
    return (
      <li>
        <Link to={`/board/${this.props.boardid}`}>
          <button className="board" type="button"> { this.props.boardname } </button>
        </Link>
      </li>
    );
  }
}

export default NewBoard;