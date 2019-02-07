import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Footer from './Footer';
import Navi from './Navi';
import Home from './Home';
import Forum from './Forum';
import PostPage from './PostPage';
import CreatePost from './CreatePost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div  >
          <Navi/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/:title" component={Forum}/>
            <Route exact path="/post/:ID" component={PostPage}/>
            <Route exact path="/:title/create" component={CreatePost}/>
            <Redirect from='*' to='/404' status={404}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
