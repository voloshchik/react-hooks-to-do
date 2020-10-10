import React from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';

export const Home = () => {
  const notes = Array(4)
    .fill('')
    .map((_, i) => ({ id: i, title: i + 1 }));
  console.log('notes', notes);
  return (
    <div>
      <Form />
      <hr />
      <Notes notes={notes} />
    </div>
  );
};
