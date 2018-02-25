import React from 'react';

export default ({ addCard }) => {
  let inputs = {
    title: ``,
    priority: `low`,
    created_by: ``,
    assigned_to: ``
  }
  const addCardForm = document.getElementById(`add_card_form`);

  function handleChange(event) {
    inputs[event.target.name] = event.target.value;
  }

  function handleSubmit(event) {
    addCard({ ...inputs });
    addCardForm.reset();
    Object.keys(inputs).forEach(key => {
      inputs[key] = ``;
    });
    event.preventDefault();
  }

  return (
    <form id='add_card_form' onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} name='title' placeholder='Title'/>
      <br/>
      <input type='text' onChange={handleChange} name='created_by' placeholder='Created by'/>
      <br/>
      <input type='text' onChange={handleChange} name='assigned_to' placeholder='Assigned to'/>
      <br/>
      <select onChange={handleChange} name='priority' size='1'>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="blocker">Blocker</option>
      </select>
      <br/>
      <input type='submit' value='Add Card'/>
    </form>
  );
}