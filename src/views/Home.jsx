import React, { useState, useEffect } from 'react'
import { Button, Box } from '@mui/material'
import capstoneVid from '../assets/capstoneVid.mp4'

// words arr self-typing
const words = ['test1', 'test2']

function Home() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  return (
    <div className='Home'>
      <video src={capstoneVid} autoPlay loop muted />
      <div className='content'>
        <h1>About Flora</h1>
        {/* self-typing feature */}
        <h1>{`${words[index].substring(0, subIndex)}`}</h1>
        {/* self-typing feature */}
      </div>
    </div>
  )
}
export default Home
