import React, { Component } from 'react'
import FormInput from '../FormInput'
import './style.css'
import SearchProvider, { SearchContext } from '../SearchProvider'

export default class ContactForm extends Component {
  render() {
    return (
      <SearchProvider>
        <div className="contactForm">
          <SearchContext.Consumer>
            {context => (
              <div className="ContactForm material-rounded">
                <h2 className="swatch">{this.context.pageTitle}</h2>
                <p>
                  <FormInput default="Input Number 1" />
                  <FormInput default="Input Number 2" />
                  <FormInput default="Input Number 3" />
                </p>
              </div>
            )}
          </SearchContext.Consumer>
        </div>
      </SearchProvider>
    )
  }
}
