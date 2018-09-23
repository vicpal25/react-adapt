import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return (
      <div className="medium-3 cell">
        <div style={{maxWidth: 270, marginTop: '1em', bottom: 'auto', top: 0}}>
          <ul>{this.renderComments()}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
