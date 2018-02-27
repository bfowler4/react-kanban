import React from 'react';

export default ({ handleDisplayAddCard }) => {
  return (
    <div className='header_container'>
      <p>KANBAN</p>
      <span onClick={handleDisplayAddCard}>+ NEW TASK</span>
    </div>
  )
}