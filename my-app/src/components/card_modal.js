import React, { Component } from 'react';

class CardModal extends Component {
  render() {		
    return (
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
    );
  }
}

export default CardModal;