import React from 'react';
import {Label} from 'react-bootstrap';
import axios from 'axios';
import {BASE_API_URL} from '../common/Constants.jsx';

export default class DownVote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      votes: this.props.votes
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    axios.post(`${BASE_API_URL}/posts/downvote/${this.props.id}`).then(res => {
        this.setState({
          votes: res.data
        })
      });
  }
  render() {
    return (<span><a class="icon fa-arrow-down" onClick={() => this.handleClick()}> </a><span>{this.state.votes}</span></span>)
  }
}
