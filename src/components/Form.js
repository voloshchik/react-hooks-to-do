import React from 'react';

export const Form = () => {
  return (
    <div>
      <form>
        <div className='list-group'></div>
        <input type='text' placeholder='Введите название заметки' className='form-control' />
      </form>
    </div>
  );
};
