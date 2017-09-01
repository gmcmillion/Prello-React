import React, { Component } from 'react';
import '../styles/board.css';

import Header from './header';

class Board extends Component {
  render() {		
    return (
      <div id="body">
        <Header />
        <div id="board-header">
          <p id="boardName">[INSERT NAME]</p>
          
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

        <div id="Listdiv">
          <ul id="list">
            {/* LISTS GO HERE */}
          </ul>
        </div> 

        {/*  My Modal */}
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="card-left-side">
              <div id="card-name">
                <p>This is the card name (make editable)</p>
              </div>
              <div>
                <h3 id="description">Edit the description...</h3>
              </div>
              <div className="addComment">
                <h3>Comments:</h3>
                {/* To hold comments */}
                <div id="comments"></div>
                <h4>Add Comment:</h4>
                <form id="comment-form">
                  <input type="text" placeholder="Write a comment..." id="comm"/>
                </form>
                <button type="button" id="add-comment-button">Send</button>
              </div>
              <div id="labels">
                <h3>Labels:</h3>
                <div id="label-colors">
                </div>
              </div>
              <div id="author-div">
                <h3>Author (Username):</h3>
                <p id="author"></p>
              </div> 
            </div>
            <div className="card-right-side">
              <span className="close">&times;</span>
              <div>
                <button type="button" id="delete-card-btn">Delete Card</button>
                <button type="button" id="label-btn">Labels</button>
                <div id="labeldropdown" className="label-dropdown-content">
                  <button id="green"></button>
                  <button id="yellow"></button>
                  <button id="orange"></button>
                  <button id="red"></button>
                  <button id="purple"></button>
                  <button id="blue"></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Card drop down  */}
        <div className="addCardDropdown carddropdown-content" id="popup">
          <form className="submit-btn-form">
            <input type="text" className="newCardInput" autoComplete="off" placeholder="Enter Description..."/>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Board;