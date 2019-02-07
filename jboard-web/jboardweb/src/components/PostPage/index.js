import React from 'react';
import {Label, Jumbotron, Image, Col, Row} from 'react-bootstrap';
import {BASE_API_URL} from '../common/Constants.jsx';
import axios from 'axios';
import CommentSection from '../CommentSection';

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
        <div>
          <Jumbotron>
            <h1>{this.state.post.title}</h1>
            <div style={{marginLeft: '20px', marginRight: '20px'}}>
              <Row className="show-grid">
                <Col md={6} mdPush={6}>
                  <div style={{textAlign: "center"}}>
                    <div style={{display: "inline-block"}}>
                      <Image src={this.state.post.image} responsive />
                    </div>
                  </div>
                </Col>
                <Col md={6} mdPull={6}>
                  <p>
                    {this.state.post.text}
                  </p>
                </Col>
              </Row>
            </div>
          </Jumbotron>
          <CommentSection id={this.state.post['_id']} type="p"/>
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
