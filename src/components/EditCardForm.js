import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editCard, displayEditCard } from '../actions/cardsActions';

class EditCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHideEditCard = this.handleHideEditCard.bind(this);
  }

  componentWillMount() {
    this.setState({ card: { ...this.props.cardToEdit } });
  }

  handleChange(event) {
    this.setState({ card: { ...this.state.card, [event.target.name]: event.target.value } });
  }

  handleSubmit(event) {
    this.props.editCard(this.state.card);
    this.handleHideEditCard();
    event.preventDefault();
  }

  handleHideEditCard(event) {
    if (!event || event.target.className === 'hide_popup_button' || event.target.className === 'popup_background') {
      this.props.displayEditCard(false);
    }
  }

  render() {
    return (
      <div className='popup_background' onClick={this.handleHideEditCard}>
        <form id='edit_card_form' onSubmit={this.handleSubmit}>
          <span className='hide_popup_button' onClick={this.handleHideEditCard}>X</span>
          <h2>EDIT CARD</h2>
          <p>Title:</p>
          <input
            type='text'
            onChange={this.handleChange}
            name='title'
            value={this.state.card.title || ``}
            placeholder='Title'
          />
          <p>Assigned by:</p>
          <input
            type='text'
            onChange={this.handleChange}
            name='created_by'
            value={this.state.card.created_by || ``}
            placeholder='Created by'
            className='capitalize'
          />
          <p>Assigned to:</p>
          <input
            type='text'
            onChange={this.handleChange}
            name='assigned_to'
            value={this.state.card.assigned_to || ``}
            placeholder='Assigned to'
            className='capitalize'
          />
          <p>Priority:</p>
          <select
            onChange={this.handleChange}
            value={this.state.card.priority || `low`}
            name='priority'
            size='1'
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="blocker">Blocker</option>
          </select>
          <br />
          <input type='submit' value='Edit Card' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardToEdit: state.cards.cardToEdit,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editCard: card => {
      dispatch(editCard(card));
    },
    displayEditCard: flag => {
      dispatch(displayEditCard(flag));
    }
  }
}

const ConnectedEditCardForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCardForm);

export default ConnectedEditCardForm;