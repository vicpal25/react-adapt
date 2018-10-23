import React, { Component } from 'react';
import _ from 'lodash';

// import Loadable from 'react-loadable';
import { connect } from 'react-redux'
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LineChart, Line, CartesianGrid, Tooltip, YAxis, XAxis} from 'recharts';

import 'components/styles/Activity.css';

export class Activity extends Component {

  constructor(props) {
    super(props);
    this.props.fetchActivity(this.props.match.params.id);    
  }

  renderActivity() {

    if(this.props.activity && Object.values(this.props.activity) && this.props.activity.length > 0) {

          console.log(this.props.activity[0].name);


        const activityData = this.props.activity[0];
        console.log(activityData);
        return(
          <div className="row details">
            <div className="medium-4 columns column-1">
              <Link to={`/athlete`}>Go Back</Link>

              <h3>{activityData.name}</h3>
              <img className="thumbnail" src={activityData.photos.primary? activityData.photos.primary.urls["600"] : "https://via.placeholder.com/600x400" } width="300" />
            </div>

            <div className='medium-8 columns column-2'>

                <table class="stack">
                <thead>
                  <tr>
                    <th width="50">Calories</th>
                    <th>Average Speed</th>
                    <th width="150">Table Header</th>
                    <th width="150">Table Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{activityData.calories}</td>
                    <td>{activityData.average_speed}</td>
                    <td>Content Goes Here</td>
                    <td>Content Goes Here</td>
                  </tr>
                </tbody>
              </table>
            
            </div>

          </div>

       

        )


    }
  }

  render() {
    return (
      <div className="activity">
            {this.renderActivity()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { activity: state.activities };
}
export default connect(mapStateToProps, actions)(requireAuth(Activity))



