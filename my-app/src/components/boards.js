import React, { Component } from 'react';
import '../styles/boards.css';

import Header from './header';

class Boards extends Component {
  render() {		
    return (
      <div>
        <Header />
        <div id="mainbody">
          <div id="welcome">
            <h1>Welcome [Username here]</h1>
          </div>

          <div id="add-board-dropdown-div">
            <button type="button" id="add-new-board-btn">Add New Board</button>
            {/* Dropdown */}
            <div id="board-dropdown" className="board-dropdown-content">
              <form id="board-form">
                <input type="text" id="name" name="name" autoComplete="off" placeholder="Add a Board..."/>
                <button id="board-submit-btn" type="submit">Submit</button>
              </form>
            </div>
          </div>

          {/* List of boards */}
          <div id="personalBoards">
            <img src={require('../images/personal.png')} alt="personal" />
            <h3>Personal Boards</h3>
          </div>
            
          <div id="boardsList">
            <ul className="ul-boards">

            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Boards;