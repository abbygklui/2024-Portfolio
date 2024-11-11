import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import './Home.css';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbar" fixed="top">
      <Container className="navs container">
        <Navbar.Brand as={Link} to="/" className="navbar-item"><h2>Abby Lui</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className="ms-auto">
          {/* <Nav.Link as={Link} to="/" className="navbar-item"><h4>Projects</h4></Nav.Link> */}
          {/* <Nav.Link as={Link} to="/patents" className="navbar-item">Patents</Nav.Link> */}
          <Nav.Link as={Link} to="/about" className="navbar-item"><h3>About</h3></Nav.Link>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
