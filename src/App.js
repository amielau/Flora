import React from 'react'
import AppContainer from './main/AppContainer'
import Authenticate from './main/Authenticate'
import { Routes, Route } from 'react-router-dom'

function App() {
  // useAuthenticate()
  return (
    <Routes>
      <Route path='/authenticate' element={<Authenticate />} />
      <Route path='/*' element={<AppContainer />} />
    </Routes>
  )
}

export default App
