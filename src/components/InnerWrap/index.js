import React, { Component } from 'react'
import ContactForm from '../ContactForm'
import './style.css'

export default class InnerWrap extends Component {
  render() {
    return (
      <div className="InnerWrap material-rounded">
        <h2 className="swatch">InnerWrap</h2>
        <ContactForm />
      </div>
    )
  }
}
