import React from 'react';

export default ({ addCard, hideCardForm }) => {
  let inputs = {
    title: ``,
    priority: `low`,
    created_by: ``,
    assigned_to: ``
  }

  function handleChange(event) {
    inputs[event.target.name] = event.target.value;
  }

  function handleSubmit(event) {
    event.preventDefault();
    addCard({ ...inputs });
    hideCardForm();
  }

  return (
    <div className='popup_background' onClick={hideCardForm}>
      <form id='add_card_form' onSubmit={handleSubmit}>
        <span onClick={hideCardForm} className='hide_popup_button'>X</span>
        <h2>CREATE CARD</h2>
        <p>Title:</p>
        <input type='text' onChange={handleChange} name='title' placeholder='What needs to get done' />
        <p>Assigned by:</p>
        <input type='text' onChange={handleChange} name='created_by' placeholder='Who is creating this' />
        <p>Assigned to:</p>
        <input type='text' onChange={handleChange} name='assigned_to' placeholder='Who is handling this' />
        <p>Priority:</p>
        <select onChange={handleChange} name='priority' size='1'>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="blocker">Blocker</option>
        </select>
        <br />
        <input type='submit' value='Submit Card' />
      </form>
    </div>
  );
}