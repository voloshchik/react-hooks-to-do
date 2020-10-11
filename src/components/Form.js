import React, { useState, useContext } from 'react';

import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/alert/firebase/firebaseContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);
  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => {
          alert.show('Заметка была создана', 'success');
        })
        .catch(() => {
          alert.show('что-то пошло не так', 'danger');
        });

      setValue('');
    } else {
      alert.show('Введите название заметки!!!');
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='list-group'></div>
        <input
          type='text'
          placeholder='Введите название заметки'
          className='form-control'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};
