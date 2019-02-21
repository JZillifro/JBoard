import React from 'react';
import axios from 'axios';
import {BASE_API_URL} from '../common/Constants.jsx';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Navi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      forums: []
    }
  }
  componentDidMount() {
    axios.get(`${BASE_API_URL}/forums/_landing`).then(res => {
      const forums = res.data
      this.setState({forums})
    }).catch(err => {
      console.log(err)
    });

  }
  render() {
    return (
      <NavDropdown eventKey={3} title="Forums" id="basic-nav-dropdown">
        {
          this.state.forums.map((forum, i) => {
            return (
              <MenuItem eventKey={i} href={"/forum/" + forum['_id']}>{forum['title']}</MenuItem>
            )
          })
        }
      </NavDropdown>
    );
  }
}
