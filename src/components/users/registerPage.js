import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { registerUserActions } from '../../actions/authenticationActions';


class RegisterPage extends Component {
  
  onHandleRegistration = (event) => {
    event.preventDefault();
    //Get value of each input
    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    //Collect in object all inputs
    const data = {
      name,email,password
    };

    // Send object with data to registerUserAction function
    this.props.dispatch(registerUserActions(data));

  }
  
  render() {
    let message, isSuccess;
  
    // Check if response from server exist
    if(this.props.response.register.hasOwnProperty('response')) {
      isSuccess = this.props.response.register.response.success;
      message = this.props.response.register.response.message;
    }

    return (
      <div>
        <h3>RegisterPage</h3>
        
        {!isSuccess ? <div>{message}</div> : browserHistory.push('login')}
        <form onSubmit={this.onHandleRegistration}>
        <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>
        Already have account? <Link to='login'>Login here</Link>
      </div>
    )
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(RegisterPage);