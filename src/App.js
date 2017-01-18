import './App.css'
import React, { Component, PropTypes as T } from 'react'
import AuthService from './utils/AuthService'
import Nav from './nav/Nav'

function requireLogin() {
  if (!AuthService.loggedIn()) {
    AuthService.login()
  }
}

export default class App extends Component {
  static propTypes = {
    children: T.node,
  }

  componentDidMount() {
    requireLogin()
  }

  render() {
    let children = AuthService.loggedIn() ? this.props.children : null
    return (
      <div className="App">
        <Nav />
        {children}
      </div>
    )
  }
}
