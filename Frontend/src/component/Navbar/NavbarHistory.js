import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../Image/fbaae94605124c37a844022e469ca0e1.png';
import './Navbar.css';

const NavbarHistory = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <HomeIcon style={{ fontSize: 30 }} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="Home">
                  You&apos;re in INDIA
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="Our Products"
                >
                  Our Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="Our Products"
                >
                  Promotions
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to="Our Products"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="Our Products"
                >
                  Help
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Search"
                >
                  <SearchIcon />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="px-9">
                <Link
                  to={{
                    pathname: '/CreateUser',
                  }}
                  className="btn btn-success "
                  id="navcreate"
                  style={{ border: '0px' }}
                >
                  Create User
                </Link>
                <Link
                  className="btn btn-success "
                  to="/Customerlist"
                  id="navcreate"
                >
                  Transfer
                </Link>
              </li>
              <li>
                <img className="img" src={logo} alt="logo" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarHistory;
