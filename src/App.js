import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppContainer from './main/AppContainer'
import Login from './main/Login'

function App() {
  // useAuthenticate()
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<AppContainer />} />
    </Routes>
  )
}

export default App
