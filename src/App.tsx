import { useState } from 'react'
import './App.css'

import Clock from './Clock'
import TitleScreen from './TitleScreen'

function App() {

  return (
    <div className="App flexbox">
      <Clock />
      <TitleScreen />
    </div>
  )
}

export default App
