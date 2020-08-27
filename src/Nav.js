import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import './css/Nav.css';
import icon from './assets/icon.jpeg'
import profile from './assets/profile.png'


const CustomNav = () => {
  return (
    <Container>
      <Navbar sticky="top">
        <Navbar.Brand>
          <img src={icon} width="50" alt="terrace and macs logo">
          </img>
        </Navbar.Brand>
        <Nav className="text-frame">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="">Mac's Cafe</Nav.Link>
          <Nav.Link href="">Terrace</Nav.Link>
          <Nav.Link href="">Orders</Nav.Link>
          <Nav.Link href=""> <img src={profile} alt="profile"></img></Nav.Link>

        </Nav>
      </Navbar>
    </Container >
  );
}

export default CustomNav;

