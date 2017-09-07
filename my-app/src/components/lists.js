import React, { Component } from 'react';
import Card from './card';

class Lists extends Component {
  render() {		
    return (
      <div id="Listdiv">
        <ul id="list">
          {/* LISTS GO HERE */}
          <li>
            <div className="outer-li">
              <div className="ListHeader">
                <p>[Some text]</p>
                <button type="button" className="xbtn">&times;</button>
              </div>
              <div>
                <ul className="inner-list">
                  {/* CARDS GO HERE */}
                  <Card />
                </ul>
                <div className="carddropdown">
                  <button type="button" className="addNewCardbtn">Add a card...</button>
                </div >
              </div>
            </div>
          </li>
        </ul>
      </div> 
    );
  }
}

export default Lists;