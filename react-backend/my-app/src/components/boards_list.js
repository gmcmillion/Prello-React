import React, { Component } from 'react';
import NewBoard from './new_board';

class BoardList extends Component {
  render() {		
    return (
      <div>
        <div id="personalBoards">
          <img src={require('../images/personal.png')} alt="personal" />
          <h3>Personal Boards</h3>
        </div>
        <div id="boardsList">
          <ul className="ul-boards">
            {/* TEST NEWBOARD */}
            <NewBoard />
          </ul>
        </div>
      </div>
    );
  }
}

export default BoardList;