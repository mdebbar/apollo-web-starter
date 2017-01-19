import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import App from './App'
import Home from './home/Home'
import Logout from './auth/Logout'

export default class MainRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        {/* Any route under this hierarchy is login-protected */}
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
        </Route>

        {/* Transition the user to this route if you want to log them out */}
        <Route path="/logout" component={Logout}>
          <Redirect to="/" />
        </Route>

        {/* This is the callback url from Auth0. Keep this route outside "/" because at
          * this point, this user is still not logged in
          */}
        <Route path="/auth/callback" />
      </Router>
    )
  }
}
