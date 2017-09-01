import React, { Component } from 'react';

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
          </ul>
        </div>
      </div>
    );
  }
}

export default BoardList;