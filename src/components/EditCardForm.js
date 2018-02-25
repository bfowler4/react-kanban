import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editCard } from '../actions/cardsActions';

class EditCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ card: { ...nextProps.cardToEdit } });
  }

  handleChange(event) {
    this.setState({ card: { ...this.state.card, [event.target.name]: event.target.value } });
  }

  handleSubmit(event) {
    this.props.editCard(this.state.card);
    this.setState({ card: {} });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          onChange={this.handleChange}
          name='title'
          value={this.state.card.title || ``}
          placeholder='Title'
        />
        <br />
        <input
          type='text'
          onChange={this.handleChange}
          name='created_by'
          value={this.state.card.created_by || ``}
          placeholder='Created by'
        />
        <br />
        <input
          type='text'
          onChange={this.handleChange}
          name='assigned_to'
          value={this.state.card.assigned_to || ``}
          placeholder='Assigned to'
        />
        <br />
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
    }
  }
}

const ConnectedEditCardForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCardForm);

export default ConnectedEditCardForm;