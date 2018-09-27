import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {compose} from 'redux';


class SignOut extends Component {

    componentDidMount() {
        this.prop.signout();
    }
    

    render() {
        return (
            <div>
              Adios amigo!
            </div>
        );
    }
}

export default compose(
    connect(null, actions)
  )(SignOut);
  