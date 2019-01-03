import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class CommentList extends Component {


  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 1
    }
  }

  renderComments() {
    return this.props.comments.map(comment => {

      return <ListItem key={comment} button selected={this.state.selectedIndex === 0}>
              <ListItemText primary={comment} />
            </ListItem>
    });
  }

  render() {
    return (
      <div className="medium-3 cell">
        <div style={{maxWidth: 270, marginTop: '1em', bottom: 'auto', top: 0}}>

          <List component="nav">
            {this.renderComments()}
          </List>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
