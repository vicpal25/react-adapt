import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
          <div>
            <label htmlFor="email">EMAIL</label>
            <input type="text" name="email" /><br />
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" /><br />
            <input type="submit" />
            <p>Dont have an account?<Link to="/signup">Create Account</Link></p>
            
          </div>          
    )
  }
}
