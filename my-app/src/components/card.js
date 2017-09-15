import React, { Component } from 'react';
import CardModal from './card_modal';
import { CSSTransitionGroup } from 'react-transition-group';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardModalActive: false,
    };

    this.toggleCardModal = this.toggleCardModal.bind(this);
  }

  toggleCardModal() {
    let menuState = !this.state.cardModalActive;
    this.setState({
      cardModalActive: menuState
    });
  }

  render() {		
    let cardModal;
    if(this.state.cardModalActive) {
      cardModal = <CardModal cardName={this.props.cardname} action={this.toggleCardModal}/> 
    } else {
      cardModal = "";
    }
    return (
      <li>
        <button className="cardBtn" onClick = { this.toggleCardModal }> 
          <p>{this.props.cardname}</p>
          <div className="lab-colors"></div>
        </button>
        <CSSTransitionGroup transitionName = "cardModal" transitionEnterTimeout={1} transitionLeaveTimeout={1}>
          {cardModal}
        </CSSTransitionGroup>
      </li>
    );
  }
}

export default Card;