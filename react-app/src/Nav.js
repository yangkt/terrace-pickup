import React from 'react';
import { Navbar } from 'react-bootstrap'
import './css/Nav.css';
import icon from './assets/icon.jpeg'
import profile from './assets/profile.png'
import header from './assets/header.png'


const CustomNav = () => {

  return (
    <Navbar sticky="top">
      <img src={header} alt="fake header"></img>
    </Navbar>
  );
}

export default CustomNav;

