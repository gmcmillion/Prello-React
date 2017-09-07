import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

class AddBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render() {
    let menu;
    if(this.state.menuActive) {
      menu = <div id="add-board-dropdown-div">
                <div id="board-dropdown" className="board-dropdown-content">
                  <form id="board-form">
                    <input type="text" id="name" name="name" autoComplete="off" placeholder="Add a Board..."/>
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