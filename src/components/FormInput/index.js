import React, { Component } from 'react'
import './style.css'

export default class FormInput extends Component {
  render() {
    return (
      <div className="FormInput material-rounded">
        <input type="text" value={this.props.default} />
      </div>
    )
  }
}
