import React, { Component } from 'react';
import ReactPasswordStrength from 'react-password-strength';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

import 'components/styles/SignIn.css';

class SignIn extends Component {

constructor() {
  //override constructor
  super();

  //initial email field state
  this.state = {
    email: '',
    password: '',    
    everFocusedEmail: false,
    everFocusedPassword: false,
    inFocus: '',
  };

}

onPasswordChange(e) {
    
}

handleEmailChange = (evt) => {
  this.setState({ email: evt.target.value });
}

handlePasswordChange = (evt) => {
  this.setState({ password: evt.target.value });
}

canBeSubmitted() {
  const errors = this.validate(this.state.email, this.state.password);
  const isDisabled = Object.keys(errors).some(x => errors[x]);
  return !isDisabled;
}

validate(email, password) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0,
    password: password.length === 0,
  };
}


onSubmit = formProps => {
  this.props.signin(formProps, ()=> {

    this.props.history.push('/athlete');

  });
};

  render() {

    const { handleSubmit } = this.props;

    return (

      <div className="grid-x grid-margin-x" id="content">

            <div className="medium-4 cell">

            <form className="signinform" onSubmit={handleSubmit(this.onSubmit)}>

            <header className="login-header">
            <h5 className="little-big-header">Sign In to Get Started</h5>
            </header>

            <label htmlFor="email">EMAIL</label>
            <Field name="email" type="text" component="input" autoComplete="none" />
            <label htmlFor="password">PASSWORD</label>
            <Field name="password" type="password" component="input" autoComplete="none" />

            <div>{this.props.errorMessage}</div>

            <button className="button signin-button expanded">Sign In</button>

            <div className="signup-callout">
                <p>Dont have an account?<Link to="/signup">Sign up now!</Link></p>        
            </div>

            </form>

            </div>

            <div className="medium-8 cell">
            </div>
    </div>            

    )
  }
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.errorMessage }  
}


export default compose(
  connect(mapStateToProps, actions),
  reduxForm({'form': 'signin'})
)(SignIn);



