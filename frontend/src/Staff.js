import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Staff = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Logo</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/kk.js">KK</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ii.js">II</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pp.js">PP</Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/uu.js">UU</Link>
              <Link className="dropdown-item" to="/yyyyy.js">YYYYY</Link>
              <Link className="dropdown-item" to="/yuy.js">YUY</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Staff;
