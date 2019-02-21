import React from 'react';
import axios from 'axios';
import {BASE_API_URL} from '../common/Constants.jsx';
import PostPanel from '../PostPanel';

export default class HomeBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: "best"
    }

  }

  componentDidMount() {
    axios.get(`${BASE_API_URL}/posts/_landing?sort=${this.props.sort}`).then(res => {
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
          Uh oh...
        </div>
      )
    } else {
      return (<div>

            <div style={{marginLeft: '20px', marginRight: '20px'}}>
              <br/><br/><br/><br/>
              {
                this.props.sort
              }
              {
                this.state.posts.slice(0, this.state.numPosts).map((post, i) => {
                  return (
                    <PostPanel
                      id = {post['_id']}
                      title = {post['title']}
                      text = {post['text']}
                      image = {post['image']}
                      key = {i}
                      num = {i}
                    />
                  )
                })
              }
            </div>


      </div>)
    }
  }
}
