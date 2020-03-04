import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const navbarStyle = {
  backgroundColor: 'black',
  color: 'goldenrod'
}

const App = () => {
  return (
    <div style={navbarStyle}>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
