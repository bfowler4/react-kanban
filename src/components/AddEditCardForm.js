import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCard, editCard, displayAddEditCard } from '../actions/cardsActions';


class AddEditCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: {
        title: ``,
        priority: `low`,
        created_by: ``,
        assigned_to: ``
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHideAddEditCard = this.handleHideAddEditCard.bind(this);
  }

  componentWillMount() {
    if (this.props.addOrEdit === `edit`) {
      this.setState({ card: { ...this.props.cardToEdit } });
    }
  }

  handleChange(event) {
    this.setState({ card: { ...this.state.card, [event.target.name]: event.target.value } });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.props.addOrEdit === `add`) {
      let { title, priority, created_by, assigned_to } = this.state.card;
      this.props.addCard({ title, priority, created_by, assigned_to });
    } else {
      this.props.editCard(this.state.card);
    }

    this.handleHideAddEditCard();
  }

  handleHideAddEditCard(event) {
    if (!event || event.target.className === 'hide_popup_button' || event.target.className === 'popup_background') {
      this.props.displayAddEditCard(false);
    }
  }

  render() {
    return (
      <div className='popup_background' onClick={this.handleHideAddEditCard}>
        <form id='add_edit_card_form' onSubmit={this.handleSubmit}>
          <span className='hide_popup_button' onClick={this.handleHideAddEditCard}>X</span>
          <h2>{this.props.addOrEdit === `add` ? 
            `CREATE CARD` : `EDIT CARD`}
          </h2>
          <p>Title:</p>
          <input
            type='text'
            onChange={this.handleChange}
            name='title'
            value={this.state.card.title}
            placeholder='What needs to be done'
          />
          <p>Assigned by:</p>
          <input
            type='text'
            onChange={this.handleChange}
            name='created_by'
            value={this.state.card.created_by}
            placeholder='Who is creating this'
            className='capitalize'
          />
          <p>Assigned to:</p>
          <input
            type='text'
            onChange={this.handleChange}
            name='assigned_to'
            value={this.state.card.assigned_to}
            placeholder='Who is handling this'
            className='capitalize'
          />
          <p>Priority:</p>
          <select
            onChange={this.handleChange}
            value={this.state.card.priority}
            name='priority'
            size='1'
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="blocker">Blocker</option>
          </select>
          <br />
          <input type='submit' 
            value={this.props.addOrEdit === `add` ?
              `Submit Card` : `Update Card`}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardToEdit: state.cards.cardToEdit,
    addOrEdit: state.cards.displayAddEditCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: card => {
      dispatch(addCard(card));
    },
    editCard: card => {
      dispatch(editCard(card));
    },
    displayAddEditCard: flag => {
      dispatch(displayAddEditCard(flag));
    }
  }
}

const ConnectedAddEditCardForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEditCardForm);

export default ConnectedAddEditCardForm;