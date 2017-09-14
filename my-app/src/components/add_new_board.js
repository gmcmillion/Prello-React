import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class AddBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
      value: ''
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.toggleMenu();

    //Post new board
    let that = this;
    fetch('http://localhost:3000/boards/newboard', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.value,
        userid: this.props.authorid,
        username: this.props.username
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      that.props.action(responseJson);   //Update parent state with response
    })
    .catch((error) => {
      console.error(error);
    });
    this.resetForm();
  }

  resetForm = () => { 
    this.setState({ value: '' });
  }

  render() {
    let menu;
    if(this.state.menuActive) {
      menu = <div id="add-board-dropdown-div">
                <div id="board-dropdown" className="board-dropdown-content">
                  <form id="board-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} id="name" name="name" autoComplete="off" placeholder="Add a Board..."/>
                    <button id="board-submit-btn" type="submit">Submit</button>
                  </form>
                </div>
              </div>
    } else {
      menu = "";
    }
    return (
      <div id = "menu">
        <button type="button" id="add-new-board-btn" onClick = { this.toggleMenu }>Add New Board</button>
        <CSSTransitionGroup transitionName = "menu" transitionEnterTimeout={1} transitionLeaveTimeout={1}>
          {menu}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default AddBoard;