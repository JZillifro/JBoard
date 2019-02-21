import React from 'react';
import {Label} from 'react-bootstrap';
import axios from 'axios';
import {BASE_API_URL} from '../common/Constants.jsx';
import PostPanel from '../PostPanel';
import PostForm from '../Forum/PostForm.js';
import ForumHead from '../Forum/ForumHead.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      sort: "best",
      numPosts: 10
    }
    this.setSort = this.setSort.bind(this);
    this.morePosts = this.morePosts.bind(this);
  }
  componentDidMount() {
    axios.get(`${BASE_API_URL}/posts/forum/${this.props.match.params.ID}?sort=${this.state.sort}`).then(res => {
      const posts = res.data
      this.setState({posts})
    }).catch(err => {
      console.log(err)
    });

  }
  setSort(){
    axios.get(`${BASE_API_URL}/posts/forum/${this.props.match.params.ID}?sort=${document.getElementById('sort_choice').value}`).then(res => {
      const posts = res.data
      this.setState({
        posts: posts,
        sort: document.getElementById('sort_choice').value
      })
    }).catch(err => {
      console.log(err)
    });
  }
  morePosts(){
    this.setState({
      numPosts: this.state.numPosts+10
    });
  }
  render() {
    return (<div>
      <section id="header">
				<div class="inner">
					<ForumHead ID={this.props.match.params.ID}/>
					<ul class="actions special">
            <select  id = "sort_choice" class = "button scrolly" style={{width:"10%", textAlign: "center"}} onChange={() => this.setSort()}>
              <option value="best">Best</option>
              <option value="buzz">Buzz</option>
              <option value="new">New</option>
            </select>
					</ul>
				</div>
			</section>
      <PostForm forum={this.props.match.params.ID}/>
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
                voteScore = {post['up_votes']-post['down_votes']}
                commentCount = {post['comment_count']}
                key = {i}
                num = {i}
              />
            )
          })
        }
        {
          this.state.numPosts < this.state.posts.length &&
          <ul class="actions special">
            <li><a class="button" onClick={() => this.morePosts()}>Load More</a></li>
          </ul>
        }
      </div>
    </div>)
  }
}
//
//
//
//
// import React from 'react';
// import ForumBoard from '../Forum/ForumBoard'
// import PostForm from '../Forum/PostForm'
// import {Label} from 'react-bootstrap';
//
// export default class Forum extends React.Component {
//   constructor(props, {match}) {
//     super(props)
//
//   }
//   render() {
//     return (
//       <div>
//         <section id="header">
//           <div class="inner">
//             <span class="icon major fa-comments"></span>
//             <h1>{this.props.match.params.title}</h1>
//             <ul class="actions special">
//               <li><a class="button scrolly" href={"/create_post/" + this.props.match.params.title}>Create a Post</a></li>
//             </ul>
//           </div>
//         </section>
//         <PostForm forum={this.props.match.params.title}/>
//         <ForumBoard title={this.props.match.params.title}/>
//       </div>
//     )
//   }
// }
