import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGlassWhiskey } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <FontAwesomeIcon icon={faHome} />
                Home
            </Link>
            <Link to="/my-collection">
                <FontAwesomeIcon icon={faGlassWhiskey} />
                My Collection
            </Link>
        </nav>
    );
};

export default Navbar;