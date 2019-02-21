import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Footer from './Footer';
import Navi from './Navi';
import Home from './Home';
import Forum from './Forum';
import PostPage from './PostPage';
import CreateForum from './CreateForum';
import Discover from './Discover';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <span id='top'/>
          <Navi/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/forum/:ID" component={Forum}/>
            <Route exact path="/post/:ID" component={PostPage}/>
            <Route exact path="/discover" component={Discover}/>
            <Route exact path="/create_forum" component={CreateForum}/>
            <Redirect from='*' to='/404' status={404}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
