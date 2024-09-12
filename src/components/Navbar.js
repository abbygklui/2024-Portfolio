import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';  // Ensure your custom CSS is imported

function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbar" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-item">Abby Lui</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto pushes the Nav items to the right */}
            <Nav.Link as={Link} to="/" className="navbar-item">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="navbar-item">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
