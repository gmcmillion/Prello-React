import React, { Component } from 'react';

class AddBoard extends Component {
  render() {		
    return (
      <div id="add-board-dropdown-div">

        {/* Dropdown */}
        <button type="button" id="add-new-board-btn">Add New Board</button>
        <div id="board-dropdown" className="board-dropdown-content">
          <form id="board-form">
            <input type="text" id="name" name="name" autoComplete="off" placeholder="Add a Board..."/>
            <button id="board-submit-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>    
    );
  }
}

export default AddBoard;