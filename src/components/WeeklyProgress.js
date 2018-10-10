import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class WeeklyProgress extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (

        <div class="card">
        <div class="card-divider">
            Weekly Progress 

            <i class="step fi-widget size-16 right">&nbsp;Configure</i>
        </div>
        <div class="card-section">


        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(WeeklyProgress)
