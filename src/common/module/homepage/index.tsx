import React from 'react'
import Mainpage from './component/Mainpage'
import BgYellow from './component/BgYellow'

const Homepage = () => {
  return (
    <div className='relative h-screen bg-color flex justify-center'>
      <Mainpage/>
      <BgYellow/>
    </div>
  )
}

export default Homepage
