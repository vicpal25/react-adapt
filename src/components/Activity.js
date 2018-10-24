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

    this.state = {
      activityData: []
    }

  }

  componentWillMount() {

    const activity = actions.fetchActivity(this.props.match.params.id);

    activity.payload.then((response) => {
      this.setState({
        activityData: response.data
      });
    })

  }

  componentWillMount



  renderActivity() {

        const activityData = this.state.activityData;
        let activityPhoto = "https://via.placeholder.com/600x400";
            
        if(activityData.photos) {
            if(activityData.photos.primary) { 
              activityPhoto  =  activityData.photos.primary.urls["600"];
            }
        }
    
        return(
          <div className="row details">
            <div className="medium-4 columns column-1">
              <Link to={`/athlete`}>Go Back</Link>

              <h3>{activityData.name}</h3>

              <img className="thumbnail" src={activityPhoto} width="300" />

              </div>

            <div className='medium-8 columns column-2'>

                <table className="stack">
                <thead>
                  <tr>
                    <th width="50">Calories</th>
                    <th>Average Speed</th>
                    <th width="150">Distance</th>
                    <th width="150">Table Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{activityData.calories}</td>
                    <td>{activityData.average_speed}</td>
                    <td>{activityData.distance}</td>
                    <td>Content Goes Here</td>
                  </tr>
                </tbody>
              </table>
            
            </div>

          </div>

       

        )
    
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
return { activity:  state.activities };
}


export default connect((mapStateToProps), actions)(requireAuth(Activity))



