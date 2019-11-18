import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Button, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFile, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><FontAwesomeIcon icon={faBoxOpen} /> Lightainer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faFile} /> Documentaion</Nav.Link>
          </Nav>
          <Button variant="outline-secondary" href="https://github.com/Lightainer-Project/Lightainer" target="_blank"><FontAwesomeIcon icon={faGithub} /> Github</Button>
        </Navbar.Collapse>
      </Navbar>
      <Carousel className="m-4">
        <Carousel.Item>
          <img
            className="d-block w-100 h-20 cover"
            width="1200px"
            height="300px"
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-20 cover"
            width="1200px"
            height="300px"
            src="https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Module Based</h3>
            <p>Easily extensable</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="d-flex flex-column" id="home">
        <div className="ml-auto mr-auto text-center">
          <h1>Lightainer <small className="text-muted">Service Manager</small></h1>
          <p>Lightainer is a module based Service Manager. With it you can start/stop and configure your services.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
