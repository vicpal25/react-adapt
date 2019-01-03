import React, { Component } from 'react'
import * as actions from 'actions';
import {SegmentEntry} from '../../shared/ui';
import {metersToMiles, secondsToHours, mscTomph, converDate } from '../../../components/shared/methods';
import SegmentMap from './segmentMap';
import Pr from './Pr';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });
  

export default class SegmentExplorer extends Component {

    state = {
        segments: [],
        classes: styles
    }

    componentWillMount() {

        const activity = actions.fetchActivity(this.props.matchId);

        activity.payload.then((response) => {
            this.setState({
                segments: response.data.segment_efforts
            });
        })

    }
    
    showMatches = (segments) => (

        segments ?     
        segments.map((segment)=> (

            <TableRow className={this.state.classes.row} key={segment.id}>
                <TableCell component="th" scope="row">
                {segment.name}
                </TableCell>
                <TableCell align="right">{metersToMiles(segment.distance)}</TableCell>
                <TableCell align="right"><Pr segment={segment} /></TableCell>
                <TableCell align="right">{converDate(segment.start_date)}</TableCell>
            </TableRow>
    
         ))
    
         : null
      
      )

    render() {

    return (

        <Paper className={this.state.classes.root}>
        <Table className={this.state.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Averge Miles</TableCell>
              <TableCell align="right">Personal Record</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.showMatches(this.state.segments)}
          </TableBody>
        </Table>
      </Paper>
        
    )
  }

}
