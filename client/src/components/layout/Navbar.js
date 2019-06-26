import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FaIdCardAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';
import { FaSignOutAlt } from 'react-icons/fa';

function Navbar({ title }) {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;
  const authLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <li>
        <a href='#!'>
          <FaSignOutAlt /> <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </>
  );
  const guestLinks = (
    <>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <FaIdCardAlt />
        {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};
Navbar.defaultProps = {
  title: 'Contact Keeper'
};

export { Navbar };
