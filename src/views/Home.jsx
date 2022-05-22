import React from 'react'
import { Button, Box } from '@mui/material'
import capstoneVid from '../assets/capstoneVid.mp4'

function Home() {
  return (
    <div className='Home'>
      <video src={capstoneVid} autoPlay loop muted />
      <div className='content'>
        <h1>About Flora</h1>
      </div>
    </div>
  )
}
export default Home
