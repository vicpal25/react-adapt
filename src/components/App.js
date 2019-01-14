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
import MiniDrawer from '../components/shared/nav/Drawer'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const drawerWidth = 240;


const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});



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
        <MiniDrawer>
        {this.renderButton()}
        </MiniDrawer>
      </div>

    );
  }

  render() {
    return (
      <span>
        {this.renderHeader()}

        <main className={this.state.classes.content}>
        <div className={this.state.classes.toolbar}/>

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

        </main>

      </span>

      
    );
  }
}

function mapStateToProps(state) {

  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
