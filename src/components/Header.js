import React from 'react';

const Header = ({ icon, title }) => (
  <nav className='navbar navbar-expand navbar-dark bg-dark justify-content-center'>
    <a className='navbar-brand' href='/'>
      <i className={icon} /> {title}
    </a>
  </nav>
);

export default Header;
