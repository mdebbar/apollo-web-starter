import React, { Component, PropTypes as T } from 'react'
import AuthService from '../auth/AuthService'

export default class Logout extends Component {
  static propTypes = {
    children: T.node,
  }

  componentWillMount() {
    AuthService.logout()
  }

  render() {
    return <div>{this.props.children}</div>
  }
}
