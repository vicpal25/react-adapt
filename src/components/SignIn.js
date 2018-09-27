import React, { Component } from 'react';
import ReactPasswordStrength from 'react-password-strength';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';


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
    // console.log(e);
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

    this.props.history.push('/blog');

  });
};

  render() {

    const { handleSubmit } = this.props;

    return (

            <form onSubmit={handleSubmit(this.onSubmit)}>

            <label htmlFor="email">EMAIL</label>
            <Field name="email" type="text" component="input" autoComplete="none" />
            <label htmlFor="password">PASSWORD</label>
            <Field name="password" type="password" component="input" autoComplete="none" />

            <div>{this.props.errorMessage}</div>

            <button>Sign In</button>

            <p>Dont have an account?<Link to="/signup">Create Account</Link></p>

            </form>


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



