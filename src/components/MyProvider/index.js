import React from 'react'

export const SearchContext = React.createContext()

class SearchProvider extends React.Component {
  constructor(props) {
    super(props)

    this.changeLocale = () => {
      this.setState(state => {
        const newLocale = state.locale === 'en' ? 'fr' : 'en'
        return {
          locale: newLocale,
        }
      })
    }
    this.state = {
      title: 'This Is a Context Title',
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
