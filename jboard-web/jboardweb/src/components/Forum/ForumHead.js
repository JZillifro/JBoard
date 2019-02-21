import React from 'react';
import {Label, Image, Col} from 'react-bootstrap';
import axios from 'axios';
import {BASE_API_URL} from '../common/Constants.jsx';

export default class ForumHead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      forum: []
    }
  }
  componentDidMount() {
    axios.get(`${BASE_API_URL}/forums/${this.props.ID}`).then(res => {
      const forum = res.data
      this.setState({forum})
    }).catch(err => {
      console.log(err)
    });

  }
  render() {
    if(this.state.forum){
      return (<div>

            <span><Image src={this.state.forum.image} thumbnail style={{maxWidth:"33vw", maxHeight:"33vh"}}/></span>

  					<h1>{this.state.forum.title}</h1>
            <p>{this.state.forum.description}</p>
            <span class="icon fa-file"> </span><span>{this.state.forum.post_count}</span>
            <i class="fas fa-file-alt"></i>
      </div>)
    }else{
      return (<div>
  					<span class="icon major fa-clipboard"></span>
  					<h1>. . .</h1>
      </div>)
    }
  }
}
