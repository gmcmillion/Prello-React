import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class CardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelDropdownActive: false
    };

    this.toggleLabelDropdown = this.toggleLabelDropdown.bind(this);
    this.handleClose = this.handleClose.bind(this);    
  }

  toggleLabelDropdown() {
    let menuState = !this.state.labelDropdownActive;
    this.setState({
      labelDropdownActive: menuState
    });
  }

  handleClose() {
    this.props.action();
  }

  render() {		
    let labelDropdown;
    if(this.state.labelDropdownActive) {
      labelDropdown = <div id="labeldropdown" className="label-dropdown-content">
                        <button id="green"></button>
                        <button id="yellow"></button>
                        <button id="orange"></button>
                        <button id="red"></button>
                        <button id="purple"></button>
                        <button id="blue"></button>
                      </div>
    } else {
      labelDropdown = "";
    }

    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="card-left-side">
            <div id="card-name">
              <p>{this.props.cardName}</p>
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
          <button type="button" className="close" onClick={this.handleClose}>&times;</button>
            <div>
              <button type="button" id="delete-card-btn">Delete Card</button>
              <button type="button" id="label-btn" onClick = { this.toggleLabelDropdown }>Labels</button>
              <CSSTransitionGroup transitionName = "labelDropDown" transitionEnterTimeout={1} transitionLeaveTimeout={1}>
                {labelDropdown}
              </CSSTransitionGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardModal;