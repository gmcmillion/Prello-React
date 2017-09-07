import React, { Component } from 'react';

class ShowMenu extends Component {
  render() {		
    return (
      <div id="board-header">
        <p id="boardName">[INSERT BOARD NAME]</p>
        
        <button type="button" id="show-menu-btn">Show Menu</button>
        <div id="mySidenav" className="sidenav">
          {/* <a href="javascript:void(0)" className="close-btn" onClick="closeNav()">&times;</a> */}
          <a href="" className="add-user-btn">Add Users</a>
            {/* Add user input box */}
            <div id="add-user-div" className="">
              <form id="add-user-form">
                <input type="text" id="newUserInput" autoComplete="off" placeholder="Add user email..."/>
                <button type="submit" id="user-submit-btn">Submit</button>
              </form>
            </div>
          <a href="">Activity</a>
        </div> 

        <div id="pos-list-dropdown">
          <button type="button" id="addNewListBtn">Add New List</button>
          <div id="add-list-dropdown" className="list-dropdown-content">
            <form id="list-submit-btn-form">
              <input type="text" id="newListInput" autoComplete="off" placeholder="Add a list..."/>
              <input type="submit"/>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default ShowMenu;