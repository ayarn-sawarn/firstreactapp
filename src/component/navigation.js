import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a href="/" className="nav-link">
            Dropdown
          </a>
          <div className="dropdown-content">
            <a href="/">Option 1</a>
            <a href="/">Option 2</a>
            <a href="/">Option 3</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="/">About</a>
        </li>
        <li className="nav-item">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
