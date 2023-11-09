import React from 'react'
import Mainpage from './component/Mainpage'
import BgYellow from './component/BgYellow'
import Footer from './component/Footer'

const Homepage = () => {
  return (
    <div className='relative h-auto bg-color grid md:flex  justify-center'>
      <Mainpage/>
      <BgYellow/>
      <Footer/>
    </div>
  )
}

export default Homepage
