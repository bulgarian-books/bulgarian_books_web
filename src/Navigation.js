import React, { Component} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

class Navigation extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Bulgarian Books!</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav className="flex-row">
          <NavItem style={{margin: '10px'}} eventKey={1} href="#">
           Home 
          </NavItem>
          <NavItem style={{margin: '10px'}} eventKey={2} href="#">
            Books
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Изход
          </NavItem>
        </Nav>
     </Navbar>    );
  }
}

export default Navigation;
