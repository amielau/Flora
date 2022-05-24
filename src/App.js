import React from 'react'
import AppContainer from './main/AppContainer'
import Authenticate from './main/Authenticate'
import Register from './main/Register'
import { Routes, Route } from 'react-router-dom'

function App() {
  // useAuthenticate()
  return (
    <Routes>
      <Route path='/authenticate' element={<Authenticate />} />
      <Route path='/register' element={<Register />} />
      <Route path='/*' element={<AppContainer />} />
    </Routes>
  )
}

export default App
