import React, { Component } from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { Container, Jumbotron, Button } from 'react-bootstrap'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import './css/App.css';
import BuildBurrito from './BuildBurrito';

const Home = () => <span>Home</span>;

const Mac = () => <span>Mac's Cafe</span>;

const Terrace = () => <span>Terrace</span>;

class App extends Component {
  render() {
    return (
      <MemoryRouter>
        <Container className="p-3">
          <Jumbotron>
            <h1 className="header">Welcome To React-Bootstrap</h1>
            <h2>
              Current Page is{' '}
              <Switch>
                <Route path="/macs">
                  <Mac />
                </Route>
                <Route path="/terrace">
                  <Terrace />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </h2>
            <h2>
              Navigate to{' '}
              <ButtonToolbar className="custom-btn-toolbar">
                <LinkContainer to="/">
                  <Button>Home</Button>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Button>Mac's Cafe</Button>
                </LinkContainer>
                <LinkContainer to="/users">
                  <Button>Terrace</Button>
                </LinkContainer>
              </ButtonToolbar>
            </h2>
          </Jumbotron>
        </Container>
        <BuildBurrito>
          
        </BuildBurrito>

      </MemoryRouter>
    );
  }
}
export default App;
