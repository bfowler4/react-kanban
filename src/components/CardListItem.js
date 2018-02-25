import React from 'react';

export default ({ id, title, priority, status, created_by, assigned_to, deleteCard, moveCard, setCardToEdit }) => {
  function handleDelete(event) {
    deleteCard(id);
  }

  function handleEdit(event) {
    setCardToEdit(id);
  }

  function handleMove(event) {
    moveCard(id, event.target.dataset.status);
  }

  return (
    <li className='class_list_item'>
      <h3>{title}</h3>
      <p>Priority: {priority}</p>
      <p>Assigned by: {created_by}</p>
      <p>Assigned to: {assigned_to}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <br/>
      <button data-status='queue' onClick={handleMove}>To queue</button>
      <button data-status='progress'onClick={handleMove}>To progress</button>
      <button data-status='done' onClick={handleMove}>To done</button>
    </li>
  );
}