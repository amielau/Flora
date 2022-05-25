import React, { useState, useEffect } from 'react'
import { Button, Box } from '@mui/material'
import capstoneVid from '../assets/capstoneVid.mp4'

// words arr self-typing
const words = [
  'Have you botany plants lately?',
  'Someone has been adding soil to my garden. The plot thickens',
  'Im very frond of you.',
  'Scarecrows are always garden their patch',
]

function Home() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return
    }
    if (subIndex === words[index].length + 1 && index !== words.length - 1 && !reverse) {
      setReverse(true)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex(prev => prev + 1)
      return
    }
    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (reverse ? -1 : 1))
    }, 200)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  //self-typing

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
