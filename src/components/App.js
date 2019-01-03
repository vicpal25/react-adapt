import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import Order from 'components/Order';
import SignUp from 'components/SignUp';
import SignIn from 'components/SignIn';
import SignOut from 'components/SignOut';
import BlogEntry from 'components/BlogEntry';
import Activity from 'components/detailed/Activity';
import Athlete from 'components/Athlete';
import Preferences from 'components/admin/Preferences';
import * as actions from 'actions';
import 'components/App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class App extends Component {
  
  state = {
    segments: [],
    classes: styles
}
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
          <li><Link to="/preferences">Preferences</Link></li>
          </ul>
        );
    }
  }

  renderHeader() {
    return (

      <div className={this.state.classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={this.state.classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
            {this.renderButton()}
          </Toolbar>
      </AppBar>
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
              <Route path="/order" component={Order} />
              <Route path="/" exact component={SignIn} />
              <Route path="/blog" component={BlogEntry} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signout" component={SignOut} />
              <Route path="/signin" component={SignIn} />
              <Route path="/activities/:id" component={Activity} />
              <Route path="/preferences" component={Preferences} />
        </article>

      </span>

      
    );
  }
}

function mapStateToProps(state) {

  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
