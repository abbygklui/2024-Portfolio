import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbar" fixed="top">
      <Container className="navs">
        <Navbar.Brand as={Link} to="/" className="navbar-item"><h4>Abby Lui</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="navbar-item">Projects</Nav.Link>
            {/* <Nav.Link as={Link} to="/patents" className="navbar-item">Patents</Nav.Link> */}
            <Nav.Link as={Link} to="/about" className="navbar-item">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
