import React from 'react';
import {Label, Jumbotron, Image, Col, Row} from 'react-bootstrap';
import {BASE_API_URL} from '../common/Constants.jsx';
import axios from 'axios';
import CommentForm from '../CommentSection/CommentForm';
import CommentPanel from '../CommentSection/CommentPanel';

export default class CommentSection extends React.Component {
  constructor(props, {match}) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    axios.get(`${BASE_API_URL}/comments/get?id=${this.props.id}&type=${this.props.type}`).then(res => {
      const comments = res.data
      this.setState({comments})
    }).catch(err => {
      console.log(err)
    });
  }

  render() {
    if(this.state.comments){
      return (
        <div>
          <CommentForm type={this.props.type} id={this.props.id}/>
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
