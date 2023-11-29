'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface TranlateProps {
    children: ReactNode;
    tranlateY: number;
}

const Translate = ({children, tranlateY}: TranlateProps) => {
  return (
    <motion.div
    initial={{opacity: 0, translateY: tranlateY}}
    animate={{opacity:1, translateY: 0, transition: {type: "spring", duration: 2}}}
    className='relative z-[9]'
    >
    {children}  
    </motion.div>
  )
}

export default Translate
