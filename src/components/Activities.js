import React, { Component } from 'react';
import _ from 'lodash';

import { WeeklyProgress } from './WeeklyProgress';
// import Loadable from 'react-loadable';
import { connect } from 'react-redux'
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LineChart, Line, CartesianGrid, Tooltip, YAxis, XAxis} from 'recharts';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {metersToMiles, secondsToHours, mscTomph, converDate } from '../components/shared/methods';

import 'components/styles/Activities.css';

let chartData = [];

const initialState = {
    searchText: '',
    filteredItems: [],
    bothOn: false
};

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
    }))(TableCell);

export class Activities extends Component {



  constructor(props) {
    super(props);
    this.props.fetchActivities(11389513);
    this.props.fetchActivitiesFiltered(3, 11389513);

    this.state = {
        bothOn: false
      }
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

  handleToggle = on => {
    this.setState({bothOn: (on) ? true : false})
  }

  renderActivites() {

    if(this.props.activities && Object.values(this.props.activities)) {

        return this.props.activities.map(activity => {
            return  <TableBody key={activity.upload_id}>
                <TableRow>
                    <CustomTableCell> <Link to={`/activities/${activity.id}`}>{activity.name}</Link></CustomTableCell>
                    <CustomTableCell className="text-center">{ metersToMiles(activity.distance)}</CustomTableCell>
                    <CustomTableCell className="text-center">{ secondsToHours(activity.moving_time)}</CustomTableCell>
                    <CustomTableCell className="text-center">{ mscTomph(activity.average_speed)}</CustomTableCell>
                    <CustomTableCell className="text-center">{ converDate(activity.start_date_local)}</CustomTableCell>
                    <CustomTableCell className="text-center">{activity.type}</CustomTableCell>
                </TableRow>
            </TableBody>       
        })  

    }
  }

  render() {
    return (
        <div className="grid-x grid-margin-x" id="content">

            <div className="medium-8 cell">
            <div className="athlete-list row">
            <Table className="activities">
            <TableHead>
                <TableRow>
                    <CustomTableCell>Name</CustomTableCell>
                    <CustomTableCell>Distance  <small>(In Miles)</small></CustomTableCell>
                    <CustomTableCell>Moving Time  <small>(In minutes)</small></CustomTableCell>
                    <CustomTableCell>Average Speed  <small>(MPH)</small></CustomTableCell>
                    <CustomTableCell>Start Time/Date</CustomTableCell>
                    <CustomTableCell>Workout Type</CustomTableCell>
                </TableRow>
            </TableHead>
                  {this.renderActivites()}
            </Table>       
            </div>
        </div>
        <div className="medium-4 cell chart-column">

            <div className="card">
                <div className="card-divider">
                    Recent Avg. speed analysis
                </div>
                <div className="card-section">
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

