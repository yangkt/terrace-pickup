import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import './css/App.css';
import BuildBurrito from './BuildBurrito'
import RestaurantSide from './RestaurantSide'

import land from './assets/land.png'
import login from './assets/login.png'
import loginbutton from './assets/loginwnetid.png'
import guestbutton from './assets/guestlogin.png'
import macsbutton from './assets/macsbutton.png'
import terracebutton from './assets/terracebutton.png'
import header1 from './assets/header.png'
import header2 from './assets/header2.png'
import header3 from './assets/header3.png'

import staff from './assets/staff.png'


const Nav1 = () => {
  return (
    <Navbar sticky="top">
      <img src={header1} alt="fake header"></img>
    </Navbar>
  );
}

const Nav2 = () => {
  return (
    <Navbar sticky="top">
      <img src={header2} alt="fake header"></img>
    </Navbar>
  );
}

const NavStaff = () => {
  return (
    <Navbar sticky="top">
      <img src={header3} alt="fake header"></img>
    </Navbar>
  );
}

const Land = () => {
  return (
    <span>
      <Nav1 />
      <img src={land} alt="landing page" width="100%" height="100%" >
      </img>
      <LinkContainer to="/login">
        <img className="login-button" src={loginbutton} alt="login"></img>
      </LinkContainer>
      <img className="guest-login" src={guestbutton} alt="guest"></img>
      <LinkContainer to="/staff">
        <img className="staff-button" src={staff} alt="staff login"></img>
      </LinkContainer>
    </span>
  );
}

const Land2 = () => {
  return (
    <span>
      <Nav1 />

      <img src={land} alt="second landing page" width="100%" height="100%" >
      </img>
      <LinkContainer to="/burrito">
        <img className="terrace-button" src={terracebutton} alt="terrace button"></img>
      </LinkContainer>
      <img className="mac-button" src={macsbutton} alt="macs button"></img>
    </span>
  );
}


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        order: ''
    }
  }


  addIng = (input) => {
    this.setState({ order: this.state.order + input})
  }

  render() {
    return (
      <Router>
        {' '}
        <Switch>
          <Route exact path="/">
            <Land />
          </Route>
          <Route path="/burrito">
            <Nav2 />
            <BuildBurrito addIngredient = {this.addIng}/>
          </Route>
          <Route path="/login">
            <LinkContainer to="/land2">
              <img src={login} alt="login page" width="100%" height="100%" >
              </img>
            </LinkContainer>
          </Route>
          <Route path="/land2">
            <Land2 />
          </Route>
          <Route path="/staff">
            <NavStaff />
            <RestaurantSide order = {this.state.order}/>
          </Route>
        </Switch>
            Navigate to{' '}
        <ButtonToolbar className="custom-btn-toolbar">
          <LinkContainer to="/">
            <Button>Home</Button>
          </LinkContainer>
          <LinkContainer to="/staff">
            <Button>staff site</Button>
          </LinkContainer>
        </ButtonToolbar>
      </Router >
    );
  }
}
export default App;
