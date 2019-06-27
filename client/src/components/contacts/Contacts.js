import React, { useContext, useEffect } from 'react';
import { ContactContext } from '../../context';
import { ContactsItem } from './ContactsItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Spinner } from '../layout';

function Contacts() {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered
            ? filtered.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactsItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactsItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export { Contacts };
