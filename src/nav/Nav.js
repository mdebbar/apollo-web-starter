import './Nav.css'
import React, { Component } from 'react'
import AuthService from '../utils/AuthService'
import logo from './logo.svg'

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <button onClick={AuthService.logout}>Logout</button>
        <img src={logo} className="Nav-logo" alt="logo" />
        <h2>Welcome to <em>Kino!</em></h2>
      </div>
    )
  }
}
