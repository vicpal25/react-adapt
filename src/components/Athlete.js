import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';
import Activities from './Activities';

import 'components/styles/Athlete.css';

export class Athlete extends Component {
 
//  athlete;
  constructor(props) {
    super(props);
    this.props.fetchAthlete(11389513);
  }


  getcolumn(key, dataset){

    let value;

    dataset.map((item) => {
        item.key === key && (value = item.value);
    });

    return value;
        
  }

  renderAthleteStats() {
    
    if(this.props.athlete && Object.values(this.props.athlete)) {

        const filtered = _.pick(this.props.athlete, ["city", "email", "firstname", "follower_count", "friend_count", "profile_pic", "strava_id", "state", "username"])
        const athlete = Object.entries(filtered).map(([key, value]) => ({key,value}));

        const data = [{ x: 1, y: 3 }, { x: 3, y: 4 }]

        return (<div className="row clearfix">
                <div className="columns large-6 float-left">
                    <h1>{ this.getcolumn('firstname', athlete) }</h1>
                    <img key={ this.getcolumn('profile_pic', athlete) } src={ this.getcolumn('profile_pic', athlete)  } alt="" className="img-responsive" />
                </div>
                <div className="columns large-6 float-left">
                    { this.getcolumn('city', athlete) }, { this.getcolumn('state', athlete) } <br/>
                    FOLLWERS <span>{ this.getcolumn('follower_count', athlete) }</span> | FRIENDS  <span>{ this.getcolumn('friend_count', athlete) }</span> 

                </div>
            </div>
                        
            )

    }

  }

  render() {
 
    return (
        <div className="athlete">
        {this.renderAthleteStats()} 
        <h4>Recent Activities:</h4>
        <Activities/>
        </div>

    )
  }
}


function mapStateToProps(state) {
    return { athlete: state.athlete[0] };
}

export default connect(mapStateToProps, actions)(requireAuth(Athlete))
