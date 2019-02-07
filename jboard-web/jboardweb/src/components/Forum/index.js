import React from 'react';
import ForumBoard from '../Forum/ForumBoard'
import PostForm from '../Forum/PostForm'
import {Label} from 'react-bootstrap';

export default class Forum extends React.Component {
  constructor(props, {match}) {
    super(props)

  }
  render() {
    return (
      <div>
        <section id="header">
          <div class="inner">
            <span class="icon major fa-comments"></span>
            <h1>{this.props.match.params.title}</h1>
            <ul class="actions special">
              <li><a class="button scrolly" href={"/create_post/" + this.props.match.params.title}>Create a Post</a></li>
            </ul>
          </div>
        </section>
        <PostForm forum={this.props.match.params.title}/>
        <ForumBoard title={this.props.match.params.title}/>
      </div>
    )
  }
}
