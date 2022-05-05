import React from 'react';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/' >Home</Nav.Link>
      <Nav.Link as={Link} to='/contacts' >Contacts</Nav.Link>
      <Nav.Link as={Link} to='/addcontact' >Add Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navigation