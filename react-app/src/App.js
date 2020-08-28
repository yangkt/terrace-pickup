import React, { Component } from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import './css/App.css';
import BuildBurrito from './BuildBurrito'
import land from './assets/land.png'
import login from './assets/login.png'
import loginbutton from './assets/loginwnetid.png'
import guestbutton from './assets/guestlogin.png'
import macsbutton from './assets/macsbutton.png'
import terracebutton from './assets/terracebutton.png'
import header1 from './assets/header.png'
import header2 from './assets/header2.png'


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
  render() {
    return (
      <MemoryRouter>
        {' '}
        <Switch>
          <Route path="/burrito">
            <Nav2 />
            <BuildBurrito />
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
          <Route path="/">
            <Land />
          </Route>
        </Switch>
            Navigate to{' '}
        <ButtonToolbar className="custom-btn-toolbar">
          <LinkContainer to="/">
            <Button>Home</Button>
          </LinkContainer>
          <LinkContainer to="/burrito">
            <Button>Build Burrito</Button>
          </LinkContainer>
        </ButtonToolbar>
      </MemoryRouter >
    );
  }
}
export default App;
