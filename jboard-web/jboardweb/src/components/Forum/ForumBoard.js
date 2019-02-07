import React from 'react';
import axios from 'axios';
import {BASE_API_URL} from '../common/Constants.jsx';
import PostPanel from '../PostPanel';

export default class HomeBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    axios.get(`${BASE_API_URL}/posts/?forum=` + this.props.title).then(res => {
      const posts = res.data
      this.setState({posts})
    }).catch(err => {
      console.log(err)
    });

  }

  render() {
    console.log(this.state.posts)
    if(!this.state.posts){
      return (
        <div>
          FOCK
        </div>
      )
    } else {
      return (
        <div style={{marginLeft: '20px', marginRight: '20px'}}>
          <br/><br/><br/><br/>
          {
            this.state.posts.map((post, i) => {
              return (
                <PostPanel
                  id = {post['_id']}
                  title = {post['title']}
                  text = {post['text']}
                  image = {post['image']}
                  key = {i}
                  voteScore = {post['voteScore']}
                  commentCount = {post['commentCount']}
                />
              )
            })
          }
        </div>
      )
    }
  }
}
