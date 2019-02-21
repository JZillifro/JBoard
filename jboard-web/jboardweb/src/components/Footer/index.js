import {Well, Button} from 'react-bootstrap';
import React, { Component } from 'react';
import AboutModal from '../Footer/AboutModal';

export default class Footer extends React.Component {
  handleClick() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section id="footer">
				<ul class="icons">
					<li><a href="https://github.com/JZillifro/JBoard" class="icon alt fa-github"><span class="label">GitHub</span></a></li>
				</ul>
        <br/>
        <AboutModal/>
			</section>
    );
  }
}
