import './Nav.css'
import React, { Component } from 'react'
import { Link } from 'react-router'
import AuthService from '../auth/AuthService'
import logo from './logo.svg'

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        {AuthService.loggedIn() &&
          <Link to="/logout" className="Nav-logout">Logout</Link>
        }
        <img src={logo} className="Nav-logo" alt="logo" />
        <h2>Welcome to <em>Kino!</em></h2>
      </div>
    )
  }
}
