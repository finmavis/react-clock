import React from 'react';

const Header = (props) => (
    <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-center">
        <a className="navbar-brand" href="/"><i className="fas fa-clock"></i> {props.title}</a>
    </nav>
);

export default Header;