import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

// btn_strava_connectwith_orange.png
import 'components/styles/Misc.css';

export class StravaConnect extends Component {
  static propTypes = {
    prop: PropTypes
  }


  render() {
    return (
      <div>
        <a className="button-strava" href="https://www.strava.com/oauth/authorize?client_id=28945&response_type=code&approval_prompt=1&redirect_uri=http://localhost:3000">&nbsp;</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(StravaConnect)
