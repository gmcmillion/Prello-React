import React, { Component } from 'react';

class AddCard extends Component {
  render() {		
    return (
      <div className="addCardDropdown carddropdown-content" id="popup">
        <form className="submit-btn-form">
          <input type="text" className="newCardInput" autoComplete="off" placeholder="Enter Description..."/>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddCard;




