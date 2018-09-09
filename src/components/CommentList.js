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
      <div className="medium-3 cell sticky-container" data-sticky-container style={{height: 318}}>
        <div className="sticky is-at-top is-stuck" data-sticky data-anchor="content" data-resize="kwplk3-sticky" data-mutate="kwplk3-sticky" data-e="usdz97-e" data-events="mutate" style={{maxWidth: 270, marginTop: '1em', bottom: 'auto', top: 0}}>
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
