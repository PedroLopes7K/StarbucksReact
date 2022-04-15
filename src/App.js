// import './App.css'
import React, { useState } from 'react'

import Header from './Components/Header'
import Home from './Components/Home'
import Logo from './assets/logo.png'

function App() {
  const [logo, setLogo] = useState(Logo)
  const [id, setId] = useState('green')
  return (
    <div className="App">
      <Header logo={logo} id={id} />
      <Home setarLogo={setLogo} setId={setId} />
    </div>
  )
}

export default App
