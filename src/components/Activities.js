import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class Activities extends Component {
 
  constructor(props) {
    super(props);
    this.props.fetchActivities();
  }

  mscTomph(msc) {
    return Math.round(msc * 3600 / 1610.3*1000)/1000;
  }

  metersToMiles(meters) {
    return Math.round(meters*0.000621371192);
  }

  secondsToHours(seconds) {
    return  Math.floor(seconds / 60);
  }

  renderActivites() {

    if(this.props.activities && Object.values(this.props.activities)) {

        return this.props.activities.map(activity => {
            return  <tbody key={activity.upload_id}>
                <tr>
                    <td> <Link to={`/activities/${activity.id}`}>{activity.name}</Link></td>
                    <td>{this.metersToMiles(activity.distance)}</td>
                    <td >{this.secondsToHours(activity.moving_time)}</td>
                    <td>{this.mscTomph(activity.average_speed)}</td>
                    <td>{activity.start_date_local}</td>
                    <td>{activity.type}</td>
                </tr>
            </tbody>
       
        })  

    }
  }

  render() {
    return (
      <div className="athlete-list row">
      <table>
      <thead>
          <tr>
            <th>Name</th>
            <th>Distance  <small>(In Miles)</small></th>
            <th>Moving Time  <small>(In minutes)</small></th>
            <th>Average Speed  <small>(MPH)</small></th>
            <th>Start Time/Date</th>
            <th>Workout Type</th>
          </tr>
      </thead>
              {this.renderActivites()} 
      </table>       
      </div>
    )
  }
}


function mapStateToProps(state) {
    return { activities: state.athlete[1] };
}

export default connect(mapStateToProps, actions)(requireAuth(Activities))

