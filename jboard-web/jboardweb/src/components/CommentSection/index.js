import React from 'react';
import {Label, Jumbotron, Image, Col, Row, Button} from 'react-bootstrap';
import {BASE_API_URL} from '../common/Constants.jsx';
import axios from 'axios';
import CommentForm from '../CommentSection/CommentForm';
import CommentPanel from '../CommentSection/CommentPanel';

export default class CommentSection extends React.Component {
  constructor(props, {match}) {
    super(props)
    this.state = {
      reply: false
    }
    this.replySwitch = this.replySwitch.bind(this);
  }

  componentDidMount() {
    axios.get(`${BASE_API_URL}/comments/get?id=${this.props.id}&type=${this.props.type}`).then(res => {
      const comments = res.data
      this.setState({comments})
    }).catch(err => {
      console.log(err)
    });
  }

  replySwitch(event) {
    // event.preventDefault();
    this.setState({
      reply: !this.state.reply
    });
  }

  render() {
    if(this.state.comments){
      return (
        <div>
          <a onClick={() => this.replySwitch()} style={{color: "rgb(211,211,211)"}}>reply</a>
          {
            this.state.reply && <CommentForm type={this.props.type} id={this.props.id}/>
          }
          {
            this.state.comments.map(
              (comment, i) => {
                return (
                  <CommentPanel
                    text = {comment['text']}
                    id = {comment['_id']}
                  />
              )
            })
        }
        </div>
      );
    }else{
      return (
        <div>
          <br/>
          <br/>
          <br/>
          <h4>¯\_(ツ)_/¯</h4>
        </div>
      )
    }

  }
}
