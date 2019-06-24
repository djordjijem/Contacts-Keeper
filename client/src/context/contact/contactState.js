import React, { useReducer } from 'react';
import uuid from 'uuid';
import { ContactContext } from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

function ContactState(props) {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'James Johnson',
        email: 'james@j.com',
        phone: '111-111-111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Mike Johnson',
        email: 'mike@j.com',
        phone: '111-111-111',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Jane Johnson',
        email: 'jane@j.com',
        phone: '111-111-111',
        type: 'professional'
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add contact
  function addContact(contact) {
    contact.id = uuid.v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  }
  //Delete contact
  function deleteContact(id) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
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
  function updateContact(contact) {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
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
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}

export { ContactState };
