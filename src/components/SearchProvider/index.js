import React from 'react'

export const SearchContext = React.createContext()

class SearchProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pageTitle: 'Context Page Title',
      locale: 'en',
      changeLocale: this.changeLocale,
    }
  }

  render() {
    return (
      <SearchContext.Provider value={this.state}>
        {this.props.children}
      </SearchContext.Provider>
    )
  }
}

export default SearchProvider
