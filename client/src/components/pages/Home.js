import React, { useContext, useEffect } from 'react';
import { Contacts, ContactsForm, ContactFilter } from '../contacts';
import { AuthContext } from '../../context';

function Home() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.login();
    //eslint-disable-next-line
  }, []);

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
