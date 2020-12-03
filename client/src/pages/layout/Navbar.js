/** @format */

import React from 'react';
import NavLinks from './NavLinks';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Header = () => {
  return (
    <Navbar className="user-app-navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <p>Navbar</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <NavLinks />
      </Container>
    </Navbar>
  );
};

export default Header;
