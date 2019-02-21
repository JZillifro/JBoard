import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import ForumDropdown from '../Navi/ForumDropdown'
import AboutModal from '../Footer/AboutModal';

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
              <NavItem eventKey={1} href="#top">
                Top of page
              </NavItem>
              <NavItem eventKey={1} href="/discover">
                Discover
              </NavItem>
              <ForumDropdown/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
