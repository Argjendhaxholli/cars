import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../container/App';
import RegisterPage from '../components/users/registerPage';
import LoginPage from '../components/users/loginPage';
import DashboardPage from '../components/dashboardPage';
import HomePage from '../components/homePage';

function isLoggedIn() {
  if(localStorage.getItem('token')){
    return true;
  }
  return false;
}

function requireAuth(nextState,replace){
  if(!isLoggedIn()){
    replace({
      pathname:'/login'
    });
  }
}

export default (
  <Route path='/' component={App}>
    <IndexRoute component={LoginPage} />
    <Route path='home' component={HomePage} />
    <Route path='login' component={LoginPage}/>
    <Route path='register' component={RegisterPage} />
    <Route path='dashboard' component={DashboardPage} onEnter={requireAuth} />
  </Route>
);