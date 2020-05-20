import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomePage from '../components/homePage';

class App extends Component {
  render() {
    return (
      <HomePage/>
      // <div>
      //   <h3>User Authentication System</h3>
      //   {this.props.children}
      // </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;