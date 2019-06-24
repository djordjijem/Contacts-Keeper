import React, { useContext } from 'react';
import { ContactContext } from '../../context/contact';
import { ContactsItem } from './ContactsItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Contacts() {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (!contacts.length) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <>
      <TransitionGroup>
        {filtered
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactsItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactsItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </>
  );
}

export { Contacts };
