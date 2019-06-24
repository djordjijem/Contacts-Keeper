import React from 'react';
import { Contacts, ContactsForm, ContactFilter } from '../contacts';

function Home() {
  return (
    <div className='grid-2'>
      <div>
        <ContactsForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
}

export { Home };
