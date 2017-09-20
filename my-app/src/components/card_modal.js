import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Label from './label';

class CardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelDropdownActive: false,
      labels: []
    };

    this.toggleLabelDropdown = this.toggleLabelDropdown.bind(this);
    this.handleClose = this.handleClose.bind(this);  
    this.handleDelete = this.handleDelete.bind(this);   
    this.labelHandler = this.labelHandler.bind(this); 
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

  handleDelete(event) {
    this.props.delete(this.props.cardid);
  }

  // POST a new label
  labelHandler(event) {
    this.toggleLabelDropdown(); //Close dropdown

    var that = this;
    fetch(`http://localhost:3000/board/newlabel/${this.props.cardid}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        color: event.target.id
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      var tempArray = that.state.labels.slice();
      tempArray.push(responseJson);
      this.setState({labels: tempArray});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  // GET all labels for selected card
  componentDidMount() {
    var that = this;
    fetch(`http://localhost:3000/board/labels/${this.props.cardid}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      that.setState({ labels: responseJson }); 
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {		
    let labelDropdown;
    if(this.state.labelDropdownActive) {
      labelDropdown = <div id="labeldropdown" className="label-dropdown-content">
                        <button id="green" onClick={this.labelHandler}></button>
                        <button id="yellow" onClick={this.labelHandler}></button>
                        <button id="orange" onClick={this.labelHandler}></button>
                        <button id="red" onClick={this.labelHandler}></button>
                        <button id="purple" onClick={this.labelHandler}></button>
                        <button id="blue" onClick={this.labelHandler}></button>
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
                <input type="text" placeholder="Write a comment..."/>
                <input type="submit" id="add-comment-button"/>
              </form>
            </div>


            <div id="labels">
              <h3>Labels:</h3>
              <ul id="label-colors">
                {this.state.labels.map((label, index) =>
                  <Label key={index}
                    color={label.color}/>
                )}
              </ul>
            </div>
            <br />
            <div id="author-div">
              <h3>Author:</h3>
              <p id="author">{this.props.cardauthor}</p>
            </div> 
          </div>
          <div className="card-right-side">
          <button type="button" className="close" onClick={this.handleClose}>&times;</button>
            <div>
              <button type="button" id="delete-card-btn" onClick={this.handleDelete}>Delete Card</button>
              <button type="button" id="label-btn" onClick={this.toggleLabelDropdown}>Labels</button>
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