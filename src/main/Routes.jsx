import { Route, Routes } from 'react-router-dom'
import AddPlant from '../views/AddPlant'
import Care from '../views/Care'
import Home from '../views/Home'
import MyPlants from '../views/MyPlants'
import Profile from '../views/Profile'

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/addPlant' element={<AddPlant />} />
      <Route path='/care' element={<Care />} />
      <Route path='/myPlants' element={<MyPlants />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default MainRoutes
