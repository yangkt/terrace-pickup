import React, { Component } from 'react';
// import { MemoryRouter, Switch, Route } from 'react-router-dom';
// import { Container, Jumbotron, Button } from 'react-bootstrap'
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { LinkContainer } from 'react-router-bootstrap';
import './css/App.css';
import land from './assets/land.png'

const Home = () => <span>Home</span>;

const Mac = () => <span>Mac's Cafe</span>;

const Terrace = () => <span>Terrace</span>;

class App extends Component {
  render() {
    return (
      <img src={land} alt="landing page" width="100%" height="100%" ></img>
      // <MemoryRouter>
      //   <Container className="p-3">
      //     <Jumbotron>
      //       <h1 className="header">Welcome To React-Bootstrap</h1>
      //       <h2>
      //         Current Page is{' '}
      //         <Switch>
      //           <Route path="/macs">
      //             <Mac />
      //           </Route>
      //           <Route path="/terrace">
      //             <Terrace />
      //           </Route>
      //           <Route path="/">
      //             <Home />
      //           </Route>
      //         </Switch>
      //       </h2>
      //       <h2>
      //         Navigate to{' '}
      //         <ButtonToolbar className="custom-btn-toolbar">
      //           <LinkContainer to="/">
      //             <Button>Home</Button>
      //           </LinkContainer>
      //           <LinkContainer to="/about">
      //             <Button>Mac's Cafe</Button>
      //           </LinkContainer>
      //           <LinkContainer to="/users">
      //             <Button>Terrace</Button>
      //           </LinkContainer>
      //         </ButtonToolbar>
      //       </h2>
      //     </Jumbotron>
      //   </Container>
      // </MemoryRouter>
    );
  }
}
export default App;
