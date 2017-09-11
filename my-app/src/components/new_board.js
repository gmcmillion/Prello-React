import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewBoard extends Component {
  render() {
    return (
      // TODO: Fix link for appropriate board display
      <li>
        <Link to="/board">
          <button className="board" type="button"> { this.props.boardname } </button>
        </Link>
      </li>
    );
  }
}

export default NewBoard;