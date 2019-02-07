import React from 'react';
import HomeBoard from '../Home/HomeBoard'
import {Label} from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return (<div>
      <section id="header">
				<div class="inner">
					<span class="icon major fa-clipboard"></span>
					<h1>JBoard</h1>
					<p>the internet's garbage disposal</p>
					<ul class="actions special">
						<li><a href="#one" class="button scrolly">Discover</a></li>
					</ul>
				</div>
			</section>
      <HomeBoard/>
    </div>)
  }
}
