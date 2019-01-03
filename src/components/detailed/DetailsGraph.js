import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DetailsGraph extends Component {

constructor(props) {
    super(props);

    console.log(props);

    this.state = {
        activityData: []
    }
}
    
  render() {

    return (
      <div class="row detailsgraph">
        <div class="column medium-12">
        <h1>Segment Graph</h1>
        <p>{this.state.activityData}</p>
        </div>
      </div>
    )
  }
}
