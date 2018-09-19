import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import BlogEntry from 'components/BlogEntry';
import * as actions from 'actions';
import 'components/App.css';

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }

  renderHeader() {
    return (

      <div className="top-bar">
        <div className="top-bar-left">
        <ul className="menu">
        <li className="menu-text"><Link to="/">uʻi</Link></li>
        </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>  </li>
            <li><Link to="/post">Post A Comment</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li>{this.renderButton()}</li>
          </ul>
        </div>
      </div>

    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <article className="grid-container">
          <div className="grid-x grid-margin-x" id="content">
            <div className="medium-9 cell">
              <Route path="/post" component={CommentBox} />
              <Route path="/" exact component={CommentList} />
              <Route path="/blog" component={BlogEntry} />
            </div>
            <CommentList/>
            </div>
        </article>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
