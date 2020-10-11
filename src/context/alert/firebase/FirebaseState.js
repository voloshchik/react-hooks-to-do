import React, { useReducer } from 'react';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import { SHOW_LOADER, REMOVE_NOTE } from '../../types';
import Axios from 'axios';

const url = process.env.REACT_APP_DB_URL;
console.log('url', url);
export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const fetchNotes = async () => {
    showLoader();
    const res = await Axios.get(`${url}/notes.json`);
    console.log('fetchNotes', res.data);
  };

  const addNote = async (title) => {
    try {
      const note = {
        title,
        date: new Date().toJSON(),
      };
      const res = await Axios.post(`${url}/notes.json`, note);
      console.log('addNote', res.data);
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const removeNote = async (id) => {
    await Axios.delete(`${url}/notes/${id}.json`);
    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
