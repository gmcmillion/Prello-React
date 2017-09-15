import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class ShowMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addListMenuActive: false,
      listValue: ''
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.handleListSubmit = this.handleListSubmit.bind(this);
  }

  toggleMenu() {
    let menuState = !this.state.addListMenuActive;
    this.setState({
      addListMenuActive: menuState
    });
  }

  handleListChange(event) {
    this.setState({listValue: event.target.value});
  }

  handleListSubmit(event) {
    event.preventDefault();
    this.toggleMenu();

    //Post new list
    let that = this;
    fetch('http://localhost:3000/board/newlist', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        listName: this.state.listValue,
        boardid: this.props.boardid
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      that.props.action(responseJson);   //Update parent state with response
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {	
    let listMenu;
    if(this.state.addListMenuActive) {
      listMenu = <div id="add-list-dropdown" className="list-dropdown-content">
                    <form id="list-submit-btn-form" onSubmit={this.handleListSubmit}>
                      <input onChange={this.handleListChange} type="text" id="newListInput" autoComplete="off" placeholder="Add a list..."/>
                      <input type="submit"/>
                    </form>
                  </div>
    } else {
      listMenu = "";
    }
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
        {/* Add new list dropdown */}
        <div id="pos-list-dropdown">
          <button type="button" id="addNewListBtn" onClick = { this.toggleMenu }>Add New List</button>
          <CSSTransitionGroup transitionName = "listMenu" transitionEnterTimeout={1} transitionLeaveTimeout={1}>
            {listMenu}
          </CSSTransitionGroup>
        </div>

      </div>
    );
  }
}

export default ShowMenu;