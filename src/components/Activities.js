import React, { Component } from 'react';
import _ from 'lodash';

import { WeeklyProgress } from './WeeklyProgress';

import { connect } from 'react-redux'
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LineChart, Line, CartesianGrid, Tooltip, YAxis, XAxis} from 'recharts';

let chartData = [];

const initialState = {
    searchText: '',
    filteredItems: [ ]
};

export class Activities extends Component {

  constructor(props) {
    super(props);
    this.props.fetchActivitiesFiltered(3);
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

  converDate(date) {
    var timestamp = new Date(date);
    return timestamp.toLocaleDateString();
  }

  renderChart() {

    return (
        <LineChart width={350} height={180} data={this.props.chart} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
        <Line name="Avg. Speed" type="monotone" dataKey="average_speed" stroke="#ffac08" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="start_date_local" />
        <YAxis />
        <Tooltip />
    </LineChart>)
  
  }

  renderActivites() {

    if(this.props.activities && Object.values(this.props.activities)) {

        return this.props.activities.map(activity => {
            return  <tbody key={activity.upload_id}>
                <tr>
                    <td> <Link to={`/activities/${activity.id}`}>{activity.name}</Link></td>
                    <td className="text-center">{this.metersToMiles(activity.distance)}</td>
                    <td className="text-center">{this.secondsToHours(activity.moving_time)}</td>
                    <td className="text-center">{this.mscTomph(activity.average_speed)}</td>
                    <td className="text-center">{this.converDate(activity.start_date_local)}</td>
                    <td className="text-center">{activity.type}</td>
                </tr>
            </tbody>
       
        })  

    }
  }

  render() {
    return (
        <div className="grid-x grid-margin-x" id="content">

            <div className="medium-8 cell">
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
        </div>
        <div className="medium-4 cell chart-column">

            <div class="card">
                <div class="card-divider">
                    Recent Avg. speed analysis
                </div>
                <div class="card-section">
                {this.renderChart()}
                </div>
            </div>

            <WeeklyProgress/>



        </div>
    </div>

    )
  }
}


function mapStateToProps(state) {
    return { chart: state.chart[0], activities: state.athlete[1] };
}

export default connect(mapStateToProps, actions)(requireAuth(Activities))

