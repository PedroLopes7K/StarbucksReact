// import './App.css'
import React, { useState } from 'react'

import Header from './Components/Header'
import Home from './Components/Home'
import Logo from './assets/logo.png'

function App() {
  const [logo, setLogo] = useState(Logo)
  return (
    <div className="App">
      <Header logo={logo} />
      <Home setarLogo={setLogo} />
    </div>
  )
}

export default App
