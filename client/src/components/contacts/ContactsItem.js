import React, { useContext } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ContactContext } from '../../context/contact';

function ContactsItem({ contact }) {
  const { id, name, email, phone, type } = contact;
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  function onDelete() {
    deleteContact(id);
    clearCurrent();
  }

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <FaEnvelope />
            {email}
          </li>
        )}
        {phone && (
          <li>
            <FaPhone />
            {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
}

ContactsItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export { ContactsItem };
