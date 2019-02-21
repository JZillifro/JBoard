import React from 'react';
import axios from 'axios';
import {BASE_API_URL} from '../common/Constants.jsx';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import ForumPanel from '../Discover/ForumPanel'

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
      <section id="three" class="main style1 special">
				<div class="container">
					<header class="major">
						<h2>Discover</h2>
					</header>
					<p>Browse through JBoard's various forums, or create your own</p>
          <ul class="actions special">
            <li><a href={"/create_forum"} class="button">Create</a></li>
          </ul>
          <div class="row gtr-150">
          {
            this.state.forums.map((forum, i) => {
              return (
                <ForumPanel title={forum.title} description={forum.description} image={forum.image} id={forum._id} post_count={forum.post_count} num={i}/>
              )
            })
          }
          </div>
				</div>
			</section>
    );
  }
}
