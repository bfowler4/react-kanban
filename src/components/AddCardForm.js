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
    addCard({ ...inputs });
    hideCardForm();
    event.preventDefault();
  }

  return (
    <div className='popup_background' onClick={hideCardForm}>
      <div className='add_card_popup'>
        <span onClick={hideCardForm} className='hide_popup_button'>X</span>
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
      </div>
    </div>
  );
}