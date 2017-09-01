import React, { Component } from 'react';

class Header extends Component {
  render() {		
    return (
      <div id="taskbar">
        <ul id="leftTaskBarList">
          <li><button type="button" id="boardTaskBar"><img src={require('../images/boards.png')} alt="boards"/>Boards</button></li>
        </ul>
        <ul id="rightTaskBarList">
          <li><button type="button" id="firstButton">GM</button></li>
          <li><button type="button"><img src={require('../images/bell.png')} alt="bell"/></button></li>
          <li><button type="button"><img src={require('../images/info.png')} alt="info"/></button></li>
          <li><button type="button"><img src={require('../images/plus.png')} alt="plus"/></button></li>
          <li><a href="/logout"><button type="button" id="logout-btn">Log Out</button></a></li>
        </ul>
      </div>
    );
  }
}

export default Header;