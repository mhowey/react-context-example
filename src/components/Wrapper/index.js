import React, { Component } from 'react'
import InnerWrap from '../InnerWrap'
import './style.css'

export default class Wrapper extends Component {
  render() {
    return (
      <div className="Wrapper material-rounded">
        <h2 className="swatch">Wrapper...</h2>
        <InnerWrap />
      </div>
    )
  }
}
