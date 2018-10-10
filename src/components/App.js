import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import SignUp from 'components/SignUp';
import SignIn from 'components/SignIn';
import SignOut from 'components/SignOut';
import BlogEntry from 'components/BlogEntry';
import Activity from 'components/Activity';
import Athlete from 'components/Athlete';
import * as actions from 'actions';
import 'components/App.css';

class App extends Component {
  
  renderButton() {
    if (!this.props.authenticated) {
      return (
        <ul className="menu">
          <li><Link to="/signin">Sign In</Link></li>
         </ul>
      );
    } else {
      return (
        <ul className="menu">
          <li><Link to="/signout">Sign Out</Link></li>
          <li><Link to="/post">Post A Comment</Link></li>
          <li><Link to="/athlete">My Stats</Link></li>
          </ul>
        );
    }
  }

  renderHeader() {
    return (

      <div className="top-bar">
        <div className="top-bar-left">
        <ul className="menu">
        <li className="menu-text logo"><Link to="/">&nbsp;</Link></li>
        </ul>
        </div>
        <div className="top-bar-right">         
            {this.renderButton()}
        </div>
      </div>

    );
  }

  render() {
    return (
      <span>
        {this.renderHeader()}

        <article className="grid-container">
            <Route path="/athlete" component={Athlete} />
              <Route path="/post" component={CommentBox} />
              <Route path="/" exact component={SignIn} />
              <Route path="/blog" component={BlogEntry} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signout" component={SignOut} />
              <Route path="/signin" component={SignIn} />
              <Route path="/activities/:id" component={Activity} />
        </article>

      </span>

      
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
