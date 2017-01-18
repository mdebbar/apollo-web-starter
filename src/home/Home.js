import React, { Component, PropTypes as T } from 'react'

export default class Home extends Component {
  static propTypes = {
    children: T.node,
  }

  render() {
    return (
      <div>
        <h1>Home Page!</h1>
        {this.props.children}
      </div>
    )
  }
}
