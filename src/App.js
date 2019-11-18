import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Lightainer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Documentaion</Nav.Link>
        </Nav>
        <Button variant="outline-secondary" href="https://github.com/Lightainer-Project/Lightainer" target="_blank"><FontAwesomeIcon icon={ faGithub } /> Github</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
