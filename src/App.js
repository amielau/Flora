import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useAuthToken } from './hooks/useAuthToken'
import AppContainer from './main/AppContainer'
import Login from './main/Login'
import Register from './main/Register'

function App() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const token = useAuthToken()

  useEffect(() => {
    if (!token && pathname !== '/register' && pathname !== '/login') {
      navigate('/register')
    }
  }, [pathname, token, navigate])

  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<AppContainer />} />
    </Routes>
  )
}

export default App
