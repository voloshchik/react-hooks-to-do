import React, { useContext, useEffect } from 'react';
import { Form } from '../components/Form';
import { Loader } from '../components/Loader';
import { Notes } from '../components/Notes';
import { FirebaseContext } from '../context/alert/firebase/firebaseContext';

export const Home = () => {
  const { notes, loading, fetchNotes, removeNote } = useContext(FirebaseContext);
  useEffect(() => {
    fetchNotes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('notes', notes);
  return (
    <div>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </div>
  );
};
