import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewBoard extends Component {
  render() {
    return (
      // TODO: Populate all boards from a database
      <Link to="/board">
        <li>
          <button className="board" type="button">[NEW BOARD NAME]</button>
        </li>
      </Link>
    );
  }
}

export default NewBoard;