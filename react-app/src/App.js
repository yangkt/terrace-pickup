import React, { Component } from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import './css/App.css';
import BuildBurrito from './BuildBurrito'
import land from './assets/land.png'


class App extends Component {
  render() {
    return (
      <MemoryRouter>
        {' '}
        <Switch>
          <Route path="/burrito">
            <BuildBurrito />
          </Route>
          <Route path="/">
            <img src={land} alt="landing page" width="100%" height="100%" ></img>
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
