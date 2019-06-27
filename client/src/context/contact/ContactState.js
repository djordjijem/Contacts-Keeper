import React, { useReducer } from 'react';
import axios from 'axios';
import { ContactContext } from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  GET_CONTACTS,
  CLEAR_CONTACTS,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';

function ContactState(props) {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add contact
  async function addContact(contact) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  }
  //Delete contact
  async function deleteContact(id) {
    try {
      await axios.delete(`/api/contacts/${id}`);

      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  }
  function clearContacts() {
    dispatch({ type: CLEAR_CONTACTS });
  }

  //Set current contact
  function setCurrent(contact) {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    });
  }

  //Clear current contact
  function clearCurrent() {
    dispatch({
      type: CLEAR_CURRENT
    });
  }

  //Update contact
  async function updateContact(contact) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );
      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  }
  //get contacts
  async function getContacts() {
    try {
      const res = await axios.get('/api/contacts');

      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  }
  //Filter contacts
  function filterContacts(text) {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text
    });
  }

  //Clear filter
  function clearFilter() {
    dispatch({
      type: CLEAR_FILTER
    });
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        getContacts,
        filterContacts,
        clearContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}

export { ContactState };
