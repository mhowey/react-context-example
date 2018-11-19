import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './components/Wrapper'
import SearchProvider from './components/SearchProvider'

import './styles.css'

function App() {
  return (
    <SearchProvider>
      <div className="App material-rounded">
        <h2 className="swatch">Main App Component</h2>
        <Wrapper />
      </div>
    </SearchProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
