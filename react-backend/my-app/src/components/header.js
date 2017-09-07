import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {		
    return (
      <div id="taskbar">
        <ul id="leftTaskBarList">
          <li>
            <Link to="/boards">
              <button type="button" id="boardTaskBar">
                <img src={require('../images/boards.png')} alt="boards"/>
                Boards
              </button>
            </Link>
          </li>
        </ul>

        <ul id="rightTaskBarList">
          <li><button type="button" id="firstButton">GM</button></li>
          <li>
            <Link to="/">
              <button type="button" id="logout-btn">Log Out</button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;