import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <Navbar fixedTop = {true} collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Home</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Top of page
              </NavItem>
              <NavItem eventKey={2} href="#">
                Bottom of page
              </NavItem>
              <NavDropdown eventKey={3} title="Forums" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href={"/computer_science"}>computer_science</MenuItem>
                <MenuItem eventKey={3.2} href={"/memes"}>memes</MenuItem>
                <MenuItem eventKey={3.3} href={"/movies"}>movies</MenuItem>
                {/* <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
