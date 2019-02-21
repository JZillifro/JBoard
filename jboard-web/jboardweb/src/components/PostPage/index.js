import React from 'react';
import {Label, Jumbotron, Image, Col, Row} from 'react-bootstrap';
import {BASE_API_URL} from '../common/Constants.jsx';
import axios from 'axios';
import CommentSection from '../CommentSection';
import DownVote from '../PostPage/DownVote'
import UpVote from '../PostPage/UpVote'

export default class PostPage extends React.Component {
  constructor(props, {match}) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    axios.get(`${BASE_API_URL}/posts/${this.props.match.params.ID}`).then(res => {
      const post = res.data
      this.setState({post})
    }).catch(err => {
      console.log(err)
    });
  }

  render() {
    if(this.state.post){
      return (
        <div style={{minHeight:"80vh"}}>
          <Jumbotron>
            <h1>{this.state.post.title}</h1>
            <div style={{marginLeft: '20px', marginRight: '20px'}}>
              <Row className="show-grid">
                <Col md={6} mdPush={6}>
                  <div style={{textAlign: "center"}}>
                    <div style={{display: "inline-block"}}>
                      <Image src={this.state.post.image} responsive data-provide="lightbox"/>
                    </div>
                  </div>
                </Col>
                <Col md={6} mdPull={6}>
                  <p>
                    <div dangerouslySetInnerHTML={{ __html: this.state.post.text }} />
                  </p>
                </Col>
              </Row>
              <span> | </span><span class="icon fa-comment"> </span><span>{this.state.post.comment_count}</span><span> | </span>
              <UpVote id={this.state.post._id} votes={this.state.post.up_votes}/><span> | </span>
              <DownVote id={this.state.post._id} votes={this.state.post.down_votes}/><span> | </span>
            </div>
          </Jumbotron>
          <div style={{marginLeft:"2%", marginRight:"2%"}}><CommentSection id={this.state.post['_id']} type="p"/></div>
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
