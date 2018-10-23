import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

export class WeeklyProgress extends Component {

  render() {
    return (

        <div className="card">
        <div className="card-divider">
            Weekly Progress 
            <i className="step fi-widget size-16 right"><Link to="/preferences">&nbsp;Configure</Link></i>
        </div>
        <div className="card-section">


        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(WeeklyProgress)
