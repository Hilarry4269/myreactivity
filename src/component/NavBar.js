import React from 'react';
import { Link } from 'react-router-dom';

function Navbar ()  {
  return (
    <header>
    <nav>
    <div className="navbar-buttons">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;