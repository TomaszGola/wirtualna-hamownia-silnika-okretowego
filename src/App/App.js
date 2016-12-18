import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ProgressBar, Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Logo</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Dane wejściowe</NavItem>
              <NavItem eventKey={2} href="/charakterystyka-zewnetrzna">Ch. zewnętrzna</NavItem>
              <NavItem eventKey={3} href="#">Ch. obciążeniowa</NavItem>
              <NavItem eventKey={4} href="#">Ch. śrubowa</NavItem>
              <NavItem eventKey={4} href="#">Ch. regulatorowa</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={5} href="#">Admin</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React hehe</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LinkContainer to="/dumny">
          <Button>Go dumny</Button>
        </LinkContainer>
        <div>
          <ProgressBar bsStyle="success" now={40} />
        </div>
      </div>
    );
  }
}

export default App;
